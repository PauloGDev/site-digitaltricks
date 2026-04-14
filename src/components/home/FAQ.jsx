import React, { useState } from 'react';
import { motion } from "framer-motion";


const FAQ = () => {
  const perguntas = [
    {
      q: "Quanto tempo leva para desenvolver um site?",
      a: "Depende da complexidade do projeto, mas geralmente entre 7 a 21 dias úteis."
    },
    {
      q: "Vocês oferecem manutenção após a entrega?",
      a: "Sim! Oferecemos planos de suporte e manutenção contínua."
    },
    {
      q: "Posso solicitar alterações no design?",
      a: "Com certeza. Todo o processo é colaborativo, ajustado conforme seu feedback."
    },
    {
      q: "O site é compatível com celular e tablet?",
      a: "Sim. Todos os sites são 100% responsivos e otimizados para qualquer tela."
    }
  ];

  const [ativo, setAtivo] = useState(null);

  return (
    <section id="faq" className="my-20">
      {/* FAQ Websites */}
<motion.section
  className="py-20 relative"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
    {/* Título */}
    <div className="text-center">
      <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-2">
        FAQ - Websites
      </h2>
      <p className="text-gray-400 text-lg lg:text-xl">
        Perguntas frequentes sobre desenvolvimento de sites
      </p>
    </div>

    {/* Perguntas */}
    <div className="space-y-4">
      {[
        {
          q: "Qual é o tipo de site mais indicado para minha empresa?",
          a: "Depende do objetivo: sites institucionais são ideais para apresentar sua empresa completa; landing pages funcionam para campanhas de conversão; e lojas virtuais são para vendas online."
        },
        {
          q: "Quanto tempo leva para criar um website?",
          a: "O prazo varia conforme a complexidade. Um site institucional simples leva de 2 a 4 semanas, enquanto lojas virtuais e projetos mais complexos podem levar até 8 semanas."
        },
        {
          q: "O site será responsivo?",
          a: "Sim! Todos os websites são totalmente responsivos, funcionando perfeitamente em smartphones, tablets e desktops."
        },
        {
          q: "Vocês oferecem manutenção e suporte?",
          a: "Sim! Temos planos de manutenção que incluem atualizações, correções de bugs, segurança e otimizações contínuas."
        },
        {
          q: "O site será otimizado para SEO?",
          a: "Todos os sites recebem otimização inicial de SEO para motores de busca, garantindo que clientes encontrem sua empresa com mais facilidade."
        },
        {
          q: "Posso atualizar o conteúdo do site sozinho?",
          a: "Sim! Fornecemos sistemas de gerenciamento de conteúdo (CMS) intuitivos que permitem atualizar textos, imagens e produtos sem depender da equipe de desenvolvimento."
        },
        {
          q: "Vocês integram redes sociais e ferramentas externas?",
          a: "Sim! Integramos redes sociais, formulários, sistemas de pagamento, Google Analytics e outras ferramentas essenciais para o seu negócio."
        },
        {
          q: "O design do site é personalizado?",
          a: "Sim! Criamos websites totalmente personalizados, com design moderno, identidade visual da marca e foco na experiência do usuário e conversão."
        },
      ].map((item, i) => (
        <details
          key={i}
          className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:bg-white/10"
        >
          <summary className="flex justify-between items-center font-semibold text-white text-lg lg:text-xl group-open:text-[#7B6EF6]">
            {item.q}
            <span className="ml-4 transform transition-transform duration-300 group-open:rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </summary>
          <motion.p
            className="mt-4 text-gray-300 text-base lg:text-lg leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {item.a}
          </motion.p>
        </details>
      ))}
    </div>
  </div>
</motion.section>

    </section>
  );
};

export default FAQ;
