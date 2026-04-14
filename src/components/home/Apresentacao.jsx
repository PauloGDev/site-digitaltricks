"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Apresentacao = ({ assets }) => {
  return (
    <section className="relative py-28 md:py-36 border-t border-white/10 bg-black text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_18%_18%,rgba(123,97,255,0.10),transparent_28%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-20">
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
              Posicionamento
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold leading-[0.95] tracking-tight max-w-3xl">
              Cada projeto exige
              <br />
              uma direção com
              <span className="text-[#7B61FF]"> presença real</span>
            </h2>

            <p className="mt-8 text-white/60 text-base md:text-lg leading-relaxed max-w-xl">
              Não criamos apenas interfaces bonitas. Estruturamos experiências
              digitais com clareza estratégica, sofisticação visual e alto valor
              percebido para transformar a forma como sua marca é vista.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              <div className="border-t border-white/10 pt-4">
                <span className="text-[11px] uppercase tracking-[0.22em] text-white/35">
                  Direção
                </span>
                <p className="mt-2 text-white/75 leading-relaxed">
                  Identidade visual forte, linguagem contemporânea e coerência
                  estética.
                </p>
              </div>

              <div className="border-t border-white/10 pt-4">
                <span className="text-[11px] uppercase tracking-[0.22em] text-white/35">
                  Estrutura
                </span>
                <p className="mt-2 text-white/75 leading-relaxed">
                  Design pensado para posicionamento, confiança e conversão.
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://wa.me/5585921743200?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais!"
                className="inline-flex items-center gap-2 bg-[#7B61FF] text-white px-6 py-3 text-sm font-medium hover:bg-[#6A50F5] transition-colors"
              >
                Iniciar projeto
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#portfolio"
                className="px-6 py-3 text-sm font-medium border border-white/10 text-white/80 hover:bg-white/[0.04] transition-colors"
              >
                Ver trabalhos
              </a>
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
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="relative overflow-hidden border border-white/10 bg-[#0A0A0A] min-h-[380px] md:min-h-[440px]">
                <img
                  src={assets.home_apresentacao1}
                  alt="Equipe colaborando"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover opacity-85"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:36px_36px] opacity-20" />

                <div className="absolute left-4 bottom-4 border border-white/10 bg-black/55 backdrop-blur-sm px-4 py-3">
                  <span className="block text-[10px] uppercase tracking-[0.22em] text-white/40">
                    Visual System
                  </span>
                  <p className="mt-1 text-sm text-white/85">
                    Direção visual com presença e sofisticação.
                  </p>
                </div>
              </div>

              <div className="relative overflow-hidden border border-white/10 bg-[#0A0A0A] min-h-[380px] md:min-h-[440px] mt-8 md:mt-10">
                <img
                  src={assets.home_apresentacao2}
                  alt="Design estratégico"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover opacity-85"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent" />

                <div className="absolute top-4 right-4 border border-white/10 bg-black/55 backdrop-blur-sm px-3 py-2">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-white/40">
                    Premium Interface
                  </span>
                </div>

                <div className="absolute left-4 bottom-4 border border-white/10 bg-black/55 backdrop-blur-sm px-4 py-3">
                  <span className="block text-[10px] uppercase tracking-[0.22em] text-white/40">
                    Product Thinking
                  </span>
                  <p className="mt-1 text-sm text-white/85">
                    Design orientado a valor percebido e clareza comercial.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Apresentacao;