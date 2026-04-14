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
  BarChart3,
  HeartHandshake,
  CheckCircle2,
} from "lucide-react";

const EcommerceVendas = () => {
  const beneficios = [
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Mais vendas com estrutura",
      desc: "Lojas pensadas para transformar tráfego em compra com mais consistência e menos atrito na jornada.",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Performance real",
      desc: "Carregamento rápido, navegação fluida e experiência sólida em qualquer dispositivo.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Segurança confiável",
      desc: "Estrutura preparada para proteger dados, transações e estabilidade operacional.",
    },
    {
      icon: <CreditCard className="w-5 h-5" />,
      title: "Pagamentos integrados",
      desc: "Pix, boleto, cartão e carteiras digitais com fluxo mais claro e automatizado.",
    },
    {
      icon: <HeartHandshake className="w-5 h-5" />,
      title: "Suporte próximo",
      desc: "Acompanhamento técnico e continuidade para a loja evoluir com segurança.",
    },
    {
      icon: <Globe2 className="w-5 h-5" />,
      title: "Base para marketing",
      desc: "Estrutura pronta para SEO, campanhas, métricas e crescimento com mídia paga.",
    },
  ];

  const diferenciais = [
    "Desenvolvimento personalizado, sem templates genéricos",
    "Checkout pensado para reduzir fricção",
    "Integração com WhatsApp, Meta Ads e Analytics",
    "Design responsivo com foco em conversão",
    "Estrutura preparada para SEO e tráfego pago",
    "Painel completo para pedidos, clientes e catálogo",
  ];

  const resultados = [
    {
      icon: <BarChart3 className="w-5 h-5" />,
      numero: "+200%",
      titulo: "Potencial de crescimento",
    },
    {
      icon: <Users className="w-5 h-5" />,
      numero: "+80",
      titulo: "Clientes atendidos",
    },
    {
      icon: <Trophy className="w-5 h-5" />,
      numero: "100%",
      titulo: "Projetos entregues",
    },
    {
      icon: <Globe2 className="w-5 h-5" />,
      numero: "Brasil",
      titulo: "Atendimento nacional",
    },
  ];

  const planosEcommerce = [
    {
      nome: "E-commerce Starter",
      preco: "R$ 4.500",
      destaque: "Para começar com estrutura",
      desc: "Ideal para negócios que querem iniciar no digital com uma loja profissional, segura e pronta para vender.",
      itens: [
        "Loja virtual completa e responsiva",
        "Design profissional com foco em conversão",
        "Cadastro de produtos e categorias",
        "Carrinho e cálculo de frete",
        "Área do cliente com histórico de pedidos",
        "Integração com Pix, boleto e cartão",
        "Painel administrativo completo",
        "Certificado SSL e segurança base",
      ],
    },
    {
      nome: "E-commerce Pro",
      preco: "R$ 6.900",
      destaque: "Para crescer com mais performance",
      desc: "Para empresas que querem escalar vendas, melhorar operação e fortalecer a base de marketing.",
      itens: [
        "Tudo do Starter",
        "Checkout otimizado para conversão",
        "Integração com transportadoras e gateways avançados",
        "SEO técnico e estrutural",
        "UX/UI mais refinado",
        "Integração com Google Analytics e Meta Pixel",
        "Relatórios e métricas de vendas",
      ],
    },
    {
      nome: "E-commerce Premium",
      preco: "R$ 9.900",
      destaque: "Para marcas com ambição maior",
      desc: "Solução mais robusta para operações que buscam autoridade, automação e crescimento consistente.",
      itens: [
        "Tudo do Pro",
        "Consultoria estratégica mensal",
        "Integração com CRM, ERP e marketplaces",
        "Automação de remarketing e pixels",
        "Hospedagem premium com CDN global",
        "Otimização contínua de velocidade e SEO",
      ],
    },
  ];

  const planosHospedagem = [
    {
      nome: "Loja Starter",
      preco: "R$ 150/mês",
      desc: "Hospedagem estável e segura para operações em fase inicial.",
      itens: [
        "Hospedagem rápida",
        "Backups diários",
        "SSL incluso",
        "Suporte em horário comercial",
        "Atualizações essenciais",
      ],
    },
    {
      nome: "Loja Pro",
      preco: "R$ 290/mês",
      desc: "Mais tranquilidade, automação e suporte ampliado.",
      itens: [
        "Tudo do Starter",
        "Monitoramento de performance",
        "Atualizações semanais",
        "Suporte até 22h",
        "2 atualizações mensais de conteúdo",
      ],
    },
    {
      nome: "Loja Business",
      preco: "R$ 490/mês",
      desc: "Para empresas em crescimento que precisam de mais velocidade e acompanhamento.",
      itens: [
        "Tudo do Pro",
        "Backups em tempo real",
        "Suporte prioritário",
        "Até 4 atualizações mensais",
        "Relatórios de desempenho",
      ],
    },
    {
      nome: "Loja Enterprise",
      preco: "R$ 850/mês",
      desc: "Acompanhamento mais completo para marcas com operação mais exigente.",
      itens: [
        "Tudo do Business",
        "Consultoria estratégica mensal",
        "Até 6 atualizações por mês",
        "Integrações personalizadas",
        "Otimização contínua",
      ],
    },
  ];

  return (
    <section className="relative bg-black text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(123,97,255,0.10),transparent_28%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-20 py-28 md:py-36">
        {/* Hero */}
        <motion.div
          className="grid lg:grid-cols-12 gap-10 mb-20 md:mb-24"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
        >
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-white/45">
              <span className="w-8 h-px bg-[#7B61FF]" />
              E-commerce
            </span>

            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold leading-[0.95] tracking-tight">
              Estruture sua loja
              <br />
              para vender com
              <span className="text-[#7B61FF]"> mais consistência</span>
            </h1>
          </div>

          <div className="lg:col-span-7 flex items-end">
            <p className="max-w-2xl text-white/60 text-base md:text-lg leading-relaxed">
              Desenvolvemos e-commerces com foco em performance, conversão,
              clareza operacional e percepção premium. Mais do que uma loja
              bonita, uma estrutura preparada para crescer.
            </p>
          </div>
        </motion.div>

        {/* Benefícios */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 mb-20 md:mb-24">
          {beneficios.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="border border-white/10 bg-[#0A0A0A] p-7 md:p-8 hover:border-white/20 transition-colors duration-300"
            >
              <div className="w-11 h-11 border border-white/10 bg-white/[0.03] flex items-center justify-center text-[#7B61FF] mb-5">
                {b.icon}
              </div>

              <h3 className="text-xl font-medium tracking-tight text-white">
                {b.title}
              </h3>

              <p className="mt-3 text-white/58 leading-relaxed">
                {b.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Diferenciais + Resultados */}
        <div className="grid lg:grid-cols-12 gap-10 mb-20 md:mb-24">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-white/45">
              <span className="w-8 h-px bg-[#7B61FF]" />
              Diferenciais
            </span>

            <h2 className="mt-6 text-3xl md:text-4xl font-semibold leading-[1] tracking-tight">
              Estrutura comercial e técnica
              <span className="text-[#7B61FF]"> pensada para vender</span>
            </h2>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {diferenciais.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 border-t border-white/10 pt-4"
                >
                  <CheckCircle2 className="w-4 h-4 min-w-4 text-[#7B61FF] mt-1" />
                  <p className="text-white/65 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            viewport={{ once: true }}
          >
            <div className="border border-white/10 bg-[#0A0A0A] p-8 md:p-10">
              <span className="text-[11px] uppercase tracking-[0.24em] text-white/35">
                Indicadores
              </span>

              <div className="mt-6 grid sm:grid-cols-2 gap-6">
                {resultados.map((item, i) => (
                  <div key={i} className="border-t border-white/10 pt-4">
                    <div className="w-10 h-10 border border-white/10 bg-white/[0.03] flex items-center justify-center text-[#7B61FF] mb-4">
                      {item.icon}
                    </div>
                    <div className="text-3xl font-semibold tracking-tight text-[#7B61FF]">
                      {item.numero}
                    </div>
                    <p className="mt-2 text-white/65 leading-relaxed">
                      {item.titulo}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Planos Ecommerce */}
        <motion.div
          className="mb-20 md:mb-24"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-12 gap-10 mb-12">
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-white/45">
                <span className="w-8 h-px bg-[#7B61FF]" />
                Planos
              </span>

              <h2 className="mt-6 text-3xl md:text-4xl font-semibold leading-[1] tracking-tight">
                Estruturas para diferentes
                <span className="text-[#7B61FF]"> estágios de operação</span>
              </h2>
            </div>

            <div className="lg:col-span-7 flex items-end">
              <p className="max-w-2xl text-white/60 leading-relaxed">
                Escolha a base mais adequada para o momento da sua marca e evolua
                com uma estrutura capaz de acompanhar seu crescimento.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {planosEcommerce.map((plano, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                viewport={{ once: true }}
                className="border border-white/10 bg-[#0A0A0A] p-8 flex flex-col"
              >
                <span className="text-[11px] uppercase tracking-[0.22em] text-white/35">
                  {plano.destaque}
                </span>

                <h3 className="mt-4 text-2xl font-medium tracking-tight text-white">
                  {plano.nome}
                </h3>

                <div className="mt-4 text-3xl font-semibold tracking-tight text-[#7B61FF]">
                  {plano.preco}
                </div>

                <p className="mt-4 text-white/60 leading-relaxed">
                  {plano.desc}
                </p>

                <div className="mt-8 space-y-3">
                  {plano.itens.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 min-w-4 text-[#7B61FF] mt-1" />
                      <span className="text-white/70 leading-relaxed text-sm">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Hospedagem */}
        <motion.div
          className="mb-20 md:mb-24"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-12 gap-10 mb-12">
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-white/45">
                <span className="w-8 h-px bg-[#7B61FF]" />
                Continuidade
              </span>

              <h2 className="mt-6 text-3xl md:text-4xl font-semibold leading-[1] tracking-tight">
                Hospedagem e manutenção
                <span className="text-[#7B61FF]"> com suporte contínuo</span>
              </h2>
            </div>

            <div className="lg:col-span-7 flex items-end">
              <p className="max-w-2xl text-white/60 leading-relaxed">
                Depois do lançamento, a operação precisa seguir estável, segura
                e evoluindo. Os planos abaixo cobrem diferentes níveis de suporte.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
            {planosHospedagem.map((plano, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="border border-white/10 bg-[#0A0A0A] p-7 flex flex-col"
              >
                <h3 className="text-xl font-medium tracking-tight text-white">
                  {plano.nome}
                </h3>

                <div className="mt-4 text-2xl font-semibold tracking-tight text-[#7B61FF]">
                  {plano.preco}
                </div>

                <p className="mt-4 text-white/60 leading-relaxed">
                  {plano.desc}
                </p>

                <div className="mt-6 space-y-3">
                  {plano.itens.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 min-w-4 text-[#7B61FF] mt-1" />
                      <span className="text-white/70 leading-relaxed text-sm">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="border-t border-white/10 pt-10 md:pt-12"
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

              <h2 className="mt-4 text-3xl md:text-4xl font-semibold leading-[1] tracking-tight text-white">
                Estruture sua operação digital
                <span className="text-[#7B61FF]"> com mais clareza</span>
              </h2>

              <p className="mt-4 max-w-2xl text-white/60 leading-relaxed">
                Escolha o plano mais adequado, valide sua operação e lance uma
                loja mais preparada para vender com constância.
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <a
                href="https://wa.me/5585921743200?text=Olá!%20Quero%20lançar%20minha%20loja%20virtual%20e%20preciso%20de%20ajuda%20para%20escolher%20o%20melhor%20plano.%20Podemos%20conversar?"
                className="inline-flex items-center gap-2 bg-[#7B61FF] text-white px-6 py-3 text-sm font-medium hover:bg-[#6A50F5] transition-colors"
              >
                Falar sobre meu e-commerce
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EcommerceVendas;