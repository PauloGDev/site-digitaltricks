"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import NeonButton from "../NeonButton";

const Apresentacao = ({ assets }) => {
  return (
    <section className="relative text-white my-20 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Fundo leve com gradiente otimizado */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2F28AC]/5 via-transparent to-[#1E9CA5]/5 blur-xl pointer-events-none" />

      <div className="grid lg:grid-cols-2 gap-10 items-center relative z-0">
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center lg:text-left space-y-6"
        >
          <h1 className="font-extrabold text-3xl md:text-4xl leading-tight">
            Cada cliente é <span className="text-[#1E9CA5]">único</span> e cada
            projeto merece atenção especial
          </h1>

          <p className="text-gray-300 max-w-md mx-auto lg:mx-0">
            Nosso atendimento vai além de apenas fornecer um serviço. Buscamos
            entender profundamente as necessidades de cada cliente para criar
            algo realmente autêntico.
          </p>

          <NeonButton
            text="Entre em Contato"
            href="https://wa.me/5585921743200?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais!"
            color="#1E9CA5"
            icon={ArrowRight}
          />
        </motion.div>

        {/* Imagens otimizadas */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex gap-4 justify-center"
        >
          <div className="relative w-[45%]">
            <motion.img
              src={assets.home_apresentacao1}
              alt="Equipe colaborando"
              loading="lazy"
              className="rounded-2xl object-cover w-full shadow-lg shadow-[#1E9CA5]/20"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            />
          </div>

          <div className="relative w-[45%]">
            <motion.img
              src={assets.home_apresentacao2}
              alt="Design criativo"
              loading="lazy"
              className="rounded-2xl object-cover w-full shadow-lg shadow-[#2F28AC]/20"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Apresentacao;
