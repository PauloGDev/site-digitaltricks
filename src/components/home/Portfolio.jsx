import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const Portfolio = ({ assets }) => {
  const projects = [
    {
      name: "CRXW - 3D CGI",
      category: "Institucional",
      year: "2025",
      tools: [assets.react, assets.js, assets.java, assets.spring],
      image: assets.site6,
      link: "https://crxw.com.br",
    },
    {
      name: "OZD Studio",
      category: "Institucional",
      year: "2025",
      tools: [assets.react, assets.js],
      image: assets.site5,
      link: "https://ozdstudio.com.br",
    },
    {
      name: "CPNG",
      category: "Landing Page",
      year: "2025",
      tools: [assets.react, assets.js],
      image: assets.site1,
      link: "https://centronovageracao.com.br",
    },
  ];

  return (
    <section
      id="portfolio"
      className="relative py-28 md:py-36 border-t border-white/10"
    >
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(123,97,255,0.10),transparent_28%)]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="grid lg:grid-cols-12 gap-10 mb-16 md:mb-20"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
        >
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-white/45">
              <span className="w-8 h-px bg-[#7B61FF]" />
              Projetos
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold leading-[0.95] tracking-tight text-white">
              Casos
              <br />
              selecionados
            </h2>
          </div>

          <div className="lg:col-span-7 flex items-end">
            <p className="max-w-2xl text-white/60 text-base md:text-lg leading-relaxed">
              Uma seleção de projetos desenvolvidos com foco em presença,
              performance e valor percebido. Cada entrega é pensada para unir
              clareza visual, sofisticação e resultado.
            </p>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              viewport={{ once: true }}
              className="group relative border border-white/10 bg-[#0A0A0A] overflow-hidden hover:border-white/20 transition-all duration-400"
            >
              {/* imagem */}
              <div className="relative overflow-hidden aspect-[16/10] bg-black">
                <img
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover opacity-85 group-hover:scale-[1.03] transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:32px_32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute top-4 left-4 border border-white/10 bg-black/55 backdrop-blur-sm px-3 py-2">
                  <span className="text-[10px] uppercase tracking-[0.24em] text-white/45">
                    {project.category}
                  </span>
                </div>

                <div className="absolute top-4 right-4 w-10 h-10 border border-white/10 bg-black/55 backdrop-blur-sm flex items-center justify-center text-white/80 group-hover:bg-[#7B61FF] group-hover:border-[#7B61FF] group-hover:text-white transition-all duration-300">
                  <ArrowUpRight size={18} />
                </div>
              </div>

              {/* conteúdo */}
              <div className="p-6 md:p-7">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl md:text-2xl font-medium tracking-tight text-white">
                    {project.name}
                  </h3>
                  <span className="text-xs tracking-[0.2em] uppercase text-white/30">
                    {project.year}
                  </span>
                </div>

                <p className="mt-3 text-sm md:text-base text-white/58 leading-relaxed">
                  Projeto com direção visual contemporânea, estrutura responsiva
                  e foco em presença digital sólida.
                </p>

                <div className="mt-6 flex items-center justify-between gap-4">
                  <div className="flex gap-2 flex-wrap">
                    {project.tools.map((tool, idx) => (
                      <div
                        key={idx}
                        className="w-9 h-9 border border-white/10 bg-white/[0.03] flex items-center justify-center"
                      >
                        <img
                          src={tool}
                          alt=""
                          loading="lazy"
                          className="w-4 h-4 opacity-75"
                        />
                      </div>
                    ))}
                  </div>

                  <span className="text-sm text-[#7B61FF] group-hover:text-[#9B89FF] transition-colors">
                    Ver projeto
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;