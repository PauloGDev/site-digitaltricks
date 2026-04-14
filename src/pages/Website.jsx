import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Globe, LayoutGrid, ShoppingCart, ArrowRight } from "lucide-react";

import { assets } from "../assets/assets";
import Ecommerce from "../components/websites/Ecommerce";
import LandingPage from "../components/websites/LandingPage";
import Institucional from "../components/websites/Institucional";
import HeroWebsites from "../components/websites/HeroWebsites";

const Websites = () => {
  const [activeSection, setActiveSection] = useState("institucional");

  useEffect(() => {
    const sections = document.querySelectorAll("section[data-section]");

    const handleScroll = () => {
      let current = "institucional";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 180;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("data-section");
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const sections = [
    {
      id: "institucional",
      label: "Institucional",
      icon: <Globe size={18} />,
    },
    {
      id: "landingpage",
      label: "Landing Page",
      icon: <LayoutGrid size={18} />,
    },
  ];

  const servicos = [
    {
      title: "Landing Pages",
      desc: "Páginas enxutas e orientadas à conversão para campanhas, lançamentos e captação de leads.",
      icon: <LayoutGrid size={22} />,
      link: "https://wa.me/5585921743200?text=Oi!%20Quero%20criar%20uma%20landing%20page%20para%20meu%20negócio%20ou%20campanha.%20Gostaria%20de%20ver%20os%20modelos%20e%20valores!",
    },
    {
      title: "Sites Institucionais",
      desc: "Estruturas profissionais para apresentar a marca com clareza, autoridade e presença digital sólida.",
      icon: <Globe size={22} />,
      link: "https://wa.me/5585921743200?text=Olá!%20Tenho%20interesse%20em%20criar%20um%20site%20institucional%20para%20minha%20empresa.%20Gostaria%20de%20saber%20mais%20sobre%20os%20planos%20e%20valores.%20Pode%20me%20ajudar?",
    },
    {
      title: "E-commerce",
      desc: "Lojas virtuais com foco em performance, conversão e estrutura comercial preparada para crescer.",
      icon: <ShoppingCart size={22} />,
      link: "/ecommerce",
    },
  ];

  const faqItems = [
    {
      q: "Qual tipo de site faz mais sentido para minha empresa?",
      a: "Depende do objetivo. Sites institucionais reforçam presença e autoridade, landing pages são ideais para campanhas e captação, e e-commerces são voltados para operação de vendas online.",
    },
    {
      q: "Quanto tempo leva para desenvolver um website?",
      a: "O prazo varia conforme a complexidade. Projetos menores costumam levar de 2 a 4 semanas, enquanto estruturas mais robustas podem demandar mais tempo.",
    },
    {
      q: "O site será responsivo?",
      a: "Sim. Todos os projetos são desenvolvidos para funcionar bem em desktop, tablet e smartphone.",
    },
    {
      q: "Vocês oferecem manutenção?",
      a: "Sim. Há opções de continuidade com suporte, ajustes, manutenção e evolução da estrutura digital.",
    },
  ];

  return (
    <div className="bg-black text-white overflow-hidden">
      <HeroWebsites assets={assets} />

      <div className="relative">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(123,97,255,0.08),transparent_24%)]" />

        {/* Navegação lateral */}
        <div className="hidden xl:flex flex-col fixed left-6 top-1/2 -translate-y-1/2 z-40 gap-3">
          {sections.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`inline-flex items-center gap-2 px-4 py-3 text-sm border transition-all duration-300 ${
                activeSection === item.id
                  ? "border-[#7B61FF] bg-[#7B61FF] text-white"
                  : "border-white/10 bg-black/60 text-white/65 hover:bg-white/[0.04] hover:text-white"
              }`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 xl:px-20 py-24 md:py-28 space-y-28 md:space-y-32">
          {/* Introdução */}
          <section
            id="inicio"
            className="border-t border-white/10 pt-14 md:pt-16"
          >
            <motion.div
              className="grid lg:grid-cols-12 gap-10 mb-12 md:mb-14"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              viewport={{ once: true }}
            >
              <div className="lg:col-span-5">
                <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-white/45">
                  <span className="w-8 h-px bg-[#7B61FF]" />
                  Websites
                </span>

                <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold leading-[0.95] tracking-tight">
                  Estruturas digitais
                  <br />
                  com clareza e
                  <span className="text-[#7B61FF]"> posicionamento</span>
                </h1>
              </div>

              <div className="lg:col-span-7 flex items-end">
                <p className="max-w-2xl text-white/60 text-base md:text-lg leading-relaxed">
                  Desenvolvemos websites pensados para presença, performance e
                  valor percebido. Cada formato atende um objetivo específico,
                  com direção visual consistente e estrutura comercial clara.
                </p>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
              {servicos.map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  viewport={{ once: true }}
                  className="border border-white/10 bg-[#0A0A0A] p-7 md:p-8 hover:border-white/20 transition-colors duration-300"
                >
                  <div className="w-11 h-11 border border-white/10 bg-white/[0.03] flex items-center justify-center text-[#7B61FF] mb-5">
                    {service.icon}
                  </div>

                  <h2 className="text-xl md:text-2xl font-medium tracking-tight text-white">
                    {service.title}
                  </h2>

                  <p className="mt-3 text-white/58 leading-relaxed">
                    {service.desc}
                  </p>

                  <div className="mt-8">
                    <a
                      href={service.link}
                      className="inline-flex items-center gap-2 text-sm text-[#7B61FF] hover:text-[#9B89FF] transition-colors"
                    >
                      Fazer orçamento
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <section id="institucional" data-section="institucional">
            <Institucional link="https://wa.me/5585921743200?text=Olá!%20Tenho%20interesse%20em%20criar%20um%20site%20institucional%20para%20minha%20empresa.%20Gostaria%20de%20saber%20mais%20sobre%20os%20planos%20e%20valores.%20Pode%20me%20ajudar?" />
          </section>

          <section id="landingpage" data-section="landingpage">
            <LandingPage link="https://wa.me/5585921743200?text=Oi!%20Quero%20criar%20uma%20landing%20page%20para%20meu%20negócio%20ou%20campanha.%20Gostaria%20de%20ver%20os%20modelos%20e%20valores!" />
          </section>

          {/* FAQ */}
          <motion.section
            className="border-t border-white/10 pt-16 md:pt-20"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
          >
            <div className="grid lg:grid-cols-12 gap-10 mb-12">
              <div className="lg:col-span-5">
                <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-white/45">
                  <span className="w-8 h-px bg-[#7B61FF]" />
                  FAQ
                </span>

                <h2 className="mt-6 text-4xl md:text-5xl font-semibold leading-[0.95] tracking-tight">
                  Perguntas
                  <br />
                  frequentes
                </h2>
              </div>

              <div className="lg:col-span-7 flex items-end">
                <p className="max-w-2xl text-white/60 text-base md:text-lg leading-relaxed">
                  Respostas diretas para as dúvidas mais comuns sobre criação de
                  sites, estrutura, prazo e manutenção.
                </p>
              </div>
            </div>

            <div className="max-w-4xl divide-y divide-white/10">
              {faqItems.map((item, i) => (
                <details key={i} className="py-6 group">
                  <summary className="flex justify-between items-center cursor-pointer text-lg text-white">
                    {item.q}
                    <span className="text-white/35 transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>

                  <p className="mt-4 max-w-3xl text-white/58 leading-relaxed">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default Websites;