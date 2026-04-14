import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Code2 } from "lucide-react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-28 px-6 sm:px-12 overflow-hidden bg-[#0E0E12]">
      {/* Fundo com gradiente leve */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#1E9CA5]/10 via-[#2F28AC]/10 to-black" />

      {/* Manchas suaves otimizadas */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#1E9CA5]/15 blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#2F28AC]/15 blur-[100px] rounded-full translate-x-1/3 translate-y-1/3" />

      {/* Ícone decorativo flutuante (reduzido) */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 0.4, y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute top-32 left-10"
      >
        <Sparkles className="w-8 h-8 text-[#1E9CA5]" />
      </motion.div>

      {/* Título principal */}
      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="text-white font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-tight"
      >
        DIGITAL <br />
        <span className="bg-gradient-to-r from-[#1E9CA5] to-[#2F28AC] bg-clip-text text-transparent">
          TRICKS
        </span>
      </motion.h1>

      {/* Subtítulo */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-5 text-gray-300 text-sm sm:text-base lg:text-lg max-w-2xl"
      >
        Desenvolvimento de Sites • Identidade Visual & Branding • Manutenção de Sites & Servidores
      </motion.p>

      <motion.div
        initial={{ opacity: 0.5, y: 40 }}
        animate={{ opacity: 1, y: [0, -20, 0] }}
        transition={{
          duration: 4,          
          ease: "easeInOut",     
          repeat: Infinity,      
          repeatType: "mirror",  
        }}
        className="mt-14 relative"
      >
        <img
          src={assets.hero}
          alt="Digital Tricks Hero"
          className="w-[70vw] sm:w-[55vw] md:w-[45vw] lg:w-[35vw] mx-auto object-contain"
        />
      </motion.div>

      {/* Selo inferior */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-14 flex items-center gap-2 text-gray-400 text-sm"
      >
        <Code2 className="w-5 h-5 text-[#1E9CA5]" />
        <span>+120 projetos digitais entregues com excelência</span>
      </motion.div>
    </section>
  );
};

export default Hero;
