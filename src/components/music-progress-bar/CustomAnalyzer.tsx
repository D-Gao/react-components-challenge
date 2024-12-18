/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */
//https://wavesurfer.xyz/examples/?soundcloud.js
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type Props = {
  url: string;
};

const CustomAnalyzer = ({ url }: Props) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressWrapper = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const [channelsData, setChannelsData] = useState<Float32Array[]>([]);
  const [sampleRate, setSampleRate] = useState(0);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  /* const audioUrl = useMemo(() => audioUrls[0], []); */

  const isDragging = useRef(false);

  const handlePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;

    if (
      !isDragging.current ||
      !containerRef.current ||
      !audioRef.current ||
      !cursorRef.current
    )
      return;

    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const width = rect.width;

    // Calculate new progress based on pointer position
    const offsetX = Math.min(Math.max(e.clientX - rect.left, 0), width);
    const newProgress = offsetX / width;

    // Update progress and audio current time
    setProgress(newProgress);
    audioRef.current.currentTime = newProgress * audioRef.current.duration;

    const distance = width * newProgress;
    cursorRef.current.style.transform = `translateX(${distance}px)`;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (
      !isDragging.current ||
      !containerRef.current ||
      !audioRef.current ||
      !cursorRef.current
    )
      return;

    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const width = rect.width;

    // Calculate new progress based on pointer position
    const offsetX = Math.min(Math.max(e.clientX - rect.left, 0), width);
    const newProgress = offsetX / width;

    // Update progress and audio current time
    setProgress(newProgress);
    audioRef.current.currentTime = newProgress * audioRef.current.duration;

    const distance = width * newProgress;
    cursorRef.current.style.transform = `translateX(${distance}px)`;
    cursorRef.current.style.transitionDuration = "0";
  };

  const handlePointerUp = () => {
    isDragging.current = false;
    if (cursorRef.current) cursorRef.current.style.transitionDuration = "200ms";
  };

  useEffect(() => {
    const analyzeAudio = async () => {
      try {
        // Create an AudioContext
        const audioContext = new (window.AudioContext ||
          window.webkitAudioContext)();

        // Fetch the audio file
        const response = await fetch(url);
        const arrayBuffer = await response.arrayBuffer();

        // Decode the audio data
        const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

        // Get audio properties
        setSampleRate(audioBuffer.sampleRate);
        setDuration(audioBuffer.duration);

        // Extract channel data
        const channels = [];
        for (let i = 0; i < audioBuffer.numberOfChannels; i++) {
          channels.push(audioBuffer.getChannelData(i)); // Get data for each channel
        }

        setChannelsData(channels);
      } catch (error) {
        console.error("Error analyzing audio:", error);
      }
    };

    analyzeAudio();
  }, [url]);

  useEffect(() => {
    const updateCanvasSize = () => {
      if (
        containerRef.current &&
        canvasRef.current &&
        progressWrapper.current
      ) {
        const container = containerRef.current;
        const canvas = canvasRef.current;

        const { width, height } = container.getBoundingClientRect();
        setDimensions({ width, height });

        // Set canvas dimensions
        const dpr = window.devicePixelRatio || 1;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;

        // Scale the canvas context to handle high DPI screens
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        ctx.scale(dpr, dpr);
        ctx.clearRect(0, 0, width, height); // Clear previous content
        ctx.fillStyle = "lightblue"; // Example: fill the canvas with a color
        ctx.fillRect(0, 0, width, height); // Fill the canvas area

        const scale = channelsData[0].length / width; // Scaling factor to map channel data to canvas width

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

        const waveColorGradient = ctx!.createLinearGradient(0, 0, 0, height); // Adjust height as needed
        waveColorGradient.addColorStop(0, "#fafafa"); // Top color (yellowish)
        waveColorGradient.addColorStop(0, "#fafafa");
        waveColorGradient.addColorStop(0, "#fafafa80");
        waveColorGradient.addColorStop(1, "#fafafa80"); // Bottom color (purple)
        for (let i = 0; i < width; i += step) {
          const index = Math.floor(i * scale);
          const value = Math.abs(channelsData[0][index]);

          const barHeight = value * height * 0.48; // Scale the bar height to fit the canvas

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

        const progressCanvas = canvas.cloneNode() as HTMLCanvasElement;
        const progressCtx = progressCanvas.getContext(
          "2d"
        ) as CanvasRenderingContext2D;
        progressCtx.drawImage(canvas, 0, 0);
        // Set the composition method to draw only where the waveform is drawn
        progressCtx.globalCompositeOperation = "source-in";
        progressCtx.fillStyle = "#FFE600";
        // This rectangle acts as a mask thanks to the composition method
        progressCtx.fillRect(0, 0, canvas.width, canvas.height);
        progressWrapper.current.appendChild(progressCanvas);
      }
    };

    // Initial size adjustment
    if (channelsData.length === 0) return;
    updateCanvasSize();

    // Adjust canvas size on window resize
    window.addEventListener("resize", updateCanvasSize);
    return () => {
      window.removeEventListener("resize", updateCanvasSize);
    };
  }, [channelsData, dimensions.height]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      setProgress(audio.currentTime / audio.duration || 0);
    };

    audio.addEventListener("timeupdate", updateProgress);

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
    };
  }, []);

  useEffect(() => {
    const renderProgress = () => {
      if (
        !canvasRef.current ||
        !containerRef.current ||
        !progressWrapper.current ||
        !cursorRef.current
      )
        return;
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const { width, height } = dimensions;
      const percents = progress * 100;

      const canvasWrapper = containerRef.current;
      canvasWrapper.style.clipPath = `polygon(${percents}% 0, 100% 0, 100% 100%, ${percents}% 100%)`;

      progressWrapper.current.style.width = `${percents}%`;

      //define the movement px
      const distance = width * progress;

      cursorRef.current.style.transform = `translateX(${distance}px)`;

      /* ctx.clearRect(0, 0, width, height); */

      /* // Draw waveform background
      ctx.fillStyle = "lightgray";
      ctx.fillRect(0, 0, width, height);

      // Draw progress bar
      ctx.fillStyle = "yellow";
      ctx.fillRect(0, 0, (width * percents) / 100, height);

      // Draw progress cursor
      ctx.fillStyle = "red";
      ctx.fillRect((width * percents) / 100 - 2, 0, 4, height); */
    };

    renderProgress();
  }, [progress]);

  return (
    <div>
      <div
        className="relative transition-all duration-200 select-none"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerMove={handlePointerMove}
      >
        <div
          className="transition-all duration-300"
          ref={containerRef}
          style={{
            width: "100%", // Parent container width
            height: "30vh", // Parent container height
            position: "relative",
            background: "#000000",
            overflow: "hidden",
          }}
        >
          <canvas ref={canvasRef} style={{ display: "block" }} />
        </div>

        <div
          className="transition-all duration-300 pointer-events-none absolute z-10 top-0 left-0 w-0 h-full overflow-hidden"
          ref={progressWrapper}
        ></div>

        <div
          ref={cursorRef}
          className=" transition-all duration-200  ease-out cursor cursor-grab absolute z-20 left-0 top-0 bottom-0 rounded-md w-[2px] bg-white"
        ></div>
      </div>
      <div
        className="text-white"
        style={{
          position: "relative",

          fontSize: "14px",
        }}
      >
        Dynamic Canvas - {dimensions.width} x {dimensions.height}
      </div>

      <div>
        <h2>Audio Channel Analysis</h2>
        <p>Sample Rate: {sampleRate} Hz</p>
        <p>Duration: {duration.toFixed(2)} seconds</p>
        <p>Number of Channels: {channelsData.length}</p>
        {channelsData.map((channelData, index) => (
          <div key={index}>
            <h3>Channel {index + 1}</h3>
            <p>First 10 Samples: {channelData.slice(0, 10).join(", ")}</p>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          handlePlay();
        }}
      >
        {isPlaying ? "pause" : "play"}
      </button>
      <audio src={url} ref={audioRef}>
        {" "}
      </audio>
    </div>
  );
};

export default CustomAnalyzer;
