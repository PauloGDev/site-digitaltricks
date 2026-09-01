import React from "react";
import { motion } from "framer-motion";
import { Circle, PenTool, ArrowRight } from "lucide-react";
import { assets } from "../assets/assets";

const Design = () => {
  const motivos = [
    {
      title: "Reconhecimento de marca",
      desc: "Uma identidade visual consistente fortalece memorização, diferenciação e percepção de valor.",
    },
    {
      title: "Mais confiança e credibilidade",
      desc: "Design bem resolvido transmite profissionalismo e ajuda a marca a parecer mais sólida e preparada.",
    },
    {
      title: "Impacto na decisão de compra",
      desc: "Uma comunicação visual clara e estratégica melhora apresentação, leitura e conversão.",
    },
  ];

  const servicos = [
    {
      title: "Desenvolvimento de logotipo",
      desc: "Criação de marcas visuais com clareza, personalidade e coerência com o posicionamento do negócio.",
      img: assets.logo_alt,
      link: "https://wa.me/558597888022?text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20Design%20de%20Logotipo.",
    },
    {
      title: "Identidade visual completa",
      desc: "Sistema visual com tipografia, cores, aplicações e direção estética para fortalecer consistência de marca.",
      img: assets.chaveiro,
      link: "https://wa.me/558597888022?text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20Identidade%20Visual%20Completa.",
    },
  ];

  return (
    <section className="relative bg-black text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(123,97,255,0.10),transparent_28%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-20 py-28 md:py-36">
        {/* Hero */}
        <motion.div
          className="grid lg:grid-cols-12 gap-10 mb-20 md:mb-24"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
        >
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-white/45">
              <span className="w-8 h-px bg-[#7B61FF]" />
              Design & Branding
            </span>

            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold leading-[0.95] tracking-tight">
              Identidade visual
              <br />
              com direção,
              <span className="text-[#7B61FF]"> clareza e valor</span>
            </h1>
          </div>

          <div className="lg:col-span-7 flex items-end">
            <p className="max-w-2xl text-white/60 text-base md:text-lg leading-relaxed">
              Criamos sistemas visuais para marcas que precisam se apresentar com
              mais consistência, sofisticação e força percebida. Mais do que
              estética, construímos linguagem visual com intenção estratégica.
            </p>
          </div>
        </motion.div>

        {/* Por que investir */}
        <motion.div
          className="mb-20 md:mb-24"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-12 gap-10 mb-12">
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-white/45">
                <span className="w-8 h-px bg-[#7B61FF]" />
                Valor
              </span>

              <h2 className="mt-6 text-3xl md:text-4xl font-semibold leading-[1] tracking-tight">
                Por que investir em
                <span className="text-[#7B61FF]"> design e branding</span>
              </h2>
            </div>

            <div className="lg:col-span-7 flex items-end">
              <p className="max-w-2xl text-white/60 leading-relaxed">
                Uma identidade visual bem construída organiza percepção,
                fortalece posicionamento e melhora a forma como a marca é lida
                em cada ponto de contato.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {motivos.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                viewport={{ once: true }}
                className="border border-white/10 bg-[#0A0A0A] p-7 md:p-8 hover:border-white/20 transition-colors duration-300"
              >
                <div className="w-11 h-11 border border-white/10 bg-white/[0.03] flex items-center justify-center text-[#7B61FF] mb-5">
                  <Circle className="w-5 h-5" />
                </div>

                <h3 className="text-xl font-medium tracking-tight text-white">
                  {m.title}
                </h3>

                <p className="mt-3 text-white/58 leading-relaxed">
                  {m.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Serviços */}
        <motion.div
          className="mb-16 md:mb-20"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-12 gap-10 mb-12">
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-white/45">
                <span className="w-8 h-px bg-[#7B61FF]" />
                Serviços
              </span>

              <h2 className="mt-6 text-3xl md:text-4xl font-semibold leading-[1] tracking-tight">
                Soluções visuais para
                <span className="text-[#7B61FF]"> posicionar sua marca</span>
              </h2>
            </div>

            <div className="lg:col-span-7 flex items-end">
              <p className="max-w-2xl text-white/60 leading-relaxed">
                Estruturamos desde o símbolo central da marca até um sistema
                visual mais completo, capaz de dar coerência e presença à sua
                comunicação.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {servicos.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                viewport={{ once: true }}
                className="border border-white/10 bg-[#0A0A0A] p-8 md:p-10 grid lg:grid-cols-2 gap-8 items-center"
              >
                <div>
                  <div className="w-11 h-11 border border-white/10 bg-white/[0.03] flex items-center justify-center text-[#7B61FF] mb-5">
                    <PenTool className="w-5 h-5" />
                  </div>

                  <h3 className="text-2xl font-medium tracking-tight text-white">
                    {s.title}
                  </h3>

                  <p className="mt-4 text-white/60 leading-relaxed">
                    {s.desc}
                  </p>

                  <div className="mt-8">
                    <a
                      href={s.link}
                      className="inline-flex items-center gap-2 text-sm text-[#7B61FF] hover:text-[#9B89FF] transition-colors"
                    >
                      Fazer orçamento
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="flex justify-center lg:justify-end">
                  <div className="border border-white/10 bg-black/40 p-4">
                    <img
                      src={s.img}
                      alt={s.title}
                      className="object-contain max-w-[220px] w-full"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="border-t border-white/10 pt-12 md:pt-14"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-[11px] uppercase tracking-[0.24em] text-white/35">
                Próximo passo
              </span>

              <h2 className="mt-4 text-3xl md:text-4xl font-semibold leading-[1] tracking-tight text-white">
                Dê à sua marca uma
                <span className="text-[#7B61FF]"> identidade mais forte</span>
              </h2>

              <p className="mt-4 max-w-2xl text-white/60 leading-relaxed">
                Um branding bem construído melhora reconhecimento, consistência
                e percepção de valor em toda a comunicação da empresa.
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <a
                href="https://wa.me/558597888022?text=Ol%C3%A1,%20quero%20saber%20mais%20sobre%20Design%20e%20Branding."
                className="inline-flex items-center gap-2 bg-[#7B61FF] text-white px-6 py-3 text-sm font-medium hover:bg-[#6A50F5] transition-colors"
              >
                Fazer orçamento
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Design;
