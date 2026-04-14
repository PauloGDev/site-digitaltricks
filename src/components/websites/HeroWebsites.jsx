import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroWebsites = ({ assets }) => {
  return (
    <section className="relative overflow-hidden bg-black text-white border-b border-white/10">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(123,97,255,0.10),transparent_28%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-20 pt-32 md:pt-40 pb-24 md:pb-28">
        <div className="grid lg:grid-cols-12 gap-12 xl:gap-16 items-center">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-white/45">
              <span className="w-8 h-px bg-[#7B61FF]" />
              Desenvolvimento Web
            </span>

            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold leading-[0.95] tracking-tight">
              Websites com
              <br />
              clareza, presença e
              <span className="text-[#7B61FF]"> direção digital</span>
            </h1>

            <p className="mt-6 max-w-xl text-white/60 text-base md:text-lg leading-relaxed">
              Criamos websites institucionais, landing pages e estruturas
              digitais pensadas para fortalecer posicionamento, transmitir
              confiança e gerar resultados com mais consistência.
            </p>

            <p className="mt-5 max-w-xl text-white/45 leading-relaxed">
              Mais do que presença online, desenvolvemos experiências com
              linguagem visual forte, performance e valor percebido.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://wa.me/5585921743200?text=Ol%C3%A1%2C%20vi%20o%20site%20de%20voc%C3%AAs%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20servi%C3%A7o%20de%20desenvolvimento%20de%20Website."
                className="inline-flex items-center gap-2 bg-[#7B61FF] text-white px-6 py-3 text-sm font-medium hover:bg-[#6A50F5] transition-colors"
              >
                Fazer orçamento
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#institucional"
                className="px-6 py-3 text-sm font-medium border border-white/10 text-white/80 hover:bg-white/[0.04] transition-colors"
              >
                Explorar serviços
              </a>
            </div>

            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              <div className="border-t border-white/10 pt-4">
                <span className="text-[11px] uppercase tracking-[0.22em] text-white/35">
                  Estrutura
                </span>
                <p className="mt-2 text-white/75 leading-relaxed">
                  Projetos pensados para performance, organização e escalabilidade.
                </p>
              </div>

              <div className="border-t border-white/10 pt-4">
                <span className="text-[11px] uppercase tracking-[0.22em] text-white/35">
                  Posicionamento
                </span>
                <p className="mt-2 text-white/75 leading-relaxed">
                  Design e tecnologia alinhados para elevar percepção de valor.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="relative border border-white/10 bg-[#0A0A0A] overflow-hidden">
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:36px_36px] opacity-20" />

              <img
                src={assets.website_land}
                alt="Mockup de website"
                className="w-full h-[340px] md:h-[520px] object-cover opacity-90"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

              <div className="absolute top-5 left-5 md:top-6 md:left-6 border border-white/10 bg-black/55 backdrop-blur-sm px-4 py-3">
                <span className="block text-[10px] uppercase tracking-[0.22em] text-white/40">
                  Web Structure
                </span>
                <p className="mt-1 text-sm text-white/85">
                  Clareza visual, performance e presença institucional.
                </p>
              </div>

              <div className="absolute right-5 bottom-5 md:right-6 md:bottom-6 border border-white/10 bg-black/55 backdrop-blur-sm px-4 py-3">
                <span className="block text-[10px] uppercase tracking-[0.22em] text-white/40">
                  Premium Delivery
                </span>
                <p className="mt-1 text-sm text-white/85">
                  Projetos pensados para posicionamento e conversão.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroWebsites;