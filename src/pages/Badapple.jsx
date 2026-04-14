import React, { useRef, useState, useEffect } from "react";
import "../context/style.css";
import { assets } from "../assets/assets";

const grayRampBalanced = "$@08GCLft1i;:.,:;i1tfLCG0 ";
const grayRampDark = "$@08;:.,:;i1tfLCG0 ";

export default function AsciiConverter() {
  const canvasRef = useRef(null);
  const videoRef = useRef(null);
  const asciiRef = useRef(null);

  const [isMuted, setIsMuted] = useState(true); // começa mutado
  const [isDark] = useState(false);
  const [multiplier] = useState(2);

  const toGrayScale = (r, g, b) => 0.334 * r + 0.333 * g + 0.333 * b;

  const convertToGrayScales = (context, width, height) => {
    const imageData = context.getImageData(0, 0, width, height);
    const grayScales = [];

    for (let i = 0; i < imageData.data.length; i += 4) {
      const r = imageData.data[i];
      const g = imageData.data[i + 1];
      const b = imageData.data[i + 2];
      const grayScale = toGrayScale(r, g, b);

      imageData.data[i] = imageData.data[i + 1] = imageData.data[i + 2] = grayScale;
      grayScales.push(grayScale);
    }

    context.putImageData(imageData, 0, 0);
    return grayScales;
  };

  const getCharacterForGrayScale = (grayScale) => {
    const grayRamp = isDark ? grayRampDark : grayRampBalanced;
    return grayRamp[Math.ceil((grayRamp.length - 1) * grayScale / 255)];
  };

  const drawAscii = (grayScales, width) => {
    const ascii = grayScales.reduce((asciiImage, grayScale, index) => {
      let nextChars = getCharacterForGrayScale(grayScale);
      if ((index + 1) % width === 0) nextChars += "\n";
      return asciiImage + nextChars;
    }, "");
    if (asciiRef.current) asciiRef.current.textContent = ascii;
  };

  const renderAscii = (video) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    if (!video.videoWidth || !video.videoHeight) return;

    const width = Math.floor(window.innerWidth / 2 / multiplier);
    const height = Math.floor((video.videoHeight / video.videoWidth) * width);

    if (width <= 0 || height <= 0) return;

    context.drawImage(video, 0, 0, width, height);
    const grayScales = convertToGrayScales(context, width, height);
    drawAscii(grayScales, width);
  };

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    video.addEventListener("loadedmetadata", () => {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight * 2;
    });

    video.addEventListener("play", () => {
      const loop = () => {
        if (!video.paused && !video.ended) {
          renderAscii(video);
          setTimeout(loop, 1000 / 60);
        }
      };
      loop();
    });

    // tenta iniciar sozinho
    video.play().catch(() => {
      console.log("Autoplay bloqueado — será necessário clique do usuário.");
    });
  }, []);

  const handleToggleMute = () => {
    const video = videoRef.current;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <div style={{ background:"white", width: "100%", height: "100vh", position: "relative" }}>
      {/* Botão de som */}
      <button
        onClick={handleToggleMute}
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          zIndex: 10,
          padding: "10px 15px",
          borderRadius: "8px",
          border: "none",
          background: "rgba(0,0,0,0.7)",
          color: "white",
          cursor: "pointer"
        }}
      >
        {isMuted ? "🔇 Ativar som" : "🔊 Mutar"}
      </button>

      <video
        ref={videoRef}
        muted={isMuted}
        autoPlay
        playsInline
        style={{ display: "none" }}
        src={assets.badapple}
      />
      <canvas ref={canvasRef} style={{ display: "none" }} />
      <pre ref={asciiRef}></pre>
    </div>
  );
}
