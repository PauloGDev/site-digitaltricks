import React from "react";
import { motion } from "framer-motion";
import { BarChart3, Award, Users, TrendingUp, Globe2 } from "lucide-react";

const EcommercesResultados = () => {
  const estatisticas = [
    {
      icon: <TrendingUp className="w-10 h-10 text-white" />,
      numero: "+200%",
      titulo: "Crescimento em vendas",
      desc: "Empresas que migraram para nossos e-commerces tiveram aumento médio de 200% nas vendas em 6 meses.",
      gradient: "from-[#7B6EF6] to-[#5146D9]"
    },
    {
      icon: <Users className="w-10 h-10 text-white" />,
      numero: "+80",
      titulo: "Clientes atendidos",
      desc: "Empreendedores, marcas e lojas físicas que expandiram seus negócios com lojas virtuais personalizadas.",
      gradient: "from-[#A5461E] to-[#CA46E5]"
    },
    {
      icon: <Award className="w-10 h-10 text-white" />,
      numero: "100%",
      titulo: "Satisfação garantida",
      desc: "Feedbacks positivos e suporte próximo do cliente em todas as etapas do projeto.",
      gradient: "from-[#1E9CA5] to-[#2F28AC]"
    },
    {
      icon: <Globe2 className="w-10 h-10 text-white" />,
      numero: "Todo o Brasil",
      titulo: "Atendimento nacional",
      desc: "Levamos sua loja ao digital independente da cidade ou estado — entregamos em qualquer lugar.",
      gradient: "from-[#FF7E5F] to-[#FD3A69]"
    },
  ];

  return (
    <section className="relative py-12 px-6 sm:px-12 overflow-hidden">

      {/* Fundo com brilho suave */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#1A1635] via-[#100E24] to-[#0B0918] opacity-95"></div>
      <div className="absolute inset-0 -z-10 blur-3xl bg-gradient-to-tr from-[#7B6EF6]/20 via-[#2F28AC]/10 to-transparent"></div>

      {/* Título */}
      <motion.h2
        className="text-center text-4xl sm:text-5xl font-extrabold mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <span className="text-gray-200 text-3xl">
          Resultados que falam por si só
        </span>
      </motion.h2>

      {/* Cards de estatísticas */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
        {estatisticas.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className={`bg-gradient-to-r ${item.gradient} rounded-2xl p-8 text-white shadow-[0_8px_30px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_40px_rgba(255,255,255,0.2)] transition-all duration-500 text-center`}
          >
            <div className="flex justify-center mb-4 p-3 rounded-full bg-white/20 inline-block">
              {item.icon}
            </div>
            <h3 className="text-3xl font-bold mb-2">{item.numero}</h3>
            <h4 className="text-lg font-medium mb-2">{item.titulo}</h4>
            <p className="text-white/90 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Bloco de autoridade */}
      <motion.div
        className="max-w-4xl mx-auto text-center text-gray-300 leading-relaxed text-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <p className="mb-6">
          Cada loja desenvolvida é tratada como um projeto único — com foco em{" "}
          <span className="text-[#7B6EF6] font-semibold">performance, identidade visual</span>{" "}
          e <span className="text-[#7B6EF6] font-semibold">estratégia de vendas</span>.
        </p>
        <p>
          Da primeira reunião ao lançamento, acompanhamos cada etapa para garantir que seu
          e-commerce seja mais do que bonito: que ele realmente <strong>venda</strong>.
        </p>
      </motion.div>

    </section>
  );
};

export default EcommercesResultados;
