import React from "react";
import { motion } from "framer-motion";

const beneficios = [
  {
    numero: "250%",
    titulo: "Potencial de crescimento",
    desc: "Uma presença digital bem construída amplia percepção de valor, autoridade e capacidade de conversão.",
  },
  {
    numero: "85%",
    titulo: "Leads mais qualificados",
    desc: "Estrutura, posicionamento e clareza visual ajudam a atrair contatos mais alinhados ao seu serviço.",
  },
  {
    numero: "98%",
    titulo: "Experiência mais sólida",
    desc: "Interfaces claras e rápidas reforçam confiança e tornam a navegação mais eficiente em qualquer dispositivo.",
  },
  {
    numero: "27 UF",
    titulo: "Escala nacional",
    desc: "Projetos pensados com estrutura profissional permitem expansão, consistência e alcance além do mercado local.",
  },
];

const Beneficios = () => {
  return (
    <section
      id="beneficios"
      className="relative py-28 md:py-36 border-t border-white/10 bg-black text-white"
    >
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_bottom_right,rgba(123,97,255,0.10),transparent_28%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-12 gap-10 mb-16 md:mb-20"
        >
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-white/45">
              <span className="w-8 h-px bg-[#7B61FF]" />
              Impacto
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[0.95]">
              Resultados que
              <br />
              fortalecem a
              <span className="text-[#7B61FF]"> presença</span>
            </h2>
          </div>

          <div className="lg:col-span-7 flex items-end">
            <p className="max-w-2xl text-white/60 text-base md:text-lg leading-relaxed">
              Design, posicionamento e tecnologia deixam de ser apenas estética
              quando passam a atuar como ativos reais de percepção, confiança e
              crescimento.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 md:gap-10">
          {beneficios.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="border-t border-white/10 pt-6"
            >
              <div className="text-4xl md:text-5xl font-semibold tracking-tight text-[#7B61FF]">
                {item.numero}
              </div>

              <h3 className="mt-5 text-xl md:text-2xl font-medium text-white">
                {item.titulo}
              </h3>

              <p className="mt-3 text-white/58 leading-relaxed text-sm md:text-base">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Beneficios;