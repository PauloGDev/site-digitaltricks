import React from "react";
import { ArrowRight } from "lucide-react";

const Sobre = ({ assets }) => {
  return (
    <section
      id="sobre"
      className="relative py-28 md:py-36 border-t border-white/10 bg-[#050505] text-white"
    >
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(123,97,255,0.10),transparent_30%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-12 gap-12 xl:gap-16 items-center">
          {/* TEXTO */}
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-white/45">
              <span className="w-8 h-px bg-[#7B61FF]" />
              Sobre
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold leading-[0.95] tracking-tight">
              Construindo presença
              <br />
              digital com
              <span className="text-[#7B61FF]"> precisão</span>
            </h2>

            <p className="mt-6 max-w-xl text-white/60 text-base md:text-lg leading-relaxed">
              A Digital Tricks desenvolve experiências digitais com foco em
              percepção de valor, performance e posicionamento. Cada projeto é
              pensado para unir linguagem visual forte, estrutura sólida e
              impacto real na forma como a marca é percebida.
            </p>

            <p className="mt-5 max-w-xl text-white/45 leading-relaxed">
              Mais do que entregar páginas, construímos presenças digitais com
              clareza estratégica, sofisticação visual e direção técnica.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              <div className="border-t border-white/10 pt-4">
                <span className="text-[11px] uppercase tracking-[0.22em] text-white/35">
                  Foco
                </span>
                <p className="mt-2 text-white/75 leading-relaxed">
                  Projetos com valor percebido, performance e consistência.
                </p>
              </div>

              <div className="border-t border-white/10 pt-4">
                <span className="text-[11px] uppercase tracking-[0.22em] text-white/35">
                  Direção
                </span>
                <p className="mt-2 text-white/75 leading-relaxed">
                  Design, tecnologia e estratégia trabalhando juntos.
                </p>
              </div>
            </div>

            <div className="mt-10">
              <a
                href="/sobre"
                className="inline-flex items-center gap-2 text-sm text-[#7B61FF] hover:text-[#9B89FF] transition-colors"
              >
                Conhecer a Digital Tricks
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* IMAGEM */}
          <div className="lg:col-span-7">
            <div className="relative border border-white/10 bg-[#0A0A0A] overflow-hidden">
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:36px_36px] opacity-20" />

              <img
                src={assets.home_sobre}
                alt="Sobre a Digital Tricks"
                className="w-full h-[360px] md:h-[440px] object-cover opacity-90"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

              <div className="absolute left-5 bottom-5 md:left-6 md:bottom-6 border border-white/10 bg-black/55 backdrop-blur-sm px-4 py-3">
                <span className="block text-[10px] uppercase tracking-[0.22em] text-white/40">
                  Digital Presence
                </span>
                <p className="mt-1 text-sm text-white/85">
                  Estratégia, identidade e performance em uma mesma direção.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;