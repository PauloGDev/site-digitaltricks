import React from "react";
import { motion } from "framer-motion";
import { Search, Palette, Code, Rocket } from "lucide-react";

const Abordagem = () => {
  const etapas = [
    {
      icon: <Search className="w-8 h-8 text-[#7DF9FF]" />,
      titulo: "Diagnóstico",
      desc: "Analisamos o seu negócio, público e metas para definir o plano digital mais eficiente.",
    },
    {
      icon: <Palette className="w-8 h-8 text-[#7DF9FF]" />,
      titulo: "Design & Experiência",
      desc: "Criamos interfaces modernas, intuitivas e alinhadas à essência da sua marca.",
    },
    {
      icon: <Code className="w-8 h-8 text-[#7DF9FF]" />,
      titulo: "Desenvolvimento",
      desc: "Transformamos o design em código otimizado, veloz e totalmente responsivo.",
    },
    {
      icon: <Rocket className="w-8 h-8 text-[#7DF9FF]" />,
      titulo: "Lançamento",
      desc: "Publicamos com SEO otimizado, integrações completas e suporte pós-lançamento.",
    },
  ];

  return (
    <section className="relative py-28 px-6 sm:px-12 bg-gradient-to-br from-[#0B0B16] via-[#141428] to-[#1A1A40] rounded-3xl overflow-hidden">
      {/* Fundo animado com gradiente */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(125,249,255,0.15),transparent_60%)]"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      {/* Título */}
      <motion.div
        className="text-center mb-16 relative z-0"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="p-6 inline-block rounded-full bg-gradient-to-r from-[#7DF9FF] to-[#7367F0] shadow-lg shadow-[#7DF9FF]/30"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Rocket className="w-12 h-12 text-white" strokeWidth={2.5} />
        </motion.div>

        <h2 className="text-5xl font-extrabold mt-6 text-white tracking-tight">
          Nossa Abordagem
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-300 text-lg">
          De ideias a resultados reais — cada etapa é guiada por{" "}
          <span className="text-[#7DF9FF] font-medium">inovação e estratégia</span>.
        </p>
      </motion.div>

      {/* Etapas */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto relative z-0">
        {etapas.map((etapa, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.3, delay: i * 0.15 }}
            viewport={{ once: true }}
            whileHover={{
              y: -8,
              scale: 1.05,
              boxShadow: "0px 15px 30px rgba(115,103,240,0.25)",
            }}
            className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 text-gray-200 text-center transition-all duration-500"
          >
            <div className="mb-5 flex justify-center">{etapa.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-3">
              {etapa.titulo}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {etapa.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Linha luminosa animada */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#7DF9FF] to-transparent"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Chamada final */}
      <motion.div
        className="text-center mt-20 relative z-0"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
          Da análise ao lançamento, seguimos um processo{" "}
          <span className="text-[#7DF9FF] font-medium">
            criativo, técnico e de alta performance
          </span>{" "}
          para entregar resultados extraordinários.
        </p>
      </motion.div>
    </section>
  );
};

export default Abordagem;
