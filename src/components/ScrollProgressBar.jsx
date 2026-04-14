import React from "react";
import { motion, useScroll } from "framer-motion";

const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 h-[60vh] w-[6px] rounded-full bg-[#1A1A40]/50 backdrop-blur-sm overflow-hidden z-40">
      {/* Barra de progresso neon */}
      <motion.div
        style={{ scaleY: scrollYProgress }}
        className="origin-top bg-gradient-to-b from-[#7DF9FF] via-[#7dc0ff] to-[#7dc0ff] w-full h-full shadow-[0_0_20px_#7DF9FF,0_0_40px_#7B6EF6]"
      />
    </div>
  );
};

export default ScrollProgressBar;
