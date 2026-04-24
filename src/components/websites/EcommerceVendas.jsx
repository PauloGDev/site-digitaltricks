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
  Blocks,
  Database,
  MonitorSmartphone,
  Settings2,
} from "lucide-react";
import { assets } from "../../assets/assets";

const EcommerceVendas = ({ }) => {
  const beneficiosEcommerce = [
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

  const beneficiosSaas = [
    {
      icon: <Blocks className="w-5 h-5" />,
      title: "Produto escalável",
      desc: "Sistemas SaaS pensados para crescer com mais organização, recorrência e previsibilidade.",
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: "Painel e operação centralizada",
      desc: "Gestão de usuários, permissões, planos, dados e processos em uma estrutura única.",
    },
    {
      icon: <MonitorSmartphone className="w-5 h-5" />,
      title: "Experiência de produto",
      desc: "Interfaces projetadas para onboarding, retenção e uso recorrente do sistema.",
    },
    {
      icon: <Settings2 className="w-5 h-5" />,
      title: "Base para evolução contínua",
      desc: "Arquitetura preparada para novos módulos, automações, integrações e crescimento do produto.",
    },
  ];

  const diferenciais = [
    "Desenvolvimento personalizado, sem templates genéricos",
    "Checkout e fluxos pensados para reduzir fricção",
    "Integração com WhatsApp, Meta Ads, Analytics e ferramentas externas",
    "Design responsivo com foco em conversão e clareza operacional",
    "Estrutura preparada para SEO, tráfego pago e expansão",
    "Painel completo para pedidos, clientes, catálogo ou gestão de usuários",
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

  const blocosSaas = [
    {
      nome: "SaaS Starter",
      destaque: "Produto inicial validável",
      desc: "Ideal para tirar a ideia do papel com um MVP sólido, com estrutura clara e boa experiência base.",
      itens: [
        "Dashboard inicial e autenticação",
        "Cadastro de usuários e permissões",
        "Estrutura principal do produto",
        "UX/UI sob medida",
        "Base preparada para evolução",
      ],
    },
    {
      nome: "SaaS Growth",
      destaque: "Para evoluir e operar",
      desc: "Para negócios que já validaram demanda e precisam organizar melhor operação, retenção e crescimento.",
      itens: [
        "Tudo do Starter",
        "Módulos e fluxos avançados",
        "Integrações externas",
        "Melhorias de onboarding e retenção",
        "Painel administrativo mais robusto",
      ],
    },
    {
      nome: "SaaS Premium",
      destaque: "Produto com visão de escala",
      desc: "Estrutura mais completa para plataformas que querem evoluir produto, automação e monetização recorrente.",
      itens: [
        "Tudo do Growth",
        "Arquitetura mais avançada",
        "Múltiplos perfis de acesso",
        "Automação e relatórios",
        "Base para billing, expansão e novos módulos",
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

  const ecommerceImage = assets.saas1;
  const saasImage = assets.saas2;

  return (
    <section className="relative bg-black text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(123,97,255,0.10),transparent_28%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-20 py-28 md:py-36">
        {/* Hero */}
        <motion.div
          className="grid lg:grid-cols-12 gap-12 xl:gap-16 items-center mb-20 md:mb-24"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
        >
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-white/45">
              <span className="w-8 h-px bg-[#7B61FF]" />
              E-commerce & SaaS
            </span>

            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold leading-[0.95] tracking-tight">
              Estruture produtos
              <br />
              digitais com
              <span className="text-[#7B61FF]"> mais clareza</span>
            </h1>

            <p className="mt-6 max-w-xl text-white/60 text-base md:text-lg leading-relaxed">
              Desenvolvemos e-commerces e sistemas SaaS com foco em performance,
              experiência, clareza operacional e valor percebido. Mais do que
              interfaces bonitas, construímos estruturas preparadas para crescer.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://wa.me/5585921743200?text=Olá!%20Quero%20falar%20sobre%20e-commerce%20ou%20sistema%20SaaS."
                className="inline-flex items-center gap-2 bg-[#7B61FF] text-white px-6 py-3 text-sm font-medium hover:bg-[#6A50F5] transition-colors"
              >
                Falar sobre meu projeto
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#planos"
                className="px-6 py-3 text-sm font-medium border border-white/10 text-white/80 hover:bg-white/[0.04] transition-colors"
              >
                Ver estruturas
              </a>
            </div>
          </div>

    <div className="lg:col-span-7 grid grid-cols-1 gap-8 max-w-2xl">

      {/* E-commerce */}
      <div className="relative border border-white/10 bg-[#0A0A0A] overflow-hidden p-6 md:p-8">

        {/* Grid */}
        <div className="absolute inset-0 opacity-20
          bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),
              linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] 
          bg-[size:32px_32px]"
        />

        {/* Imagem grande */}
        <div className="relative w-full">
          <img
            src={assets.saas1}
            alt="E-commerce"
            className="w-full object-contain"
          />
        </div>

        {/* Label */}
        <div className="mt-6 border-t border-white/10 pt-4">
          <span className="block text-[10px] uppercase tracking-[0.22em] text-white/40">
            E-commerce
          </span>
          <p className="mt-2 text-sm text-white/80">
            Catálogo, checkout e operação com foco em conversão.
          </p>
        </div>

      </div>

      {/* SaaS */}
      <div className="relative border border-white/10 bg-[#0A0A0A] overflow-hidden p-6 md:p-8">

        <div className="relative">
          <img
            src={assets.saas2}
            alt="SaaS"
            className="w-full object-contain"
          />
        </div>

        <div className="mt-6 border-t border-white/10 pt-4">
          <span className="block text-[10px] uppercase tracking-[0.22em] text-white/40">
            SaaS Platform
          </span>
          <p className="mt-2 text-sm text-white/80">
            Dashboard, gestão e recorrência em estrutura escalável.
          </p>
        </div>

      </div>

    </div>
        </motion.div>

        {/* Bloco E-commerce */}
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
                E-commerce
              </span>

              <h2 className="mt-6 text-3xl md:text-4xl font-semibold leading-[1] tracking-tight">
                Lojas preparadas para
                <span className="text-[#7B61FF]"> vender melhor</span>
              </h2>
            </div>

            <div className="lg:col-span-7 flex items-end">
              <p className="max-w-2xl text-white/60 leading-relaxed">
                Estruturamos lojas virtuais com foco em conversão, clareza de
                navegação, operação mais segura e base para aquisição de tráfego.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {beneficiosEcommerce.map((b, i) => (
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
        </motion.div>

        {/* Bloco SaaS */}
        <motion.div
          className="mb-20 md:mb-24 border-t border-white/10 pt-12 md:pt-14"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-12 gap-10 mb-12">
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-white/45">
                <span className="w-8 h-px bg-[#7B61FF]" />
                Sistemas SaaS
              </span>

              <h2 className="mt-6 text-3xl md:text-4xl font-semibold leading-[1] tracking-tight">
                Produtos digitais com
                <span className="text-[#7B61FF]"> lógica de evolução</span>
              </h2>
            </div>

            <div className="lg:col-span-7 flex items-end">
              <p className="max-w-2xl text-white/60 leading-relaxed">
                Desenvolvemos sistemas SaaS para negócios que precisam organizar
                processos, vender assinaturas, centralizar operação e escalar um
                produto digital com mais consistência.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
            {beneficiosSaas.map((b, i) => (
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
        </motion.div>

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
              <span className="text-[#7B61FF]"> pensada para crescer</span>
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

        {/* Planos */}
        <motion.div
          id="planos"
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
                Estruturas
              </span>

              <h2 className="mt-6 text-3xl md:text-4xl font-semibold leading-[1] tracking-tight">
                Soluções para diferentes
                <span className="text-[#7B61FF]"> estágios de produto</span>
              </h2>
            </div>

            <div className="lg:col-span-7 flex items-end">
              <p className="max-w-2xl text-white/60 leading-relaxed">
                Escolha a estrutura mais adequada para seu momento atual, seja
                para iniciar uma operação digital, escalar vendas ou evoluir um
                sistema recorrente.
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

                <div className="mt-4 text-2xl font-semibold tracking-tight text-[#7B61FF]">
                  A Consultar
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

        {/* Bloco SaaS estrutura */}
        <motion.div
          className="mb-20 md:mb-24 border-t border-white/10 pt-12 md:pt-14"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-12 gap-10 mb-12">
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-white/45">
                <span className="w-8 h-px bg-[#7B61FF]" />
                SaaS
              </span>

              <h2 className="mt-6 text-3xl md:text-4xl font-semibold leading-[1] tracking-tight">
                Estruturas para criar e evoluir
                <span className="text-[#7B61FF]"> sistemas recorrentes</span>
              </h2>
            </div>

            <div className="lg:col-span-7 flex items-end">
              <p className="max-w-2xl text-white/60 leading-relaxed">
                Desenvolvemos sistemas SaaS sob medida para nichos, operações internas
                e produtos digitais que precisam de lógica de assinatura, gestão e expansão.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {blocosSaas.map((plano, i) => (
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
                Hospedagem, manutenção e
                <span className="text-[#7B61FF]"> suporte contínuo</span>
              </h2>
            </div>

            <div className="lg:col-span-7 flex items-end">
              <p className="max-w-2xl text-white/60 leading-relaxed">
                Depois do lançamento, a operação precisa seguir estável, segura e evoluindo.
                Os planos abaixo cobrem diferentes níveis de suporte para lojas e sistemas.
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
                Estruture seu e-commerce ou SaaS
                <span className="text-[#7B61FF]"> com mais clareza</span>
              </h2>

              <p className="mt-4 max-w-2xl text-white/60 leading-relaxed">
                Podemos definir a melhor estrutura para sua operação, validar prioridades
                e construir uma base mais forte para vendas, recorrência e crescimento.
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <a
                href="https://wa.me/5585921743200?text=Olá!%20Quero%20falar%20sobre%20um%20e-commerce%20ou%20sistema%20SaaS."
                className="inline-flex items-center gap-2 bg-[#7B61FF] text-white px-6 py-3 text-sm font-medium hover:bg-[#6A50F5] transition-colors"
              >
                Falar sobre meu projeto
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