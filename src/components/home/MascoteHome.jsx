import React from "react";
import { motion } from "framer-motion";
import MascotSwimmer from "../MascotSwimmer";

const MascoteHome = () => {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-[#050505] py-16 text-white sm:py-24 md:py-32">

      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-20
        bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),
        linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
        bg-[size:40px_40px]"
      />

      <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7B61FF]/20 opacity-25 blur-[140px]" />

      {/* overlay leitura */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-black via-black/65 to-black/40 lg:bg-gradient-to-r lg:from-black lg:via-black/70 lg:to-black/40" />

      {/* CONTEÚDO */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid items-center gap-10 sm:gap-14 lg:grid-cols-2 lg:gap-16">

          {/* TEXTO */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mx-auto max-w-xl text-center lg:mx-0 lg:text-left"
          >

            <h2 className="mt-6 text-4xl md:text-5xl font-semibold leading-[1.05] tracking-tight">
              Conheça o{" "}
              <span className="text-[#7B61FF]">Trix</span>
            </h2>

            <p className="mt-6 text-white/65 text-base leading-relaxed">
              A orca representa inteligência, estratégia e domínio absoluto.
              No oceano, ela está no topo da cadeia alimentar — precisa, rápida e sempre no controle.
            </p>

            <p className="mt-4 text-white/50 text-base leading-relaxed">
              O Trix traduz essa mesma mentalidade no ambiente digital: decisões mais inteligentes,
              execução eficiente e sistemas preparados para liderar mercados, não apenas competir.
            </p>
          </motion.div>

          {/* 🐋 ORCA */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative mx-auto h-[clamp(360px,86vw,520px)] w-full max-w-[680px] sm:h-[560px] lg:h-[660px] lg:max-w-none"
          >
            <div className="absolute -inset-x-6 inset-y-0 sm:-inset-x-14 md:-inset-x-20 lg:-inset-x-40">
              <MascotSwimmer className="absolute inset-0 z-0 h-full w-full" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default MascoteHome;
