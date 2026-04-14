import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Zap, ShieldCheck, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const EcommercesHome = () => {
  const beneficios = [
    {
      icon: <TrendingUp className="w-7 h-7 text-white" />,
      title: "Mais Vendas",
      desc: "Design estratégico e jornada de compra otimizada para transformar visitantes em clientes.",
    },
    {
      icon: <Zap className="w-7 h-7 text-white" />,
      title: "Alta Performance",
      desc: "Lojas rápidas e responsivas, prontas para gerar conversões em qualquer dispositivo.",
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-white" />,
      title: "Segurança Total",
      desc: "SSL, antifraude e infraestrutura escalável para proteger seus dados e vendas.",
    },
  ];

  return (
    <section className="relative py-20 px-6 sm:px-12 lg:px-20 bg-gradient-to-br from-[#0B0B16] via-[#14142E] to-[#1A1A40] rounded-3xl mt-20 mb-20 overflow-hidden">
      {/* Fundo dinâmico */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(123,110,246,0.15),transparent_70%)]"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />

      {/* Cabeçalho */}
      <motion.div
        className="text-center mb-14 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="inline-block p-5 rounded-full bg-gradient-to-r from-[#7B6EF6] to-[#5146D9] shadow-lg shadow-[#7B6EF6]/30">
          <ShoppingBag className="w-10 h-10 text-white" />
        </div>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mt-6 leading-tight">
          E-commerces que{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B6EF6] to-[#5146D9]">
            vendem de verdade
          </span>
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-300 text-lg">
          Desenvolvemos lojas virtuais rápidas, seguras e otimizadas para escalar suas vendas.
        </p>
      </motion.div>

      {/* Benefícios rápidos */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-14 relative z-10">
        {beneficios.map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-white shadow-[0_8px_30px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_40px_rgba(123,110,246,0.3)] transition-all duration-500"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 rounded-full bg-white/20">{b.icon}</div>
              <h3 className="text-lg font-semibold">{b.title}</h3>
            </div>
            <p className="text-sm text-white/90">{b.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center relative z-10">
        <Link
          to="/ecommerce"
          className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#7B6EF6] to-[#5146D9] text-white font-semibold px-8 py-4 rounded-full shadow-lg shadow-[#7B6EF6]/40 hover:shadow-[#7B6EF6]/60 transition-all duration-500"
        >
          <span>Ver Planos e Detalhes</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
        <p className="mt-4 text-gray-400 text-sm">
          Comece seu e-commerce profissional e venda todos os dias 🚀
        </p>
      </div>
    </section>
  );
};

export default EcommercesHome;
