import React from "react";
import { motion } from "framer-motion";
import MascotSwimmer from "../MascotSwimmer";

const MascoteHome = () => {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-[#050505] py-20 text-white sm:py-24 md:py-32">

      <motion.div
        animate={{ backgroundPosition: ["0px 0px", "40px 40px"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute inset-0 z-0 opacity-20
        bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),
        linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
        bg-[size:40px_40px]"
      />

      {/* glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{ duration: 6, repeat: Infinity }}
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7B61FF]/20 blur-[140px]"
      />

      {/* overlay leitura */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-black via-black/70 to-black/40" />

      {/* CONTEÚDO */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* TEXTO */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-xl"
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
            className="relative h-[420px] sm:h-[520px] lg:h-[620px]"
          >
            <div className="absolute -inset-x-24 inset-y-0 sm:-inset-x-32 lg:-inset-x-40">
              <MascotSwimmer className="absolute inset-0 z-0 h-full w-full" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default MascoteHome;