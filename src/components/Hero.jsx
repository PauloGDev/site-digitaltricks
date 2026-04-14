import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <section className="min-h-screen grid lg:grid-cols-2 bg-black text-white overflow-hidden">

      {/* LADO VISUAL */}
      <div className="relative bg-[#050505] overflow-hidden">

        {/* Grid técnico */}
        <div className="absolute inset-0 opacity-20 
          bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),
              linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] 
          bg-[size:40px_40px]"
        />

        {/* Imagem */}
        <motion.img
          src={assets.hero}
          alt="Digital Tricks Visual"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.7 }}
          transition={{ duration: 1.2 }}
          className="w-full h-full object-cover"
        />

        {/* Overlay escuro */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

        {/* Label técnico */}
        <div className="absolute top-6 left-6 border border-white/10 bg-black/60 backdrop-blur-sm px-4 py-2 text-[10px] tracking-[0.25em] uppercase text-white/50">
          Interface System
        </div>

      </div>

      {/* LADO TEXTO */}
      <div className="flex flex-col justify-center px-8 md:px-16 lg:px-20 py-20">

        {/* Label topo */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs tracking-[0.25em] text-white/40 mb-6"
        >
          DIGITAL TRICKS — PLATFORM
        </motion.span>

        {/* HEADLINE PRINCIPAL */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-[42px] sm:text-[56px] md:text-[68px] lg:text-[80px] 
                     leading-[0.92] font-semibold tracking-tight"
        >
          Construímos
          <br />
          experiências digitais
          <br />
          <span className="text-[#7B61FF]">
            de alto impacto
          </span>
        </motion.h1>

        {/* SUBTEXTO */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-white/60 max-w-md text-base md:text-lg"
        >
          Sites, sistemas e plataformas que elevam a percepção da sua marca
          e transformam presença digital em crescimento real.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="https://wa.me/5585921743200"
            className="flex items-center gap-2 bg-[#7B61FF] px-6 py-3 text-sm font-medium 
                       hover:opacity-90 transition-all duration-300"
          >
            Iniciar projeto
            <ArrowRight size={16} />
          </a>

          <a
            href="#portfolio"
            className="px-6 py-3 text-sm border border-white/10 text-white/80 
                       hover:bg-white/[0.04] transition-all duration-300"
          >
            Ver projetos
          </a>
        </motion.div>

        {/* Métrica */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-14 text-white/40 text-sm"
        >
          +120 projetos digitais entregues
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;