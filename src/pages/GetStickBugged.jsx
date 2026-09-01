import { useEffect, useRef, useState } from "react";
import stickbug from "../assets/stick.mp4";

const grayRamp =
  "@$B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/|()1{}[]?-_+~<>i!lI;:,\"^`'. ";

export default function AsciiConverter() {
  const canvasRef = useRef(null);
  const videoRef = useRef(null);
  const asciiRef = useRef(null);
  const animationRef = useRef(null);

  const [cols, setCols] = useState(260);
  const [isMuted, setIsMuted] = useState(true);

  const toGrayScale = (r, g, b) => {
    return 0.299 * r + 0.587 * g + 0.114 * b;
  };

  const getCharacterForGrayScale = (grayScale) => {
    const index = Math.floor(
      (grayScale / 255) * (grayRamp.length - 1)
    );

    return grayRamp[index];
  };

  const updateResolution = () => {
    if (window.innerWidth < 768) {
      setCols(120);
    } else {
      setCols(260);
    }
  };

  const renderAscii = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ascii = asciiRef.current;

    if (!video || !canvas || !ascii) return;
    if (!video.videoWidth) return;

    const ctx = canvas.getContext("2d", {
      willReadFrequently: true,
    });

    const width = cols;

    const height = Math.floor(
      (video.videoHeight / video.videoWidth) *
        width *
        0.52
    );

    canvas.width = width;
    canvas.height = height;

    ctx.drawImage(video, 0, 0, width, height);

    const imageData = ctx.getImageData(
      0,
      0,
      width,
      height
    );

    let asciiImage = "";

    for (let i = 0; i < imageData.data.length; i += 4) {
      const r = imageData.data[i];
      const g = imageData.data[i + 1];
      const b = imageData.data[i + 2];

      const grayScale = toGrayScale(r, g, b);

      asciiImage += getCharacterForGrayScale(grayScale);

      if ((i / 4 + 1) % width === 0) {
        asciiImage += "\n";
      }
    }

    ascii.textContent = asciiImage;

    animationRef.current = requestAnimationFrame(
      renderAscii
    );
  };

  useEffect(() => {
    updateResolution();

    window.addEventListener(
      "resize",
      updateResolution
    );

    return () => {
      window.removeEventListener(
        "resize",
        updateResolution
      );

      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const startVideo = async () => {
      try {
        video.muted = true;
        video.volume = 1;

        await video.play();

        renderAscii();
      } catch (err) {
        console.log(err);
      }
    };

    startVideo();

    // desbloqueia áudio automaticamente
    const unlockAudio = async () => {
      try {
        video.muted = false;
        video.volume = 1;

        await video.play();

        setIsMuted(false);

        window.removeEventListener(
          "click",
          unlockAudio
        );

        window.removeEventListener(
          "touchstart",
          unlockAudio
        );

        window.removeEventListener(
          "mousemove",
          unlockAudio
        );

      } catch (err) {
        console.log(err);
      }
    };

    window.addEventListener(
      "click",
      unlockAudio,
      { once: true }
    );

    window.addEventListener(
      "touchstart",
      unlockAudio,
      { once: true }
    );

    window.addEventListener(
      "mousemove",
      unlockAudio,
      { once: true }
    );

  }, [cols]);

  const toggleMute = () => {
    const video = videoRef.current;

    if (!video) return;

    video.muted = !video.muted;

    setIsMuted(video.muted);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: "#000",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button
        onClick={toggleMute}
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          zIndex: 20,
          border: "none",
          background: "rgba(255,255,255,0.08)",
          color: "#fff",
          padding: "10px 16px",
          borderRadius: "999px",
          cursor: "pointer",
          backdropFilter: "blur(10px)",
          fontSize: 14,
        }}
      >
        {isMuted ? "🔇 Som desligado" : "🔊 Som ligado"}
      </button>

      <video
        ref={videoRef}
        src={stickbug}
        autoPlay
        playsInline
        preload="auto"
        loop
        crossOrigin="anonymous"
        style={{
          display: "none",
        }}
      />

      <canvas
        ref={canvasRef}
        style={{
          display: "none",
        }}
      />

      <pre
        ref={asciiRef}
        style={{
          margin: 0,
          color: "#fff",
          fontFamily:
            'Consolas, Monaco, "Courier New", monospace',
          fontSize:
            window.innerWidth < 768
              ? "4px"
              : "8px",
          lineHeight:
            window.innerWidth < 768
              ? "4px"
              : "7px",
          fontWeight: 700,
          letterSpacing: "-0.5px",
          whiteSpace: "pre",
          userSelect: "none",
          transform: "scale(1.18)",
          transformOrigin: "center",
          filter:
            "contrast(1.4) brightness(1.2)",
          textShadow:
            "0 0 8px rgba(255,255,255,0.15)",
        }}
      />
    </div>
  );
}