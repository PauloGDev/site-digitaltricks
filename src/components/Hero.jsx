import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { assets } from "../assets/assets";

const Hero = () => {
  const hasVideo = Boolean(assets?.heroVideo);

  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden pt-16 md:pt-20">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
        {/* LADO VISUAL */}
        <div className="relative min-h-[38vh] sm:min-h-[44vh] lg:min-h-screen bg-[#050505] overflow-hidden order-1 lg:order-1">
          {/* Grid técnico */}
          <div
            className="absolute inset-0 opacity-20 z-10
            bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),
            linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
            bg-[size:32px_32px] sm:bg-[size:40px_40px]"
          />

          {/* Mídia principal */}
          {hasVideo ? (
            <motion.video
              src={assets.heroVideo}
              poster={assets.hero}
              autoPlay
              muted
              loop
              playsInline
              initial={{ scale: 1.06, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.72 }}
              transition={{ duration: 1.2 }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <motion.img
              src={assets.hero}
              alt="Digital Tricks Visual"
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.7 }}
              transition={{ duration: 1.2 }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}

          {/* Overlay escuro */}
          <div className="absolute inset-0 z-20 bg-gradient-to-t from-black via-black/50 to-transparent lg:bg-gradient-to-r lg:from-black lg:via-black/70 lg:to-transparent" />

          {/* Label técnico */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-30 border border-white/10 bg-black/60 backdrop-blur-sm px-3 py-2 sm:px-4 text-[9px] sm:text-[10px] tracking-[0.22em] uppercase text-white/50">
            Interface System
          </div>
        </div>

        {/* LADO TEXTO */}
        <div className="order-2 lg:order-2 flex flex-col justify-center px-5 sm:px-8 md:px-12 lg:px-20 py-10 sm:py-14 md:py-16 lg:py-20">
          {/* Label topo */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[10px] sm:text-xs tracking-[0.22em] sm:tracking-[0.25em] text-white/40 mb-4 sm:mb-6"
          >
            DIGITAL TRICKS — PLATFORM
          </motion.span>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-[12ch] text-[34px] leading-[0.95] sm:text-[46px] md:text-[58px] lg:text-[80px] font-semibold tracking-tight"
          >
            Construímos
            <br />
            experiências digitais
            <br />
            <span className="text-[#7B61FF]">de alto impacto</span>
          </motion.h1>

          {/* Subtexto */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-white/60 max-w-xl"
          >
            Sites, sistemas e plataformas que elevam a percepção da sua marca e
            transformam presença digital em crescimento real.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
          >
            <a
              href="https://wa.me/5585921743200"
              className="inline-flex items-center justify-center gap-2 bg-[#7B61FF] px-5 sm:px-6 py-3 text-sm font-medium hover:opacity-90 transition-all duration-300 w-full sm:w-auto"
            >
              Iniciar projeto
              <ArrowRight size={16} />
            </a>

            <a
              href="#portfolio"
              className="inline-flex items-center justify-center px-5 sm:px-6 py-3 text-sm border border-white/10 text-white/80 hover:bg-white/[0.04] transition-all duration-300 w-full sm:w-auto"
            >
              Ver projetos
            </a>
          </motion.div>

          {/* Métrica */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-10 sm:mt-14 text-white/40 text-xs sm:text-sm"
          >
            +120 projetos digitais entregues
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;