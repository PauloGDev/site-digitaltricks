import React from "react";
import { motion } from "framer-motion";
import {
  Rocket,
  Target,
  MousePointerClick,
  TrendingUp,
  Palette,
  Smartphone,
  Zap,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const LandingPage = ({ link }) => {
  const features = [
    {
      icon: <Target className="w-5 h-5" />,
      title: "Conversão estratégica",
      desc: "Cada seção é pensada para conduzir o visitante com mais clareza até a ação desejada.",
    },
    {
      icon: <MousePointerClick className="w-5 h-5" />,
      title: "UX/UI orientadas a resultado",
      desc: "Layout, narrativa e interação desenhados para facilitar decisão e reduzir fricção.",
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Alta performance",
      desc: "Estrutura leve e rápida para campanhas, tráfego pago e lançamentos com mais eficiência.",
    },
    {
      icon: <Palette className="w-5 h-5" />,
      title: "Design personalizado",
      desc: "Visual criado para refletir a identidade da marca e reforçar percepção de valor.",
    },
    {
      icon: <Smartphone className="w-5 h-5" />,
      title: "Mobile first",
      desc: "Experiência consistente em celular, tablet e desktop, sem perda de conversão.",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Integrações e automação",
      desc: "Captação conectada a CRM, formulários, pixels e ferramentas de marketing.",
    },
  ];

  const cases = [
    {
      title: "Lançamentos digitais",
      desc: "Captação de leads, validação de oferta e campanhas com foco em volume e conversão.",
    },
    {
      title: "Produtos e serviços",
      desc: "Apresentação objetiva para vender com mais clareza, valor percebido e intenção comercial.",
    },
    {
      title: "Eventos e cursos",
      desc: "Estruturas focadas em inscrição, urgência, argumento e engajamento direto.",
    },
  ];

  const diferenciais = [
    "Estrutura pensada para campanhas e anúncios",
    "Copy, design e fluxo com foco comercial",
    "Carregamento rápido e navegação objetiva",
    "Integração com métricas e ferramentas de captação",
    "Visual sob medida para a proposta da marca",
    "Base preparada para tráfego pago e escala",
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
              Landing Page
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold leading-[0.95] tracking-tight">
              Páginas pensadas
              <br />
              para converter com
              <span className="text-[#7B61FF]"> mais clareza</span>
            </h2>
          </div>

          <div className="lg:col-span-7 flex items-end">
            <p className="max-w-2xl text-white/60 text-base md:text-lg leading-relaxed">
              Desenvolvemos landing pages profissionais para campanhas,
              lançamentos e captação de leads, com foco em narrativa, estrutura,
              velocidade e decisão.
            </p>
          </div>
        </motion.div>

        {/* Features */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 mb-20">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="border border-white/10 bg-[#0A0A0A] p-7 md:p-8 hover:border-white/20 transition-colors duration-300"
            >
              <div className="w-11 h-11 border border-white/10 bg-white/[0.03] flex items-center justify-center text-[#7B61FF] mb-5">
                {item.icon}
              </div>

              <h3 className="text-xl font-medium tracking-tight text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-white/58 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Casos + diferenciais */}
        <div className="grid lg:grid-cols-12 gap-10 mb-20">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-white/45">
              <span className="w-8 h-px bg-[#7B61FF]" />
              Aplicações
            </span>

            <h3 className="mt-6 text-3xl md:text-4xl font-semibold leading-[1] tracking-tight">
              Estruturas criadas para
              <span className="text-[#7B61FF]"> diferentes objetivos</span>
            </h3>

            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {cases.map((c, i) => (
                <div
                  key={i}
                  className="border border-white/10 bg-[#0A0A0A] p-6 hover:border-white/20 transition-colors duration-300"
                >
                  <h4 className="text-xl font-medium tracking-tight text-white">
                    {c.title}
                  </h4>
                  <p className="mt-3 text-white/58 leading-relaxed text-sm">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            viewport={{ once: true }}
          >
            <div className="border border-white/10 bg-[#0A0A0A] p-8 md:p-10 h-full">
              <span className="text-[11px] uppercase tracking-[0.24em] text-white/35">
                Diferenciais
              </span>

              <div className="mt-6 space-y-4">
                {diferenciais.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 border-t border-white/10 pt-4">
                    <CheckCircle2 className="w-4 h-4 min-w-4 text-[#7B61FF] mt-1" />
                    <p className="text-white/65 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          className="border-t border-white/10 pt-12 md:pt-14"
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
                Lance uma página com
                <span className="text-[#7B61FF]"> objetivo claro</span>
              </h3>

              <p className="mt-4 max-w-2xl text-white/60 leading-relaxed">
                Uma landing page bem resolvida reduz ruído, melhora a leitura da
                oferta e aumenta sua capacidade de transformar atenção em ação.
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <a
                href={link}
                className="inline-flex items-center gap-2 bg-[#7B61FF] text-white px-6 py-3 text-sm font-medium hover:bg-[#6A50F5] transition-colors"
              >
                Quero minha landing page
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LandingPage;