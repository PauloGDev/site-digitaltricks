import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Zap, CreditCard, TrendingUp, ShieldCheck, ArrowRight } from "lucide-react";
import EcommercesResultados from "./EcommercesResultados";
import NeonButton from "../NeonButton";

const Ecommerce = ({ link }) => {
  const features = [
    { icon: <CreditCard className="w-8 h-8 text-white" />, title: "Integração de Pagamentos", desc: "Aceite cartões, Pix e boletos com segurança e praticidade." },
    { icon: <TrendingUp className="w-8 h-8 text-white" />, title: "Design Focado em Conversão", desc: "Interface estratégica que guia o cliente até a compra." },
    { icon: <Zap className="w-8 h-8 text-white" />, title: "Velocidade e Performance", desc: "Sites otimizados para carregamento rápido em qualquer dispositivo." },
    { icon: <ShieldCheck className="w-8 h-8 text-white" />, title: "Segurança de Dados", desc: "Proteção SSL, contra fraudes e dados dos clientes." },
    { icon: <ShoppingBag className="w-8 h-8 text-white" />, title: "Painel Intuitivo", desc: "Gerencie pedidos, estoque, clientes e produtos facilmente." },
    { icon: <TrendingUp className="w-8 h-8 text-white" />, title: "SEO Avançado", desc: "Otimize para Google e atraia o público certo para sua loja." },
  ];

  return (
    <section className="relative py-28 px-6 sm:px-12 bg-gradient-to-br from-[#0B0B16] via-[#14142E] to-[#1A1A40] rounded-3xl overflow-hidden">
      {/* Fundo luminoso */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(123,110,246,0.12),transparent_70%)]"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />

      {/* Cabeçalho */}
      <motion.div
        className="text-center mb-16 relative z-0"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="p-6 inline-block rounded-full bg-gradient-to-r from-[#7B6EF6] to-[#5146D9] shadow-lg shadow-[#7B6EF6]/40">
          <ShoppingBag className="w-12 h-12 text-white" strokeWidth={2.5} />
        </div>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mt-6">
          Desenvolvimento de{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B6EF6] to-[#5146D9]">
            E-commerce
          </span>
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed">
          E-commerces personalizados, rápidos e otimizados para vender mais — encantando seus clientes e expandindo sua marca online.
        </p>
      </motion.div>

      {/* Features */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto relative z-0 mb-16">
        {features.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-white shadow-[0_8px_30px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_40px_rgba(123,110,246,0.3)] transition-all duration-500"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-full bg-white/20">{item.icon}</div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
            </div>
            <p className="text-white/90 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center relative z-0 mb-20">
        <NeonButton
          text="Quero Meu Ecommerce"
          href="https://wa.me/558597888022?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais!"
          color="#FD3A69"
          icon={ArrowRight}
      />
      </div>

      <EcommercesResultados />
    </section>
  );
};

export default Ecommerce;
