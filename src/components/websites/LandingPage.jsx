import React from "react";
import { motion } from "framer-motion";
import {
  Rocket,
  Target,
  MousePointerClick,
  TrendingUp,
  Palette,
  Smartphone,
  Zap,
  ArrowRight,
} from "lucide-react";
import NeonButton from "../NeonButton";

const LandingPage = ({ link }) => {
  const features = [
    {
      icon: <Target className="w-8 h-8 text-white" />,
      title: "Conversão Estratégica",
      desc: "Cada elemento é pensado para levar o visitante direto à ação desejada.",
    },
    {
      icon: <MousePointerClick className="w-8 h-8 text-white" />,
      title: "UX & UI Otimizadas",
      desc: "Design limpo, responsivo e focado em experiência do usuário.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      title: "Alta Performance",
      desc: "Carregamento rápido e estrutura leve para campanhas e anúncios.",
    },
    {
      icon: <Palette className="w-8 h-8 text-white" />,
      title: "Design Personalizado",
      desc: "Cores, tipografia e layout criados sob medida para sua marca.",
    },
    {
      icon: <Smartphone className="w-8 h-8 text-white" />,
      title: "Mobile First",
      desc: "Experiência perfeita em celulares, tablets e desktops.",
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: "Integrações e Automação",
      desc: "Conecte sua landing a CRMs, formulários e campanhas de marketing.",
    },
  ];

  const cases = [
    {
      title: "Lançamentos Digitais",
      desc: "Landing pages otimizadas para captação de leads e campanhas de alto volume.",
      gradient: "from-[#7C3AED] to-[#5146D9]",
    },
    {
      title: "Produtos e Serviços",
      desc: "Apresente seus produtos de forma direta, atrativa e eficaz.",
      gradient: "from-[#5146D9] to-[#7B6EF6]",
    },
    {
      title: "Eventos e Cursos",
      desc: "Páginas com foco em inscrições, conversão e engajamento instantâneo.",
      gradient: "from-[#7B6EF6] to-[#5146D9]",
    },
  ];

  return (
    <section className="relative py-28 px-6 sm:px-12 bg-gradient-to-br from-[#0B0B16] via-[#14142E] to-[#1A1A40] rounded-3xl overflow-hidden">
      {/* Fundo animado */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(124,58,237,0.15),transparent_70%)]"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Cabeçalho */}
      <motion.div
        className="text-center mb-16 relative z-0"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="p-6 inline-block rounded-full bg-gradient-to-r from-[#7C3AED] to-[#00C2FF] shadow-lg shadow-[#7C3AED]/40">
          <Rocket className="w-12 h-12 text-white" strokeWidth={2.5} />
        </div>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mt-6">
          Criação de{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#00C2FF]">
            Landing Pages
          </span>
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed">
          Converta visitantes em clientes com landing pages profissionais,
          otimizadas para campanhas, lançamentos e captação de leads.
        </p>
      </motion.div>

      {/* Features */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto relative z-0 mb-16">
        {features.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-white shadow-[0_8px_30px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_40px_rgba(124,58,237,0.3)] transition-all duration-500"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-full bg-white/20">{item.icon}</div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
            </div>
            <p className="text-white/90 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Casos de Uso */}
      <div className="text-center mb-16 relative z-0">
        <h3 className="text-3xl font-bold text-white mb-10">
          Páginas que Geram Resultados
        </h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className={`bg-gradient-to-r ${c.gradient} rounded-2xl p-6 text-white shadow-lg shadow-black/30`}
            >
              <h4 className="text-xl font-semibold mb-3">{c.title}</h4>
              <p className="text-white/90 text-sm">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center relative z-10">
        <NeonButton
          text="Quero Alavancar Minhas Vendas"
          href="https://wa.me/5585921743200?text=Oi!%20Quero%20criar%20uma%20landing%20page%20para%20meu%20negócio%20ou%20campanha.%20Gostaria%20de%20ver%20os%20modelos%20e%20valores!"
          color="#7C3AED"
          icon={ArrowRight}
      />
      </div>

      {/* Efeito de brilho flutuante */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-[#7C3AED]/10 via-[#00C2FF]/10 to-transparent blur-3xl opacity-40 z-0"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
};

export default LandingPage;
