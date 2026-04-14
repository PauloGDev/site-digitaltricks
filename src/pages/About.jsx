import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Globe2, Star, HeartHandshake } from "lucide-react";
import { assets } from "../assets/assets";

const Sobre = () => {
  const motivos = [
    {
      icon: <Globe2 className="w-5 h-5" />,
      titulo: "Soluções personalizadas",
      desc: "Cada projeto é estruturado de acordo com o contexto, os objetivos e o posicionamento da marca.",
    },
    {
      icon: <Star className="w-5 h-5" />,
      titulo: "Foco em resultado",
      desc: "Direção visual e estrutura digital pensadas para fortalecer percepção, confiança e crescimento.",
    },
    {
      icon: <HeartHandshake className="w-5 h-5" />,
      titulo: "Acompanhamento próximo",
      desc: "Conduzimos cada etapa com clareza, proximidade e atenção real ao que precisa ser construído.",
    },
  ];

  const estatisticas = [
    {
      value: "70%",
      desc: "dos consumidores tendem a confiar mais em empresas com presença digital profissional.",
    },
    {
      value: "23%",
      desc: "marcas que investem em branding consistente costumam crescer mais em percepção e diferenciação.",
    },
    {
      value: "300%",
      desc: "uma estrutura digital bem planejada pode ampliar significativamente a visibilidade nas buscas.",
    },
    {
      value: "200%",
      desc: "interfaces comerciais bem resolvidas aumentam potencial de conversão e consistência de venda.",
    },
  ];

  return (
    <div id="inicio" className="bg-black text-white overflow-hidden">
      {/* HERO */}
      <section className="relative pt-32 md:pt-40 pb-24 md:pb-28 border-b border-white/10">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(123,97,255,0.10),transparent_30%)]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid lg:grid-cols-12 gap-12 xl:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-white/45">
                <span className="w-8 h-px bg-[#7B61FF]" />
                Sobre a Digital Tricks
              </span>

              <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[0.95]">
                Estratégia, design
                <br />
                e tecnologia com
                <span className="text-[#7B61FF]"> direção clara</span>
              </h1>

              <p className="mt-6 max-w-xl text-white/60 text-base md:text-lg leading-relaxed">
                A Digital Tricks cria experiências digitais com foco em
                presença, performance e valor percebido. Unimos visão
                estratégica, linguagem visual forte e execução técnica para
                construir marcas mais sólidas no ambiente digital.
              </p>

              <p className="mt-5 max-w-xl text-white/45 leading-relaxed">
                Mais do que entregar páginas ou layouts, estruturamos presenças
                digitais que reforçam confiança, autoridade e diferenciação.
              </p>

              <div className="mt-10">
                <a
                  href="#contato"
                  className="inline-flex items-center gap-2 bg-[#7B61FF] text-white px-6 py-3 text-sm font-medium hover:bg-[#6A50F5] transition-colors"
                >
                  Iniciar projeto
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:36px_36px] opacity-20" />

                <img
                  src={assets.logo}
                  alt="Sobre a Digital Tricks"
                  className="w-full h-[360px] md:h-[520px] object-cover opacity-90"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                <div className="absolute left-5 bottom-5 md:left-6 md:bottom-6 border border-white/10 bg-black/55 backdrop-blur-sm px-4 py-3">
                  <span className="block text-[10px] uppercase tracking-[0.22em] text-white/40">
                    Digital Presence
                  </span>
                  <p className="mt-1 text-sm text-white/85">
                    Posicionamento, identidade e performance em uma mesma direção.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="relative py-24 md:py-28 border-b border-white/10">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(123,97,255,0.08),transparent_28%)]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-20">
          <motion.div
            className="grid lg:grid-cols-12 gap-10 mb-16"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
          >
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-white/45">
                <span className="w-8 h-px bg-[#7B61FF]" />
                Diferenciais
              </span>

              <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold leading-[0.95] tracking-tight">
                Por que escolher
                <br />
                a
                <span className="text-[#7B61FF]"> Digital Tricks</span>
              </h2>
            </div>

            <div className="lg:col-span-7 flex items-end">
              <p className="max-w-2xl text-white/60 text-base md:text-lg leading-relaxed">
                Cada entrega é guiada por clareza estratégica, refinamento
                visual e compromisso técnico. O objetivo é construir presença
                digital com mais consistência, valor e confiança.
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {motivos.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="border border-white/10 bg-[#0A0A0A] p-7 md:p-8 hover:border-white/20 transition-colors duration-300"
              >
                <div className="w-11 h-11 border border-white/10 bg-white/[0.03] flex items-center justify-center text-[#7B61FF] mb-5">
                  {item.icon}
                </div>

                <h3 className="text-xl font-medium tracking-tight text-white">
                  {item.titulo}
                </h3>

                <p className="mt-3 text-white/58 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACTO */}
      <section className="relative py-24 md:py-28">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_bottom_left,rgba(123,97,255,0.08),transparent_28%)]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-20">
          <motion.div
            className="grid lg:grid-cols-12 gap-10 mb-16"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
          >
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-white/45">
                <span className="w-8 h-px bg-[#7B61FF]" />
                Impacto
              </span>

              <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold leading-[0.95] tracking-tight">
                Presença digital
                <br />
                como
                <span className="text-[#7B61FF]"> ativo real</span>
              </h2>
            </div>

            <div className="lg:col-span-7 flex items-end">
              <p className="max-w-2xl text-white/60 text-base md:text-lg leading-relaxed">
                Branding, design e estrutura digital deixam de ser apenas
                estética quando passam a atuar como fatores de confiança,
                diferenciação e crescimento.
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 md:gap-10">
            {estatisticas.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                viewport={{ once: true }}
                className="border-t border-white/10 pt-6"
              >
                <div className="text-4xl md:text-5xl font-semibold tracking-tight text-[#7B61FF]">
                  {stat.value}
                </div>

                <p className="mt-4 text-white/58 leading-relaxed text-sm md:text-base">
                  {stat.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sobre;