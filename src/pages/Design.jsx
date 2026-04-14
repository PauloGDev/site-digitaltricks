import React from "react";
import { motion } from "framer-motion";
import { Sparkles, PenTool } from "lucide-react";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import NeonButton from "../components/NeonButton"; // usamos o botão universal

const Design = () => {
  const motivos = [
    {
      title: "Reconhecimento da Marca",
      desc: "Empresas com identidade visual forte são 80% mais reconhecidas pelo público.",
    },
    {
      title: "Gera Mais Confiança e Credibilidade",
      desc: "Um design bem feito transmite profissionalismo e segurança para seus clientes.",
    },
    {
      title: "Impacto Direto nas Vendas",
      desc: "Negócios que investem em design estratégico podem ver um aumento de até 200% nas conversões.",
    },
  ];

  const servicos = [
    {
      title: "Desenvolvimento de Logotipo",
      desc: "Criamos logotipos únicos e memoráveis que refletem a essência e propósito da sua marca.",
      img: assets.logo_alt,
      gradient: "from-[#141428] to-[#1A1A40]",
      link: "https://wa.me/558597888022?text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20Design%20de%20Logotipo.",
    },
    {
      title: "Identidade Visual Completa",
      desc: "Construímos um ecossistema visual completo — cores, tipografia, ícones e aplicações consistentes.",
      img: assets.chaveiro,
      gradient: "from-[#0B0B16] to-[#141428]",
      link: "https://wa.me/558597888022?text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20Identidade%20Visual%20Completa.",
    },
  ];

  return (
    <section className="relative py-28 px-6 sm:px-12 bg-gradient-to-br from-[#0B0B16] via-[#141428] to-[#1A1A40] overflow-hidden rounded-3xl">
      {/* Fundo dinâmico com partículas */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(125,249,255,0.1),transparent_70%)]"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
      />

      {/* Efeito de energia luminosa */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-[#7DF9FF]/10 via-[#7367F0]/10 to-transparent blur-3xl opacity-40"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Seção Hero */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto text-center mb-28"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="p-6 inline-block rounded-full bg-gradient-to-r from-[#7DF9FF] to-[#7367F0] shadow-lg shadow-[#7DF9FF]/30"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <PenTool className="w-12 h-12 text-white" strokeWidth={2.5} />
        </motion.div>

        <h1 className="text-5xl font-extrabold mt-6 text-white tracking-tight leading-tight">
          Design e Branding Profissional
        </h1>

        <p className="mt-5 max-w-2xl mx-auto text-gray-300 text-lg leading-relaxed">
          A <span className="text-[#7DF9FF] font-medium">identidade visual</span> é o coração da sua marca.
          Criamos experiências visuais que inspiram, conectam e vendem.
        </p>

        <div className="mt-8">
          <NeonButton
            text="Fazer Orçamento"
            href="https://wa.me/558597888022?text=Ol%C3%A1,%20quero%20saber%20mais%20sobre%20Design%20e%20Branding."
            color="#5146D9"
          />
        </div>
      </motion.div>

      {/* Por que investir */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto mb-28"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Title text1="Por Que Investir em" text2="Design e Branding?" />
        <div className="grid md:grid-cols-3 gap-10 mt-16">
          {motivos.map((m, i) => (
            <motion.div
              key={i}
              className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-gray-200 text-center overflow-hidden group transition-all duration-500"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.2 }}
              whileHover={{
                y: -10,
                scale: 1.04,
              }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-b from-[#7DF9FF]/10 to-[#7367F0]/20 blur-2xl" />
              <Sparkles className="w-8 h-8 text-[#7DF9FF] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{m.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Serviços */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Title text1="Nossos Serviços de" text2="Design e Branding" />
        <div className="grid md:grid-cols-2 gap-12 mt-16">
          {servicos.map((s, i) => (
            <motion.div
              key={i}
              className={`rounded-2xl bg-gradient-to-br ${s.gradient} border border-white/10 p-8 text-white flex flex-col lg:flex-row items-center gap-10 transition-all duration-500 hover:shadow-[0_0_40px_rgba(125,249,255,0.2)]`}
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex-1 space-y-5 text-center lg:text-left">
                <h3 className="text-2xl font-semibold">{s.title}</h3>
                <p className="text-white/80 leading-relaxed">{s.desc}</p>
                <NeonButton text="Fazer Orçamento" href={s.link} color="#7367F0" />
              </div>

              <div className="flex-1 flex justify-center">
                <motion.img
                  src={s.img}
                  alt={s.title}
                  className="rounded-2xl object-contain max-w-[230px]"
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Linha luminosa inferior */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#5146D9] to-transparent"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />
    </section>
  );
};

export default Design;
