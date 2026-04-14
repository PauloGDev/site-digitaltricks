import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { Globe, LayoutGrid, ShoppingCart } from "lucide-react";
import Ecommerce from "../components/websites/Ecommerce";
import LandingPage from "../components/websites/LandingPage";
import Institucional from "../components/websites/Institucional";
import HeroWebsites from "../components/websites/HeroWebsites";

const Websites = () => {
  const [activeSection, setActiveSection] = useState("ecommerce");

  // Detectar seção visível
  useEffect(() => {
    const sections = document.querySelectorAll("section[data-section]");
    const handleScroll = () => {
      let current = "ecommerce";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 150;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("data-section");
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const sections = [
    { id: "institucional", label: "Institucional", icon: <Globe size={22} /> },
    { id: "landingpage", label: "Landing Page", icon: <LayoutGrid size={22} /> },
  ];

  return (
    <div className="bg-[#121212] text-white relative overflow-hidden">
      {/* Hero Section */}
      <HeroWebsites assets={assets} />

      <div className="relative flex justify-center">
        {/* Sidebar grande (visível apenas em telas grandes) */}
        <div className="hidden lg:flex flex-col fixed left-6 top-1/2 -translate-y-1/2 z-50 gap-5">
          {sections.map((item, index) => {
            // Lista de gradientes (adicione ou altere conforme quiser)
            const gradients = [
              "from-[#3B82F6] to-[#7367F0]", // Ciano
              "from-[#7B6EF6] to-[#5146D9]", // Roxo
            ];

            // Define gradiente baseado no índice
            const gradient = gradients[index % gradients.length];

            return (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ scale: 1.1 }}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold 
                  transition-all duration-300 backdrop-blur-xl border border-white/10
                  ${
                    activeSection === item.id
                      ? `bg-gradient-to-r ${gradient} text-white shadow-lg shadow-white/20`
                      : "bg-white/10 text-gray-300 hover:bg-white/20"
                  }`}
              >
                {item.icon}
                {item.label}
              </motion.button>
            );
          })}
        </div>


        {/* Conteúdo centralizado */}
        <div className="w-full max-w-7xl px-6 sm:px-10 lg:px-16 xl:px-20 py-24 space-y-32">
          {/* Serviços aprimorados */}
          <section
            id="inicio"
            className="relative text-center flex flex-col items-center justify-center"
          >
            <Title text1="Nossos Serviços de" text2="Desenvolvimento Web" />

            <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl">
              {[
                {
                  title: "Landing Pages",
                  desc: "Páginas modernas, rápidas e otimizadas para conversão.",
                  icon: <LayoutGrid size={48} strokeWidth={1.5} />,
                  gradient:
                    "from-[#FF6E5A] via-[#FF9966] to-[#FFB677]",
                  link: "https://wa.me/5585921743200?text=Oi!%20Quero%20criar%20uma%20landing%20page%20para%20meu%20negócio%20ou%20campanha.%20Gostaria%20de%20ver%20os%20modelos%20e%20valores!",
                },
                {
                  title: "Sites Institucionais",
                  desc: "Soluções profissionais para presença digital completa.",
                  icon: <Globe size={48} strokeWidth={1.5} />,
                  gradient:
                    "from-[#3F51B5] via-[#5A55AE] to-[#7C4DFF]",
                  link: "https://wa.me/5585921743200?text=Olá!%20Tenho%20interesse%20em%20criar%20um%20site%20institucional%20para%20minha%20empresa.%20Gostaria%20de%20saber%20mais%20sobre%20os%20planos%20e%20valores.%20Pode%20me%20ajudar?",
                },
                {
                  title: "E-commerce",
                  desc: "Monte sua loja virtual com design personalizado e seguro.",
                  icon: <ShoppingCart size={48} strokeWidth={1.5} />,
                  gradient:
                    "from-[#8E2DE2] via-[#4A00E0] to-[#6A00FF]",
                  link: "/ecommerce",
                },
              ].map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  {/* Fundo com gradiente + vidro */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-80 blur-3xl`}
                  ></div>

                  <div className="relative z-10 flex flex-col items-center text-center p-10 backdrop-blur-2xl bg-white/10 border border-white/20 rounded-3xl">
                    <motion.div
                      whileHover={{ rotate: 8, scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="text-white mb-6 drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]"
                    >
                      {service.icon}
                    </motion.div>

                    <h2 className="text-white font-extrabold text-2xl mb-3 tracking-wide">
                      {service.title}
                    </h2>

                    <p className="text-white/90 text-sm md:text-base mb-6 leading-relaxed">
                      {service.desc}
                    </p>

                    <motion.a
                      href={service.link}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 0 25px rgba(255,255,255,0.4)",
                      }}
                      className="inline-block px-8 py-3 font-semibold text-white border-2 border-white/80 rounded-full bg-white/10 hover:bg-white hover:text-black transition-all duration-300"
                    >
                      Fazer Orçamento →
                    </motion.a>
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
            className="py-20 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="max-w-6xl mx-auto px-4 space-y-12">
              <div>
                <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-2">
                  FAQ - Websites
                </h2>
                <p className="text-gray-400 text-lg lg:text-xl">
                  Perguntas frequentes sobre desenvolvimento de sites
                </p>
              </div>

              <div className="space-y-4 text-left">
                {[
                  {
                    q: "Qual é o tipo de site mais indicado para minha empresa?",
                    a: "Depende do objetivo: institucionais para presença digital, landing pages para campanhas e e-commerces para vendas.",
                  },
                  {
                    q: "Quanto tempo leva para criar um website?",
                    a: "Projetos simples levam de 2 a 4 semanas, enquanto e-commerces podem levar até 8 semanas.",
                  },
                  {
                    q: "O site será responsivo?",
                    a: "Sim! Todos os websites são totalmente responsivos para dispositivos móveis e desktops.",
                  },
                  {
                    q: "Vocês oferecem manutenção e suporte?",
                    a: "Sim! Oferecemos planos de manutenção contínuos com atualizações e suporte técnico.",
                  },
                ].map((item, i) => (
                  <details
                    key={i}
                    className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:bg-white/10"
                  >
                    <summary className="flex justify-between items-center font-semibold text-white text-lg group-open:text-[#7B6EF6]">
                      {item.q}
                      <span className="ml-4 transform transition-transform duration-300 group-open:rotate-180">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </summary>
                    <motion.p
                      className="mt-4 text-gray-300 text-base leading-relaxed"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      {item.a}
                    </motion.p>
                  </details>
                ))}
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default Websites;
