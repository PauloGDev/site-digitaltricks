import React from "react";
import { motion } from "framer-motion";
import { Search, Palette, Code, Rocket, ArrowRight } from "lucide-react";

const etapas = [
  {
    icon: <Search className="w-5 h-5" />,
    titulo: "Diagnóstico",
    desc: "Analisamos contexto, mercado e objetivos para construir uma base estratégica antes de qualquer decisão visual ou técnica.",
  },
  {
    icon: <Palette className="w-5 h-5" />,
    titulo: "Design & Experiência",
    desc: "Desenhamos interfaces com clareza, sofisticação e intenção, alinhando usabilidade, posicionamento e valor percebido.",
  },
  {
    icon: <Code className="w-5 h-5" />,
    titulo: "Desenvolvimento",
    desc: "Transformamos direção criativa em estrutura digital rápida, responsiva, confiável e pronta para evoluir com consistência.",
  },
  {
    icon: <Rocket className="w-5 h-5" />,
    titulo: "Lançamento",
    desc: "Publicamos com atenção a performance, estabilidade, SEO e acabamento para que a entrega tenha impacto desde o primeiro acesso.",
  },
];

const Abordagem = () => {
  return (
    <section className="relative py-28 md:py-36 border-t border-white/10 bg-black text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(123,97,255,0.10),transparent_30%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-12 gap-10 mb-16 md:mb-20"
        >
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-white/45">
              <span className="w-8 h-px bg-[#7B61FF]" />
              Método
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[0.95]">
              Uma abordagem
              <br />
              guiada por
              <span className="text-[#7B61FF]"> clareza</span>
            </h2>
          </div>

          <div className="lg:col-span-7 flex items-end">
            <p className="max-w-2xl text-white/60 text-base md:text-lg leading-relaxed">
              Cada projeto segue uma lógica precisa: entender, estruturar,
              desenhar e executar com consistência. O objetivo não é apenas
              entregar algo visualmente bom, mas construir uma presença digital
              mais forte, confiável e valiosa.
            </p>
          </div>
        </motion.div>

        {/* Etapas */}
        <div className="border-t border-white/10">
          {etapas.map((etapa, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-12 gap-6 md:gap-8 py-8 md:py-10 border-b border-white/10 group"
            >
              {/* Número */}
              <div className="md:col-span-2 flex items-start justify-between md:block">
                <span className="text-sm tracking-[0.22em] text-white/28">
                  0{i + 1}
                </span>
              </div>

              {/* Texto */}
              <div className="md:col-span-7">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 border border-white/10 bg-white/[0.03] flex items-center justify-center text-[#7B61FF] group-hover:bg-[#7B61FF] group-hover:text-white group-hover:border-[#7B61FF] transition-all duration-300">
                    {etapa.icon}
                  </div>

                  <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-white">
                    {etapa.titulo}
                  </h3>
                </div>

                <p className="text-white/60 leading-relaxed max-w-2xl">
                  {etapa.desc}
                </p>
              </div>

              {/* Apoio lateral */}
              <div className="md:col-span-3 flex md:justify-end md:items-start">
                <span className="text-[11px] uppercase tracking-[0.24em] text-white/22 pt-2">
                  Etapa estratégica
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fechamento */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.15 }}
          viewport={{ once: true }}
          className="pt-12 md:pt-14"
        >
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8">
              <p className="max-w-3xl text-white/55 text-base md:text-lg leading-relaxed">
                Não seguimos um fluxo genérico. Cada entrega é estruturada para
                unir percepção premium, direção estratégica e performance real,
                com decisões pensadas para fortalecer a marca em cada ponto de
                contato.
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <a
                href="#contato"
                className="inline-flex items-center gap-2 text-sm text-[#7B61FF] hover:text-[#9B89FF] transition-colors"
              >
                Iniciar conversa
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Abordagem;