import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { assets } from "../assets/assets";

const SiteLoader = ({ progress = 0 }) => {
  const shouldReduceMotion = useReducedMotion();
  const safeProgress = Math.min(100, Math.max(0, progress));

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.55, ease: "easeInOut" }}
      className="fixed inset-0 z-[999] flex items-center justify-center overflow-hidden bg-black text-white"
      role="status"
      aria-live="polite"
      aria-label="Carregando site"
    >
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(123,97,255,0.14),transparent_34%,rgba(34,211,238,0.10)_72%,transparent)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:42px_42px] opacity-35" />

      <motion.div
        initial={{ opacity: 0, y: 18, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="relative flex w-[min(82vw,360px)] flex-col items-center"
      >
        <div className="relative flex h-28 w-28 items-center justify-center">
          <motion.div
            animate={shouldReduceMotion ? undefined : { rotate: 360 }}
            transition={
              shouldReduceMotion
                ? undefined
                : { duration: 3.2, repeat: Infinity, ease: "linear" }
            }
            className="absolute inset-0 border border-white/10 border-t-[#7B61FF]"
          />
          <motion.div
            animate={shouldReduceMotion ? undefined : { rotate: -360 }}
            transition={
              shouldReduceMotion
                ? undefined
                : { duration: 5, repeat: Infinity, ease: "linear" }
            }
            className="absolute inset-3 border border-cyan-300/10 border-b-cyan-300/70"
          />
          <img
            src={assets.logo}
            alt="Digital Tricks"
            className="relative w-16 object-contain"
          />
        </div>

        <div className="mt-8 w-full">
          <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.28em] text-white/45">
            <span>Digital Tricks</span>
            <span>{safeProgress}%</span>
          </div>

          <div
            className="mt-3 h-[2px] w-full overflow-hidden bg-white/10"
            aria-hidden="true"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: safeProgress / 100 }}
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : { duration: 0.18, ease: "easeOut" }
              }
              className="h-full w-full origin-left bg-gradient-to-r from-[#7B61FF] via-[#9B89FF] to-cyan-300"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SiteLoader;
