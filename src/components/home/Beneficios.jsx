import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import CountUp from "react-countup";

const Beneficios = () => {
  const beneficios = [
    {
      icon: <CheckCircle className="w-10 h-10 text-white" />,
      numero: 250,
      titulo: "Aumento de Vendas",
      desc: "Clientes que investem em um site profissional veem aumento médio de 250% nas vendas em 6 meses.",
      gradient: "from-[#7B6EF6] to-[#5146D9]",
      suffix: "%",
    },
    {
      icon: <CheckCircle className="w-10 h-10 text-white" />,
      numero: 85,
      titulo: "Mais Leads Qualificados",
      desc: "Sites otimizados geram até 85% mais leads qualificados, acelerando o crescimento do seu negócio.",
      gradient: "from-[#A5461E] to-[#CA46E5]",
      suffix: "%",
    },
    {
      icon: <CheckCircle className="w-10 h-10 text-white" />,
      numero: 98,
      titulo: "Satisfação do Cliente",
      desc: "Clientes relatam até 98% de satisfação com a experiência digital e facilidade de navegação.",
      gradient: "from-[#1E9CA5] to-[#2F28AC]",
      suffix: "%",
    },
    {
      icon: <CheckCircle className="w-10 h-10 text-white" />,
      numero: 27,
      titulo: "Presença Nacional",
      desc: "Nossos sites permitem atuação em todos os estados do Brasil, alcançando novos públicos.",
      gradient: "from-[#FF7E5F] to-[#FD3A69]",
      suffix: "",
    },
  ];

  return (
    <section id="beneficios" className="relative py-20 px-6 sm:px-12 overflow-hidden">
      {/* Fundo com brilho suave */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#1A1635] via-[#100E24] to-[#0B0918] opacity-95"></div>
      <div className="absolute inset-0 -z-10 blur-3xl bg-gradient-to-tr from-[#7B6EF6]/20 via-[#2F28AC]/10 to-transparent"></div>

      {/* Título */}
      <motion.h2
        className="text-center text-4xl sm:text-5xl font-extrabold mb-16 text-gray-200"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Resultados Reais que seu Negócio Pode Alcançar
      </motion.h2>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {beneficios.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className={`bg-gradient-to-r ${item.gradient} rounded-2xl p-8 text-white shadow-[0_8px_30px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_40px_rgba(255,255,255,0.2)] transition-all duration-500 text-center`}
          >
            <div className="flex justify-center mb-4 p-4 rounded-full bg-white/20 inline-block">
              {item.icon}
            </div>
            <div className="text-3xl font-bold mb-2">
              <CountUp
                end={item.numero}
                duration={2}
                suffix={item.suffix}
                enableScrollSpy
                scrollSpyOnce
              />
            </div>
            <h3 className="text-xl font-bold mb-2">{item.titulo}</h3>
            <p className="text-white/90 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Beneficios;
