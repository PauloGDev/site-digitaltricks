import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  ShoppingBag,
  Palette,
  Search,
  ArrowRight,
} from "lucide-react";

const ServicosBeneficios = () => {
  const servicos = [
    {
      nome: "Criação de Sites",
      desc: "Sites institucionais, landing pages e estruturas digitais com foco em clareza, presença e performance.",
      icon: <Globe className="w-5 h-5" />,
    },
    {
      nome: "E-commerce",
      desc: "Lojas virtuais com foco em conversão, estabilidade, velocidade e escalabilidade comercial.",
      icon: <ShoppingBag className="w-5 h-5" />,
    },
    {
      nome: "Design UX/UI",
      desc: "Interfaces com estética premium, navegação intuitiva e percepção de valor mais alta.",
      icon: <Palette className="w-5 h-5" />,
    },
    {
      nome: "SEO & Estrutura",
      desc: "Base técnica e estratégica para visibilidade, indexação e crescimento orgânico consistente.",
      icon: <Search className="w-5 h-5" />,
    },
  ];

  const principais = [
    {
      title: "Websites de alto padrão",
      desc: "Projetos institucionais e comerciais com direção visual forte, estrutura sólida e posicionamento premium.",
      href: "/websites",
    },
    {
      title: "Design orientado a resultado",
      desc: "UX/UI projetado para unir clareza, confiança, experiência e maior valor percebido para a marca.",
      href: "/design",
    },
  ];

  return (
    <section className="relative py-28 md:py-36 border-t border-white/10 bg-[#050505] text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(123,97,255,0.10),transparent_28%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-20">
        {/* Header */}
        <motion.div
          className="grid lg:grid-cols-12 gap-10 mb-16 md:mb-20"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
        >
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-white/45">
              <span className="w-8 h-px bg-[#7B61FF]" />
              Serviços
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold leading-[0.95] tracking-tight">
              Soluções digitais
              <br />
              com direção e
              <span className="text-[#7B61FF]"> precisão</span>
            </h2>
          </div>

          <div className="lg:col-span-7 flex items-end">
            <p className="max-w-2xl text-white/60 text-base md:text-lg leading-relaxed">
              Estruturamos experiências digitais para marcas que querem elevar
              percepção, fortalecer presença e crescer com mais consistência.
            </p>
          </div>
        </motion.div>

        {/* Blocos principais */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-14 md:mb-16">
          {principais.map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="group relative border border-white/10 bg-[#0A0A0A] p-8 md:p-10 hover:border-white/20 hover:bg-[#0D0D0D] transition-all duration-300"
            >
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_top_right,rgba(123,97,255,0.10),transparent_30%)]" />

              <div className="relative">
                <span className="text-[11px] uppercase tracking-[0.24em] text-white/35">
                  Especialidade
                </span>

                <h3 className="mt-4 text-2xl md:text-3xl font-medium tracking-tight text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-white/60 leading-relaxed max-w-xl">
                  {item.desc}
                </p>

                <div className="mt-8 inline-flex items-center gap-2 text-sm text-[#7B61FF] group-hover:text-[#9B89FF] transition-colors">
                  Saiba mais
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Serviços */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
          {servicos.map((servico, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              viewport={{ once: true }}
              className="border border-white/10 bg-[#0A0A0A] p-7 md:p-8 hover:border-white/20 transition-all duration-300"
            >
              <div className="w-11 h-11 border border-white/10 bg-white/[0.03] flex items-center justify-center text-[#7B61FF] mb-5">
                {servico.icon}
              </div>

              <h3 className="text-xl font-medium tracking-tight text-white">
                {servico.nome}
              </h3>

              <p className="mt-3 text-white/58 text-sm md:text-base leading-relaxed">
                {servico.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA final */}
        <motion.div
          className="mt-16 md:mt-20 border-t border-white/10 pt-10"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-[11px] uppercase tracking-[0.24em] text-white/35">
                Próximo passo
              </span>

              <h3 className="mt-4 text-3xl md:text-4xl font-semibold leading-[1] tracking-tight text-white">
                Transforme sua ideia em uma presença digital
                <span className="text-[#7B61FF]"> mais forte.</span>
              </h3>

              <p className="mt-4 max-w-2xl text-white/60 leading-relaxed">
                Projetos com clareza, estrutura e percepção premium para marcas
                que querem crescer com mais autoridade.
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <a
                href="https://wa.me/5585921743200?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais!"
                className="inline-flex items-center gap-2 bg-[#7B61FF] text-white px-6 py-3 text-sm font-medium hover:bg-[#6A50F5] transition-colors"
              >
                Iniciar projeto
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicosBeneficios;