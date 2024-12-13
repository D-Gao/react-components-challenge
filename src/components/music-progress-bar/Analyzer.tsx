/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */
//https://wavesurfer.xyz/examples/?soundcloud.js
import { useCallback, useMemo, useRef, useState } from "react";
import { tracks as audioUrls } from "./data";
import { formatTime } from "./utils";
import { useWavesurfer } from "@wavesurfer/react";
import Timeline from "wavesurfer.js/dist/plugins/timeline.esm.js";

type Props = {};

const Analyzer = (props: Props) => {
  const containerRef = useRef(null);
  const [urlIndex, setUrlIndex] = useState(0);

  // Create a gradient for the waveform, memoized for better performance
  const waveColorGradient = useMemo(() => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const gradient = ctx!.createLinearGradient(0, 0, 0, 100); // Adjust height as needed
    gradient.addColorStop(0, "#F6B094"); // Top color (yellowish)
    gradient.addColorStop(1, "#F6B094"); // Top color (yellowish)

    gradient.addColorStop(1, "#656666"); // Bottom color (purple)
    return gradient;
  }, []); // No dependencies as the gradient is static

  // Create a gradient for the waveform, memoized for better performance
  const progressColorGradient = useMemo(() => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const gradient = ctx!.createLinearGradient(0, 0, 0, 100); // Adjust height as needed
    gradient.addColorStop(0, "#FFD700"); // Top color (yellowish)
    gradient.addColorStop(1, "#FFD700"); // Top color (yellowish)
    gradient.addColorStop(1, "#B8860B"); // Bottom color (purple)
    return gradient;
  }, []); // No dependencies as the gradient is static

  const { wavesurfer, isPlaying, currentTime } = useWavesurfer({
    container: containerRef,
    height: 100,
    barWidth: 3,
    waveColor: waveColorGradient,
    progressColor: progressColorGradient,
    url: audioUrls[urlIndex],
    minPxPerSec: 5,
    dragToSeek: true,
    hideScrollbar: true,
    sampleRate: 4000,
    normalize: true,
    barGap: 6,
  });

  const onUrlChange = useCallback(() => {
    setUrlIndex((index) => (index + 1) % audioUrls.length);
  }, []);

  const onPlayPause = useCallback(() => {
    if (wavesurfer) wavesurfer.playPause();
  }, [wavesurfer]);

  return (
    <>
      <div ref={containerRef} />

      <p>Current audio: {audioUrls[urlIndex]}</p>

      <p>Current time: {formatTime(currentTime)}</p>

      <div style={{ margin: "1em 0", display: "flex", gap: "1em" }}>
        <button onClick={onUrlChange}>Change audio</button>

        <button onClick={onPlayPause} style={{ minWidth: "5em" }}>
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
    </>
  );
};

export default Analyzer;
