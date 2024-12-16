/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */
//https://wavesurfer.xyz/examples/?soundcloud.js
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { tracks as audioUrls } from "./data";
import { formatTime } from "./utils";
import { useWavesurfer } from "@wavesurfer/react";
import Timeline from "wavesurfer.js/dist/plugins/timeline.esm.js";

type Props = {
  height: number;
};

const Analyzer = ({ height = 100 }: Props) => {
  const containerRef = useRef(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [urlIndex, setUrlIndex] = useState(0);

  // Create a gradient for the waveform, memoized for better performance
  const waveColorGradient = useMemo(() => {
    const dpr = window.devicePixelRatio || 1; // Get the DPR
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const gradient = ctx!.createLinearGradient(0, 0, 0, height); // Adjust height as needed
    gradient.addColorStop(0, "#fafafa"); // Top color (yellowish)
    gradient.addColorStop(
      (canvas.height * 0.5 * dpr) / canvas.height,
      "#fafafa"
    ); // Top color (yellowish)
    gradient.addColorStop(
      (canvas.height * 0.5 * dpr) / canvas.height,
      "#fafafa80"
    );
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
    /* gradient.addColorStop(
      (canvas.height * 0.5 * dpr) / canvas.height,
      "#FFE600"
    ); // Top color (yellowish)
    gradient.addColorStop(
      (canvas.height * 0.5 * dpr) / canvas.height,
      "#FFE600"
    ); // Top color (yellowish) */
    gradient.addColorStop(1, "#FFE600"); // Bottom color (purple)
    return gradient;
  }, []); // No dependencies as the gradient is static

  const { wavesurfer, isPlaying, currentTime } = useWavesurfer({
    container: containerRef,
    cursorWidth: 2,
    cursorColor: "#ffffff",
    height: height,
    barWidth: 5,
    barRadius: 10,
    waveColor: waveColorGradient,
    progressColor: progressColorGradient,
    url: audioUrls[urlIndex],
    minPxPerSec: 10,
    dragToSeek: true,
    hideScrollbar: true,
    sampleRate: 4000,
    normalize: false,
    barGap: 6,
    media: audioRef.current!,
  });

  const onUrlChange = useCallback(() => {
    setUrlIndex((index) => (index + 1) % audioUrls.length);
  }, []);

  const onPlayPause = useCallback(() => {
    if (wavesurfer) wavesurfer.playPause();
  }, [wavesurfer]);

  return (
    <>
      <div className="relative h-[100px]">
        <div ref={containerRef} />
      </div>
      <p>Current audio: {audioUrls[urlIndex]}</p>

      <p>Current time: {formatTime(currentTime)}</p>

      <p>Duration time: {formatTime(wavesurfer?.getDuration() ?? 0)}</p>

      <div style={{ margin: "1em 0", display: "flex", gap: "1em" }}>
        <button onClick={onUrlChange}>Change audio</button>

        <button onClick={onPlayPause} style={{ minWidth: "5em" }}>
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
      <audio ref={audioRef} loop />
    </>
  );
};

export default Analyzer;
