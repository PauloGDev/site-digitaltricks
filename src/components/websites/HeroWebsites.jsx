import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import NeonButton from "../NeonButton";

const HeroWebsites = ({ assets }) => {
  return (
    <section className="pt-28 md:pt-0 relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0A0A14] via-[#151532] to-[#1E1E4A]">
      {/* Fundo animado */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(123,110,246,0.12),transparent_70%)]"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Partículas flutuantes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#7DF9FF] rounded-full opacity-40"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 1.5,
            }}
            animate={{
              y: ["0%", "-100vh"],
              opacity: [0.4, 0, 0.4],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Conteúdo principal */}
      <div className="pb-12 relative container mx-auto flex flex-col lg:flex-row items-center justify-between gap-20 px-6 sm:px-12 z-10">
        {/* Texto */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Desenvolvemos{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7DF9FF] to-[#7B6EF6]">
              Websites Incríveis
            </span>{" "}
            que{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B6EF6] to-[#5146D9]">
              Convertem e Impressionam
            </span>
            .
          </h1>

          <p className="mt-6 text-gray-300 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            A Digital Tricks transforma ideias em experiências digitais marcantes.
            Criamos websites modernos, responsivos e otimizados para performance —
            conectando marcas e pessoas através de design e tecnologia.
          </p>

          <div className="pt-8">
            <NeonButton
                text="Fazer Orçamento"
                href="https://wa.me/5585921743200?text=Ol%C3%A1%2C%20vi%20o%20site%20de%20voc%C3%AAs%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20servi%C3%A7o%20de%20desenvolvimento%20de%20Website."
                color="#7B6EF6"
                icon={ArrowRight}
              />
          </div>

        </motion.div>

        {/* Mockup / imagem flutuante */}
        <motion.div
          className="flex-1 flex justify-center lg:justify-end relative"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Card 3D */}
          <motion.div
            className="relative w-[300px] sm:w-[400px] lg:w-[580px] overflow-hidden"
            whileHover={{ rotateY: 10, rotateX: 5, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 120, damping: 15 }}
          >
            <img
              src={assets.website_land}
              alt="Mockup de Website"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0"></div>
          </motion.div>

          {/* Efeito de brilho */}
          <motion.div
            className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-[#7DF9FF]/30 to-[#7B6EF6]/10 blur-3xl rounded-full"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroWebsites;
