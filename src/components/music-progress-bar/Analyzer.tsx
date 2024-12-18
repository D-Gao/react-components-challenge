/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */
//https://wavesurfer.xyz/examples/?soundcloud.js
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { tracks as audioUrls } from "./data";
import { formatTime } from "./utils";
import { useWavesurfer } from "@wavesurfer/react";
import WaveSurfer from "wavesurfer.js";
import RegionsPlugin from "wavesurfer.js/dist/plugins/regions.esm.js";
import Timeline from "wavesurfer.js/dist/plugins/timeline.esm.js";
const regions = RegionsPlugin.create();
type Props = {
  height: number;
};
const dpr = window.devicePixelRatio || 1; // Get the DPR
const Analyzer = ({ height = 200 }: Props) => {
  const waveSurferRef = useRef<WaveSurfer | null>(null); // Ref to store the WaveSurfer instance
  const containerRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const [urlIndex, setUrlIndex] = useState(0);
  // Create a gradient for the waveform, memoized for better performance
  const waveColorGradient = useMemo(() => {
    const dpr = window.devicePixelRatio || 1; // Get the DPR
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const gradient = ctx!.createLinearGradient(0, 0, 0, height); // Adjust height as needed
    gradient.addColorStop(0, "#fafafa"); // Top color (yellowish)
    gradient.addColorStop(0.0, "#fafafa");
    gradient.addColorStop(0.0, "#fafafa80");
    gradient.addColorStop(1, "#fafafa80"); // Bottom color (purple)
    return gradient;
  }, []); // No dependencies as the gradient is static

  // Create a gradient for the waveform, memoized for better performance
  const progressColorGradient = useMemo(() => {
    //const dpr = window.devicePixelRatio || 1; // Get the DPR
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const gradient = ctx!.createLinearGradient(0, 0, 0, height); // Adjust height as needed

    gradient.addColorStop(0, "#FFE600"); // Top color (yellowish)
    /* gradient.addColorStop(0.0, "#FFE600");
    gradient.addColorStop(0.0, "#FFE60050");
    gradient.addColorStop(1, "#FFE60050"); // Bottom color (purple) */

    return gradient;
  }, []); // No dependencies as the gradient is static

  const onUrlChange = useCallback(() => {
    setUrlIndex((index) => (index + 1) % audioUrls.length);
  }, []);

  const onPlayPause = useCallback(() => {
    if (waveSurferRef.current) waveSurferRef.current.playPause();
  }, [waveSurferRef]);

  //init function
  useEffect(() => {
    // Initialize WaveSurfer when the component mounts
    if (containerRef.current) {
      waveSurferRef.current = WaveSurfer.create({
        container: containerRef.current,
        cursorWidth: 2,
        cursorColor: "#ffffff",
        height: height,
        barWidth: 5,
        barRadius: 100,
        waveColor: waveColorGradient,
        progressColor: "#FFE600",
        url: audioUrls[urlIndex],
        minPxPerSec: 1,
        dragToSeek: true,
        hideScrollbar: true,
        sampleRate: 4000,
        normalize: true,
        barGap: 6,
        media: audioRef.current!,
        renderFunction: (channels, ctx) => {
          //setup for different dpr devices
          const rect = ctx.canvas.getBoundingClientRect();
          const dpr = window.devicePixelRatio || 1;
          // Calculate physical resolution
          ctx.canvas.width = rect.width * dpr;
          ctx.canvas.height = rect.height * dpr;
          // Scale the drawing context so that drawing operations
          // in logical units map correctly to high DPR pixels
          ctx.scale(dpr, dpr);

          //define logical width & height in CSS pixels
          const width = rect.width;
          const height = rect.height;

          const scale = channels[0].length / width; // Scaling factor to map channel data to canvas width

          const regionStart = 10; // Region start in seconds
          const regionEnd = 20; // Region end in seconds

          const step = 8; // Distance between bars
          const gap = 3; // The vertical gap around the center

          ctx.clearRect(0, 0, width, height);
          ctx.translate(0, height / 2); // Move origin to the vertical center of the canvas
          /* ctx.fillStyle = waveColorGradient;
          ctx.strokeStyle = waveColorGradient; // Use current fillStyle */

          ctx.lineWidth = 5; // Bar thickness
          ctx.lineCap = "round"; // Rounded edges

          for (let i = 0; i < width; i += step) {
            const index = Math.floor(i * scale);
            const value = Math.abs(channels[0][index]);

            const barHeight = value * height * 0.5; // Scale the bar height to fit the canvas

            // Check if the bar falls within the fixed range

            ctx.strokeStyle = waveColorGradient; // Default bar color
            ctx.fillStyle = waveColorGradient; // Default bar color

            ctx.beginPath();
            // Top sub-bar (from above the center gap to the top)
            ctx.moveTo(i, -gap);
            ctx.lineTo(i, -barHeight);

            // Bottom sub-bar (from below the center gap to the bottom)
            ctx.moveTo(i, gap);
            ctx.lineTo(i, barHeight);
            ctx.stroke();
          }

          ctx.stroke();
          ctx.restore(); // Restore the canvas state
        },
        plugins: [regions],
      });

      // Set duration once the waveform is ready
      waveSurferRef.current.on("ready", () => {
        setDuration(waveSurferRef.current?.getDuration() ?? 0);
      });

      waveSurferRef.current.on("decode", () => {
        regions.addRegion({
          start: 0,
          end: 80,
          content: "",
          color: "rgba(255, 0, 0, 0.5)",
          drag: false,
          resize: false,
        });
      });

      // Update current time during playback
      waveSurferRef.current.on("audioprocess", () => {
        setCurrentTime(waveSurferRef.current?.getCurrentTime() ?? 0);
      });

      // Cleanup on unmount
      return () => {
        if (waveSurferRef.current) {
          waveSurferRef.current.destroy();
        }
      };
    }
  }, [height, progressColorGradient, urlIndex, waveColorGradient]); // Re-run if the audio URL changes

  return (
    <>
      <div className="relative">
        <div ref={containerRef} id="waveform" />
      </div>
      <p>Current audio: {audioUrls[urlIndex]}</p>

      <p>Current time: {formatTime(currentTime ?? 0)}</p>

      <p>Duration time: {formatTime(duration ?? 0)}</p>

      <div style={{ margin: "1em 0", display: "flex", gap: "1em" }}>
        <button onClick={onUrlChange}>Change audio</button>

        <button onClick={onPlayPause} style={{ minWidth: "5em" }}>
          {waveSurferRef.current?.isPlaying() ? "Pause" : "Play"}
        </button>
      </div>
      <audio ref={audioRef} loop />
    </>
  );
};

export default Analyzer;
