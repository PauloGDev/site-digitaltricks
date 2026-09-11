import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Seo from './Seo';

const grayRamp = '@$B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/|()1{}[]?-_+~<>i!lI;:,. ';

const AsciiVideo = ({ src, path }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const asciiRef = useRef(null);
  const [mobile, setMobile] = useState(() => window.innerWidth < 768);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const resize = () => setMobile(window.innerWidth < 768);
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d', { willReadFrequently: true });
    if (!context) return;
    let frame;
    const render = () => {
      if (video.readyState >= 2 && video.videoWidth) {
        const width = mobile ? 120 : 260;
        const height = Math.max(1, Math.floor(video.videoHeight / video.videoWidth * width * 0.52));
        if (canvas.width !== width || canvas.height !== height) { canvas.width = width; canvas.height = height; }
        context.drawImage(video, 0, 0, width, height);
        const { data } = context.getImageData(0, 0, width, height);
        let output = '';
        for (let i = 0; i < data.length; i += 4) {
          const gray = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
          output += grayRamp[Math.floor(gray / 255 * (grayRamp.length - 1))];
          if ((i / 4 + 1) % width === 0) output += '\n';
        }
        asciiRef.current.textContent = output;
      }
      frame = requestAnimationFrame(render);
    };
    frame = requestAnimationFrame(render);
    return () => cancelAnimationFrame(frame);
  }, [mobile]);

  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-black">
      <Seo path={path} noindex />
      <button type="button" onClick={() => { videoRef.current.muted = !muted; setMuted(!muted); videoRef.current.play().catch(() => {}); }} className="absolute right-5 top-5 z-20 rounded-full bg-white/10 px-4 py-2.5 text-sm text-white backdrop-blur" aria-pressed={!muted}>{muted ? '🔇 Som desligado' : '🔊 Som ligado'}</button>
      <video ref={videoRef} src={src} autoPlay muted={muted} playsInline loop preload="metadata" className="hidden" />
      <canvas ref={canvasRef} className="hidden" />
      <pre ref={asciiRef} aria-hidden="true" style={{ margin: 0, color: '#fff', fontFamily: 'Consolas, Monaco, monospace', fontSize: mobile ? '4px' : '8px', lineHeight: mobile ? '4px' : '7px', fontWeight: 700, letterSpacing: '-0.5px', whiteSpace: 'pre', userSelect: 'none', transform: 'scale(1.18)', filter: 'contrast(1.4) brightness(1.2)', textShadow: '0 0 8px rgba(255,255,255,0.15)' }} />
    </div>
  );
};
AsciiVideo.propTypes = { src: PropTypes.string.isRequired, path: PropTypes.string.isRequired };
export default AsciiVideo;
