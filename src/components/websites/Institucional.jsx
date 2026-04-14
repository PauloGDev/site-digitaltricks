import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Zap,
  TrendingUp,
  ShieldCheck,
  Users,
  Briefcase,
  Star,
  ArrowRight,
} from "lucide-react";

const Institucional = ({ link }) => {
  const features = [
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Presença digital profissional",
      desc: "Apresente sua empresa com clareza, credibilidade e uma estrutura visual mais sólida.",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Responsivo e contemporâneo",
      desc: "Experiência consistente em desktop, tablet e smartphone, com navegação fluida.",
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Base para crescimento",
      desc: "Estrutura preparada para posicionamento, tráfego, visibilidade e evolução digital.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Segurança e confiabilidade",
      desc: "Projeto com base técnica estável, SSL e foco em confiança para a marca.",
    },
  ];

  const clients = [
    {
      icon: <Users className="w-5 h-5" />,
      title: "Pequenas e médias empresas",
      desc: "Para negócios que precisam fortalecer presença, profissionalismo e clareza institucional.",
    },
    {
      icon: <Briefcase className="w-5 h-5" />,
      title: "Consultorias e escritórios",
      desc: "Ideal para quem precisa transmitir confiança, organização e autoridade desde o primeiro contato.",
    },
    {
      icon: <Star className="w-5 h-5" />,
      title: "Marcas em crescimento",
      desc: "Uma estrutura digital mais forte para marcas que estão elevando seu posicionamento no mercado.",
    },
  ];

  return (
    <section className="relative py-28 md:py-36 border border-white/10 bg-[#050505] text-white overflow-hidden">
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
              Institucional
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold leading-[0.95] tracking-tight">
              Sites para marcas
              <br />
              que precisam de
              <span className="text-[#7B61FF]"> presença real</span>
            </h2>
          </div>

          <div className="lg:col-span-7 flex items-end">
            <p className="max-w-2xl text-white/60 text-base md:text-lg leading-relaxed">
              Estruturas institucionais pensadas para apresentar a marca com mais
              clareza, confiança e valor percebido. O objetivo não é apenas estar
              online, mas comunicar com mais força e consistência.
            </p>
          </div>
        </motion.div>

        {/* Features */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-20">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              viewport={{ once: true }}
              className="border border-white/10 bg-[#0A0A0A] p-7 md:p-8 hover:border-white/20 transition-colors duration-300"
            >
              <div className="w-11 h-11 border border-white/10 bg-white/[0.03] flex items-center justify-center text-[#7B61FF] mb-5">
                {item.icon}
              </div>

              <h3 className="text-xl md:text-2xl font-medium tracking-tight text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-white/58 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Clientes ideais */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-12 md:pt-14"
        >
          <div className="grid lg:grid-cols-12 gap-10 mb-12">
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-white/45">
                <span className="w-8 h-px bg-[#7B61FF]" />
                Perfil ideal
              </span>

              <h3 className="mt-6 text-3xl md:text-4xl font-semibold leading-[1] tracking-tight">
                Para marcas que precisam
                <span className="text-[#7B61FF]"> comunicar melhor</span>
              </h3>
            </div>

            <div className="lg:col-span-7 flex items-end">
              <p className="max-w-2xl text-white/60 leading-relaxed">
                Um site institucional faz mais sentido quando a empresa precisa
                reforçar autoridade, organizar sua apresentação e gerar mais
                confiança no ambiente digital.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {clients.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                viewport={{ once: true }}
                className="border border-white/10 bg-[#0A0A0A] p-7 md:p-8 hover:border-white/20 transition-colors duration-300"
              >
                <div className="w-11 h-11 border border-white/10 bg-white/[0.03] flex items-center justify-center text-[#7B61FF] mb-5">
                  {c.icon}
                </div>

                <h4 className="text-xl font-medium tracking-tight text-white">
                  {c.title}
                </h4>

                <p className="mt-3 text-white/58 leading-relaxed">
                  {c.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-12 md:pt-14 mt-16 md:mt-20"
        >
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-[11px] uppercase tracking-[0.24em] text-white/35">
                Próximo passo
              </span>

              <h3 className="mt-4 text-3xl md:text-4xl font-semibold leading-[1] tracking-tight text-white">
                Estruture uma presença digital
                <span className="text-[#7B61FF]"> mais confiável</span>
              </h3>

              <p className="mt-4 max-w-2xl text-white/60 leading-relaxed">
                Um site institucional bem resolvido ajuda sua marca a se
                apresentar melhor, transmitir profissionalismo e consolidar sua
                presença online com mais clareza.
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <a
                href={link}
                className="inline-flex items-center gap-2 bg-[#7B61FF] text-white px-6 py-3 text-sm font-medium hover:bg-[#6A50F5] transition-colors"
              >
                Quero meu site institucional
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Institucional;