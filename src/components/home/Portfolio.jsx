import React from "react";
import { motion } from "framer-motion";
import { Eye, Rocket } from "lucide-react";

const Portfolio = ({ assets }) => {
  const projects = [
    {
      name: "CRXW - 3D CGI",
      description: "Institucional",
      tools: [assets.react, assets.js, assets.java, assets.spring],
      image: assets.site6,
      link: "https://crxw.com.br",
    },
    {
      name: "OZD Studio",
      description: "Institucional",
      tools: [assets.react, assets.js],
      image: assets.site5,
      link: "https://ozdstudio.com.br",
    },
    {
      name: "CPNG",
      description: "Landing Page",
      tools: [assets.react, assets.js],
      image: assets.site1,
      link: "https://centronovageracao.com.br",
    },
    {
      name: "Consult Social",
      description: "Landing Page",
      tools: [assets.react, assets.js],
      image: assets.site2,
      link: "https://consultsocial.com.br",
    },
    {
      name: "Dra. Priscila Babiuk",
      description: "Landing Page",
      tools: [assets.react, assets.js],
      image: assets.site3,
      link: "https://drapriscilababiuk.com.br",
    },
    {
      name: "AR Studio Design",
      description: "Institucional",
      tools: [assets.react, assets.js],
      image: assets.site4,
      link: "https://arstudiodesign.com.br",
    },
  ];

  return (
    <section
      id="portfolio"
      className="relative py-24 px-6 sm:px-10 overflow-hidden"
    >
      {/* Fundo estático otimizado (sem backgroundPosition animado) */}
      <div className="absolute inset-0 pointer-events-none" />

      {/* Título principal */}
      <motion.div
        className="text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Portfólio Digital
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-300 text-base md:text-lg">
          Alguns dos nossos desenvolvidos com{" "}
          <span className="text-[#7DF9FF] font-medium">
            criatividade e performance
          </span>{" "}
          — do conceito ao lançamento.
        </p>
      </motion.div>

      {/* Grid de projetos */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:shadow-[0_0_25px_rgba(125,249,255,0.15)] transition-all duration-500"
          >
            {/* Imagem */}
            <div className="relative overflow-hidden group">
              <img
                src={p.image}
                alt={p.name}
                loading="lazy"
                decoding="async"
                className="w-full h-60 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>

              {/* Nome do projeto */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <Rocket className="w-5 h-5 text-[#7DF9FF]" />
                <h3 className="text-lg font-bold text-white">{p.name}</h3>
              </div>
            </div>

            {/* Conteúdo */}
            <div className="p-6">
              <p className="text-[#7DF9FF] text-sm font-semibold uppercase tracking-wide mb-4">
                {p.description}
              </p>

              <div className="flex gap-3 mb-6 flex-wrap">
                {p.tools.map((tool, idx) => (
                  <img
                    key={idx}
                    src={tool}
                    alt=""
                    loading="lazy"
                    className="w-7 h-7 opacity-75 hover:opacity-100 transition"
                  />
                ))}
              </div>

              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#0B0B16] bg-gradient-to-r from-[#7DF9FF] to-[#7DA6FF] px-5 py-2.5 rounded-full font-semibold transition-transform hover:scale-105 hover:shadow-[0_0_10px_rgba(125,249,255,0.4)]"
              >
                <Eye className="w-5 h-5" />
                Ver Projeto
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Linha luminosa sutil */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#7DF9FF]/60 to-transparent animate-[shine_5s_linear_infinite]" />

      <style>
        {`
          @keyframes shine {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </section>
  );
};

export default Portfolio;
