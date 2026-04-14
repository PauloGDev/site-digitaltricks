import React from "react";
import { motion } from "framer-motion";
import {
  ShoppingBag,
  Zap,
  CreditCard,
  TrendingUp,
  ShieldCheck,
  Globe2,
  Trophy,
  Users,
  ArrowRight,
  Rocket,
  BarChart3,
  HeartHandshake,
  CheckCircle2,
} from "lucide-react";
import NeonButton from "../NeonButton";

const EcommerceVendas = () => {
  const beneficios = [
    {
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      title: "Mais Vendas, Menos Esforço",
      desc: "Desenvolvemos e-commerces que convertem visitantes em compradores — com design estratégico e jornada de compra otimizada.",
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: "Velocidade Impressionante",
      desc: "Sites que carregam em segundos. Performance máxima para conquistar o cliente antes da concorrência.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-white" />,
      title: "Segurança de Alto Nível",
      desc: "Criptografia SSL, antifraude e infraestrutura em nuvem para manter seus dados e transações 100% seguras.",
    },
    {
      icon: <CreditCard className="w-8 h-8 text-white" />,
      title: "Pagamentos Integrados",
      desc: "Aceite cartões, Pix, boleto e carteiras digitais — sem complicação. Tudo automatizado e transparente.",
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-white" />,
      title: "Suporte e Parceria Real",
      desc: "Você não fica sozinho: suporte técnico, manutenção e acompanhamento de resultados contínuos.",
    },
    {
      icon: <Globe2 className="w-8 h-8 text-white" />,
      title: "SEO e Marketing Digital",
      desc: "E-commerce otimizado para o Google, com estrutura perfeita para anúncios e tráfego pago.",
    },
  ];

  const diferenciais = [
    "Desenvolvimento 100% personalizado — sem templates prontos",
    "Otimização avançada para Google (SEO Técnico e de Conteúdo)",
    "Design responsivo e adaptado a todos os dispositivos",
    "Integração com WhatsApp, Instagram, Meta Ads e Google Analytics",
    "Checkout otimizado para máxima conversão",
    "Hospedagem em servidores de alto desempenho (CDN Global)",
    "Painel de controle completo para pedidos, estoque e clientes",
    "Implementação de estratégias de remarketing e pixel de conversão",
  ];

  const resultados = [
    { icon: <BarChart3 className="w-10 h-10 text-white" />, numero: "+200%", titulo: "Aumento médio nas vendas" },
    { icon: <Users className="w-10 h-10 text-white" />, numero: "+80", titulo: "Clientes satisfeitos" },
    { icon: <Trophy className="w-10 h-10 text-white" />, numero: "100%", titulo: "Projetos entregues com sucesso" },
    { icon: <Globe2 className="w-10 h-10 text-white" />, numero: "Todo o Brasil", titulo: "Atendimento nacional" },
  ];

const planosEcommerce = [
  {
    nome: "E-commerce Starter",
    preco: "R$ 4.500",
    destaque: "Ideal para começar com o pé direito",
    desc: "Perfeito para empreendedores que desejam dar os primeiros passos no digital com uma loja segura, moderna e pronta para vender.",
    itens: [
      "Loja virtual completa, rápida e responsiva",
      "Design profissional com foco em conversão",
      "Cadastro e gerenciamento de produtos e categorias",
      "Carrinho de compras e cálculo automático de frete",
      "Área do cliente com histórico de pedidos",
      "Integração com PIX, boleto e cartão de crédito",
      "Painel administrativo intuitivo e completo",
      "Certificado SSL e segurança avançada",
    ],
  },
  {
    nome: "E-commerce Pro",
    preco: "R$ 6.900",
    destaque: "Performance e crescimento acelerado",
    desc: "Para empresas que querem escalar vendas, automatizar processos e dominar o marketing digital com alto desempenho.",
    itens: [
      "Tudo do Starter +",
      "Checkout otimizado para conversão máxima",
      "Integração com transportadoras e gateways avançados",
      "SEO técnico e de conteúdo (Google-ready)",
      "Design exclusivo e experiência do usuário aprimorada (UX/UI)",
      "Integração com Google Analytics, Meta Ads e Pixel",
      "Painel completo com métricas e relatórios de vendas",
    ],
  },
  {
    nome: "E-commerce Premium",
    preco: "R$ 9.900",
    destaque: "A escolha de quem quer dominar o digital",
    desc: "Solução completa para marcas que buscam autoridade, automação e resultados contínuos com tecnologia e estratégia de ponta.",
    itens: [
      "Tudo do Pro +",
      "Consultoria estratégica de marketing e vendas mensal",
      "Integração com CRM, ERP e marketplaces (como Mercado Livre e Amazon)",
      "Automação de remarketing e pixel de conversão",
      "Hospedagem premium com CDN global e monitoramento 24h",
      "Otimização contínua de velocidade e SEO"
    ],
  },
];

const planosHospedagem = [
  {
    nome: "Loja Starter",
    preco: "R$ 150/mês",
    desc: "Perfeita para quem está começando e precisa de uma hospedagem segura e estável para sua loja online.",
    itens: [
      "Hospedagem dedicada e rápida",
      "Backups automáticos diários",
      "Certificado SSL incluso (HTTPS seguro)",
      "Suporte técnico básico em horário comercial",
      "Atualizações de segurança e plugins essenciais",
    ],
  },
  {
    nome: "Loja Pro",
    preco: "R$ 290/mês",
    desc: "Para quem já vende com frequência e quer mais tranquilidade, automação e suporte ampliado.",
    itens: [
      "Tudo do Starter +",
      "Monitoramento de performance",
      "Atualizações semanais automáticas",
      "Suporte técnico até 22h",
      "2 atualizações de conteúdo mensal (produtos, banners ou promoções)",
    ],
  },
  {
    nome: "Loja Business",
    preco: "R$ 490/mês",
    desc: "Ideal para empresas em crescimento que precisam de segurança, velocidade e suporte premium.",
    itens: [
      "Tudo do Pro +",
      "Backups em tempo real",
      "Suporte prioritário via WhatsApp e e-mail",
      "Até 4 atualizações mensais de conteúdo",
      "Relatórios mensais de vendas, SEO e desempenho",
    ],
  },
  {
    nome: "Loja Enterprise",
    preco: "R$ 850/mês",
    desc: "A solução completa para marcas consolidadas que querem máxima performance e acompanhamento estratégico.",
    itens: [
      "Tudo do Business +",
      "Consultoria estratégica mensal de marketing e performance",
      "Até 6 atualizações de conteúdo por mês",
      "Integrações personalizadas (CRM, ERP e marketplaces)",
      "Otimização contínua de velocidade e SEO",
    ],
  },
];

  return (
    <section className="relative py-28 px-6 sm:px-12 bg-gradient-to-br from-[#0B0B16] via-[#14142E] to-[#1A1A40] overflow-hidden rounded-3xl">

      {/* Fundo com brilho dinâmico */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(123,110,246,0.15),transparent_70%)]"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />

      {/* Cabeçalho */}
      <motion.div
        className="text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="p-6 inline-block rounded-full bg-gradient-to-r from-[#7B6EF6] to-[#5146D9] shadow-lg shadow-[#7B6EF6]/40">
          <ShoppingBag className="w-12 h-12 text-white" strokeWidth={2.5} />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-6 leading-tight">
          Crie seu{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B6EF6] to-[#5146D9]">
            E-commerce Profissional
          </span>{" "}
          e comece a vender todos os dias
        </h1>
        <p className="mt-5 max-w-3xl mx-auto text-gray-300 text-lg">
          Transformamos ideias em lojas virtuais lucrativas. Nosso e-commerce é rápido, seguro,
          otimizado para conversão e pronto para escalar suas vendas online.
        </p>
      </motion.div>

      {/* Benefícios */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto relative z-10 mb-20">
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
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-full bg-white/20">{b.icon}</div>
              <h3 className="text-xl font-semibold">{b.title}</h3>
            </div>
            <p className="text-white/90 text-sm">{b.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Planos de E-commerce */}
      <motion.div
        className="max-w-6xl mx-auto mb-24 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-white mb-10">Planos de E-commerce</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {planosEcommerce.map((plano, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 border border-white/10 rounded-2xl p-8 text-white text-left shadow-lg hover:shadow-[#7B6EF6]/30 transition-all duration-500"
            >
              <h3 className="text-2xl font-bold mb-2">{plano.nome}</h3>
              <p className="text-gray-300 mb-6">{plano.desc}</p>
              <ul className="space-y-2 text-sm">
                {plano.itens.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 min-w-4 text-[#7B6EF6] mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Planos de Hospedagem */}
      <motion.div
        className="max-w-6xl mx-auto mb-24 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-white mb-10">Planos de Hospedagem e Manutenção</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {planosHospedagem.map((plano, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 border border-white/10 rounded-2xl p-8 text-white text-left shadow-lg hover:shadow-[#7B6EF6]/30 transition-all duration-500"
            >
              <h3 className="text-xl font-bold mb-2">{plano.nome}</h3>
              <ul className="space-y-2 text-sm">
                {plano.itens.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#7B6EF6] min-w-4 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Final */}
      <div className="text-center relative z-10">
        <NeonButton
          text="Quero Meu E-commerce Agora 🚀"
          href="https://wa.me/5585921743200?text=Olá!%20Quero%20lançar%20minha%20loja%20virtual%20e%20preciso%20de%20ajuda%20para%20escolher%20o%20melhor%20plano.%20Podemos%20conversar?" 
          color="#FD3A69"
          icon={ArrowRight}
        />
        <p className="mt-6 text-sm text-gray-400">
          Atendimento personalizado • Entrega rápida • Garantia de satisfação
        </p>
      </div>
    </section>
  );
};

export default EcommerceVendas;
