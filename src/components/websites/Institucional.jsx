import React from "react";
import { motion } from "framer-motion";
import { Globe, Zap, TrendingUp, ShieldCheck, Users, Briefcase, Star, ArrowRight } from "lucide-react";
import NeonButton from "../NeonButton";

const Institucional = ({ link }) => {
  const features = [
    { icon: <Globe className="w-8 h-8 text-[#7DF9FF]" />, title: "Presença Digital Profissional", desc: "Mostre sua empresa de forma completa e confiável." },
    { icon: <Zap className="w-8 h-8 text-[#7DF9FF]" />, title: "Responsivo e Moderno", desc: "Design adaptável e fluido em qualquer dispositivo." },
    { icon: <TrendingUp className="w-8 h-8 text-[#7DF9FF]" />, title: "SEO Inicial", desc: "Estrutura otimizada para motores de busca." },
    { icon: <ShieldCheck className="w-8 h-8 text-[#7DF9FF]" />, title: "Segurança e Confiabilidade", desc: "Proteção SSL e performance consistente." },
  ];

  const clients = [
    { icon: <Users className="w-8 h-8 text-white" />, title: "Pequenas e médias empresas", desc: "Fortaleça sua presença online com um site profissional.", gradient: "from-[#2F28AC] to-[#7367F0]" },
    { icon: <Briefcase className="w-8 h-8 text-white" />, title: "Consultorias e escritórios", desc: "Transmita confiança com uma presença sólida e moderna.", gradient: "from-[#7367F0] to-[#2F28AC]" },
    { icon: <Star className="w-8 h-8 text-white" />, title: "Marcas em crescimento", desc: "Fortaleça sua autoridade com um site de alto impacto visual.", gradient: "from-[#7367F0] to-[#5146D9]" },
  ];

  return (
    <section className="relative py-28 px-6 sm:px-12 bg-gradient-to-br from-[#0B0B16] via-[#14142E] to-[#1A1A40] rounded-3xl overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(125,249,255,0.08),transparent_70%)]"
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <motion.div className="text-center mb-16 relative z-0"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="p-6 inline-block rounded-full bg-gradient-to-r from-[#7DF9FF] to-[#7367F0] shadow-lg shadow-[#7DF9FF]/40">
          <Globe className="w-12 h-12 text-white" strokeWidth={2.5} />
        </div>
        <h2 className="text-4xl sm:text-5xl font-extrabold mt-6 text-white">
          Sites <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7DF9FF] to-[#7367F0]">Institucionais</span>
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-gray-300 text-lg">
          Fortaleça sua marca com um site moderno, seguro e otimizado — feito para gerar confiança e destaque online.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto mb-20 relative z-0">
        {features.map((item, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.04 }}
            className="bg-white/10 border border-white/10 rounded-2xl p-8 text-gray-200 shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_40px_rgba(125,249,255,0.3)] transition-all duration-500"
          >
            <div className="flex items-center gap-3 mb-4">{item.icon}<h3 className="text-xl font-semibold text-white">{item.title}</h3></div>
            <p className="text-gray-300 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center mb-12 relative z-0">
        <h3 className="text-3xl font-bold text-white mb-10">Clientes Ideais</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {clients.map((c, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className={`bg-gradient-to-r ${c.gradient} rounded-2xl p-6 text-white shadow-lg shadow-black/30`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-full bg-white/20">{c.icon}</div>
                <h4 className="text-lg font-semibold">{c.title}</h4>
              </div>
              <p className="text-white/90 text-sm">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="text-center relative z-0">
        <NeonButton
          text="Quero Meu Site Institucional"
          href="https://wa.me/5585921743200?text=Olá!%20Tenho%20interesse%20em%20criar%20um%20site%20institucional%20para%20minha%20empresa.%20Gostaria%20de%20saber%20mais%20sobre%20os%20planos%20e%20valores.%20Pode%20me%20ajudar?"
          color="#7367F0"
          icon={ArrowRight}
      />
      </div>
    </section>
  );
};

export default Institucional;
