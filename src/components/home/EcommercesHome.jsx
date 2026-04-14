import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Zap, ShieldCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const EcommercesHome = () => {
  const beneficios = [
    {
      icon: <TrendingUp size={18} />,
      title: "Mais vendas",
      desc: "Estrutura orientada à conversão, com foco em jornada e decisão.",
    },
    {
      icon: <Zap size={18} />,
      title: "Performance",
      desc: "Carregamento rápido e experiência fluida em qualquer dispositivo.",
    },
    {
      icon: <ShieldCheck size={18} />,
      title: "Segurança",
      desc: "Infraestrutura confiável com proteção e estabilidade.",
    },
  ];

  return (
    <section className="py-32 border-t border-white/10 bg-[#050505] text-white">

      <div className="max-w-7xl mx-auto px-6 lg:px-20">

        {/* HEADER */}
        <div className="grid lg:grid-cols-12 gap-12 mb-20">

          <div className="lg:col-span-5">
            <span className="text-xs tracking-[0.25em] text-white/40">
              E-COMMERCE
            </span>

            <h2 className="mt-6 text-5xl lg:text-6xl leading-[0.95]">
              Lojas que
              <br />
              <span className="text-[#7B61FF]">vendem de verdade</span>
            </h2>
          </div>

          <div className="lg:col-span-7 flex items-end">
            <p className="text-white/60 max-w-xl">
              Desenvolvemos e-commerces com foco em performance, escalabilidade
              e conversão. Menos estética vazia, mais resultado real.
            </p>
          </div>

        </div>

        {/* BENEFÍCIOS */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {beneficios.map((b, i) => (
            <div key={i} className="border-t border-white/10 pt-6">

              <div className="text-[#7B61FF] mb-3">
                {b.icon}
              </div>

              <h3 className="text-lg font-medium">{b.title}</h3>

              <p className="text-white/60 mt-2 text-sm">
                {b.desc}
              </p>

            </div>
          ))}
        </div>

        {/* CTA */}
        <Link
          to="/ecommerce"
          className="inline-flex items-center gap-2 border border-white/10 px-6 py-3 text-sm hover:bg-white/[0.05] transition"
        >
          Ver planos
          <ArrowRight size={16} />
        </Link>

      </div>
    </section>
  );
};

export default EcommercesHome;