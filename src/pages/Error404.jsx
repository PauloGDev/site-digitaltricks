import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { assets } from "../assets/assets";

const Error404 = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen bg-black text-white overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(123,97,255,0.10),transparent_28%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-20 pt-28 md:pt-36 pb-20 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-12 gap-12 xl:gap-16 items-center w-full">

          {/* Conteúdo */}
          <div className="lg:col-span-6">
            <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-white/45">
              <span className="w-8 h-px bg-[#7B61FF]" />
              Página não encontrada
            </span>

            <div className="mt-6 text-[64px] sm:text-[86px] md:text-[110px] leading-none font-semibold tracking-tight text-white">
              404
            </div>

            <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[0.98]">
              Esta página não
              <br />
              <span className="text-[#7B61FF]">está disponível</span>
            </h1>

            <p className="mt-6 max-w-xl text-white/60 text-base md:text-lg leading-relaxed">
              O endereço que você tentou acessar não existe mais, foi movido ou
              está incorreto. Volte para a página inicial e continue navegando.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/"
                className="inline-flex items-center gap-2 bg-[#7B61FF] text-white px-6 py-3 text-sm font-medium hover:bg-[#6A50F5] transition-colors"
              >
                Voltar para o início
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/websites"
                className="px-6 py-3 text-sm font-medium border border-white/10 text-white/80 hover:bg-white/[0.04] transition-colors"
              >
                Ver serviços
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Error404;