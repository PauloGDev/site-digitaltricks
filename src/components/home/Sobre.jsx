import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import NeonButton from "../NeonButton";

const Sobre = ({ assets }) => {
  return (
    <section
      id="sobre"
      className="relative py-20 px-6 sm:px-12 overflow-hidden
      bg-gradient-to-br from-[#0B0B16] via-[#141428] to-[#1A1A40]
      flex flex-col lg:flex-row items-center justify-center
      gap-12 lg:gap-20 rounded-3xl"
    >
      {/* Fundo com gradiente suave */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,rgba(125,249,255,0.05),transparent_70%)] pointer-events-none" />

      {/* Ícone decorativo animado com CSS leve */}
      <div className="absolute top-10 left-10 opacity-10 animate-spin-slow">
        <Sparkles className="w-12 h-12 text-[#7DF9FF]" />
      </div>

      {/* Texto */}
      <motion.div
        className="flex-1 space-y-6 text-center lg:text-left text-gray-200 relative z-10"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="p-5 inline-block rounded-full bg-gradient-to-r from-[#7DF9FF] to-[#7367F0] shadow-lg shadow-[#7DF9FF]/30 transform-gpu will-change-transform">
          <Sparkles className="w-9 h-9 text-white" strokeWidth={2.5} />
        </div>

        <h2 className="font-extrabold text-4xl sm:text-5xl leading-tight text-white">
          Sobre a{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7DF9FF] to-[#7367F0]">
            Digital Tricks
          </span>
        </h2>

        <p className="text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 text-gray-300">
          A <strong className="text-white">Digital Tricks</strong> é uma agência
          criativa focada em{" "}
          <span className="text-[#7DF9FF] font-medium">
            desenvolvimento web, design e soluções digitais inteligentes
          </span>
          . Unimos{" "}
          <strong className="text-white">inovação</strong>,{" "}
          <strong className="text-white">tecnologia</strong> e{" "}
          <strong className="text-white">estratégia</strong> para transformar
          ideias em experiências digitais de alto impacto.
        </p>

        <p className="text-gray-400 text-base max-w-2xl mx-auto lg:mx-0">
          Do design à entrega, criamos soluções autênticas e performáticas — elevando
          sua marca para o próximo nível.
        </p>

        <NeonButton
          text="Saiba Mais"
          href="/sobre"
          color="#1E9CA5"
          icon={ArrowRight}
        />
      </motion.div>

      {/* Imagem */}
      <motion.div
        className="flex-1 flex justify-center lg:justify-end relative z-10"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="relative group w-[80vw] sm:w-[55vw] md:w-[40vw] lg:w-[26vw] transform-gpu will-change-transform">
          <motion.img
            src={assets.home_sobre}
            alt="Sobre a Digital Tricks"
            className="rounded-3xl object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-[#7DF9FF]/10 via-transparent to-transparent opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
        </div>
      </motion.div>
    </section>
  );
};

export default Sobre;
