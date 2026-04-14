// src/pages/Sobre.jsx
import React from "react";
import { motion } from "framer-motion";
import { Rocket, Star, Globe2, HeartHandshake } from "lucide-react";
import { assets } from "../assets/assets";

const Sobre = () => {
  const motivos = [
    {
      icon: <Globe2 className="w-8 h-8 text-[#7DF9FF]" />,
      titulo: "Soluções Personalizadas",
      desc: "Criamos estratégias adaptadas às necessidades de cada cliente.",
    },
    {
      icon: <Star className="w-8 h-8 text-[#7DF9FF]" />,
      titulo: "Foco em Resultados",
      desc: "Nosso trabalho é voltado para aumentar o alcance, engajamento e conversões da sua empresa.",
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-[#7DF9FF]" />,
      titulo: "Atendimento Exclusivo",
      desc: "Acompanhamos de perto cada etapa do seu projeto para garantir a melhor entrega.",
    },
  ];

  const estatisticas = [
    {
      value: "70%",
      desc: "dos consumidores preferem interagir com empresas que possuem um site profissional",
    },
    {
      value: "23%",
      desc: "Empresas que investem em branding têm um crescimento 23% maior do que as que não investem",
    },
    {
      value: "300%",
      desc: "Um site bem estruturado aparece até 300% a mais nas pesquisas do Google",
    },
    {
      value: "200%",
      desc: "E-commerces bem desenvolvidos aumentam a taxa de conversão em até 200%",
    },
  ];

  return (
    <div id="inicio" className="bg-gradient-to-br from-[#0B0B16] via-[#141428] to-[#1A1A40] text-white relative overflow-hidden">
      {/* Fundo animado */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(125,249,255,0.12),transparent_60%)]"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      {/* HERO */}
      <section className="relative py-24 px-6 sm:px-12 z-0">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.img
            src={assets.about_land}
            alt="Sobre a Digital Tricks"
            className="rounded-3xl w-full object-cover "
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="p-6 bg-white/10 backdrop-blur-2xl border border-white/10 rounded-2xl">
              <h1 className="text-4xl font-extrabold mb-4">
                Especializados em <span className="text-[#7DF9FF]">Sites, Design e Branding</span>
              </h1>
              <p className="text-gray-300 leading-relaxed text-lg">
                Queremos que cada empresa tenha uma identidade visual memorável e
                uma presença online de alta performance. Nossa missão é gerar
                resultados reais e agregar valor ao seu negócio.
              </p>
              <p className="mt-6 text-gray-300 leading-relaxed text-lg">
                Quer fortalecer sua marca e impulsionar seu negócio com um design
                profissional e um site de alta qualidade? Entre em contato com a{" "}
                <span className="text-[#7DF9FF] font-medium">Digital Tricks</span> e leve sua presença digital
                para o próximo nível!
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MOTIVOS */}
      <section className="relative py-24 px-6 sm:px-12 z-0">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="p-6 inline-block rounded-full bg-gradient-to-r from-[#7DF9FF] to-[#7367F0] shadow-lg shadow-[#7DF9FF]/30"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <Rocket className="w-12 h-12 text-white" />
          </motion.div>

          <h2 className="text-5xl font-extrabold mt-6 tracking-tight">Por que escolher a Digital Tricks?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-300 text-lg">
            Entregamos soluções <span className="text-[#7DF9FF] font-medium">únicas, eficazes e personalizadas</span> para cada cliente.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {motivos.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.15 }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.05,
                boxShadow: "0px 15px 30px rgba(115,103,240,0.25)",
              }}
              className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 text-center transition-all duration-500"
            >
              <div className="mb-5 flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{item.titulo}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ESTATÍSTICAS */}
      <section className="relative py-24 px-6 sm:px-12 z-0">
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {estatisticas.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl p-12 bg-gradient-to-br from-[#141428] to-[#1F1F4C] border border-white/10 shadow-xl"
            >
              <h1 className="text-6xl md:text-7xl font-extrabold text-[#7DF9FF] mb-4">{stat.value}</h1>
              <p className="text-gray-300 text-lg">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      
    </div>
  );
};

export default Sobre;
