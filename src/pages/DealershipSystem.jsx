import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CarFront,
  ChartNoAxesCombined,
  Check,
  Handshake,
  History,
  MessageCircle,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import CTASection from "../components/CTASection";
import DealershipDashboard from "../components/DealershipDashboard";
import FAQList from "../components/FAQList";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import Seo from "../components/Seo";
import { managementFlow, managementModules, systemFaqs } from "../data/automotiveData";

const icons = { MessageCircle, CarFront, Handshake, Users, BadgeCheck, ChartNoAxesCombined, Building2, History };

const DealershipSystem = () => (
  <>
    <Seo title="Sistema para concessionárias" description="Sistema de gestão para concessionárias conectado a WhatsApp, estoque, clientes, vendas, funcionários e indicadores." path="/sistema-concessionarias" />

    <main className="overflow-hidden bg-[#f7f6f9] text-[#17151d]">
      <section className="relative overflow-hidden bg-[#111016] pb-16 pt-32 text-white sm:pb-24 sm:pt-36">
        <div className="grid-surface pointer-events-none absolute inset-0 opacity-35" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-[34rem] w-[48rem] -translate-x-1/2 rounded-full bg-violet-600/25 blur-[140px]" />
        <div className="page-shell relative">
          <Reveal className="mx-auto max-w-5xl text-center">
            <div className="flex justify-center"><span className="inline-flex items-center rounded-full border border-violet-300/20 bg-violet-400/10 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-violet-200">Sistema para concessionárias</span></div>
            <h1 className="mt-7 text-balance text-5xl font-semibold leading-[0.93] tracking-[-0.065em] sm:text-7xl lg:text-[6rem]">Do primeiro contato à venda, <span className="text-violet-300">tudo na mesma operação.</span></h1>
            <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-white/60 sm:text-lg">WhatsApp, estoque, clientes, propostas, vendas, funcionários e indicadores conectados para a concessionária enxergar o caminho completo de cada oportunidade.</p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link to="/diagnostico?interesse=sistema" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#17151d]">Solicitar demonstração <ArrowRight className="h-4 w-4" /></Link>
              <a href="#modulos" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white">Ver módulos</a>
            </div>
          </Reveal>
          <Reveal delay={0.08} className="mx-auto mt-14 max-w-7xl"><DealershipDashboard /></Reveal>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="page-shell grid gap-12 lg:grid-cols-12 lg:items-start">
          <Reveal className="lg:col-span-5"><SectionHeading eyebrow="O problema" title="O lead chega rápido. A informação se perde no caminho." description="Quando conversas, planilhas, estoque e equipe não se comunicam, a gestão não consegue distinguir interesse de oportunidade — nem descobrir por que uma venda foi perdida." /></Reveal>
          <div className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
            {[
              "Conversas presas no WhatsApp de cada vendedor",
              "Veículos publicados com dados diferentes",
              "Follow-ups que dependem da memória da equipe",
              "Gestores sem visão do funil em tempo real",
              "Campanhas avaliadas somente pela quantidade de leads",
              "Clientes sem histórico consolidado",
            ].map((item, index) => (
              <Reveal key={item} delay={index * 0.035}><div className="flex h-full min-h-32 flex-col justify-between rounded-2xl bg-[#f2eff8] p-5"><span className="text-xs font-semibold text-violet-700">{String(index + 1).padStart(2, "0")}</span><p className="mt-8 text-sm font-medium leading-6">{item}</p></div></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="modulos" className="section-space bg-[#eae8ef]">
        <div className="page-shell">
          <Reveal><SectionHeading eyebrow="Módulos conectados" title="Uma base única para movimentar a concessionária." description="O sistema acompanha a operação comercial sem separar cliente, veículo e atendimento em ferramentas que não se conversam." className="max-w-5xl" /></Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {managementModules.map((module, index) => {
              const Icon = icons[module.icon];
              const highlighted = index === 0 || index === 5;
              return (
                <Reveal key={module.title} delay={index * 0.035}>
                  <article className={`h-full min-h-[20rem] rounded-[1.6rem] p-7 ${highlighted ? "bg-[#17151d] text-white" : "border border-black/[0.08] bg-white"}`}>
                    <span className={`grid h-11 w-11 place-items-center rounded-xl ${highlighted ? "bg-violet-500/20 text-violet-200" : "bg-[#eee9ff] text-violet-700"}`}><Icon className="h-5 w-5" /></span>
                    <p className={`mt-10 text-[0.6rem] font-semibold uppercase tracking-[0.17em] ${highlighted ? "text-white/30" : "text-black/30"}`}>Módulo {String(index + 1).padStart(2, "0")}</p>
                    <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em]">{module.title}</h3>
                    <p className={`mt-4 text-sm leading-7 ${highlighted ? "text-white/50" : "text-[#68626e]"}`}>{module.description}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-space bg-[#17151d] text-white">
        <div className="page-shell">
          <Reveal className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7"><SectionHeading eyebrow="Jornada conectada" title="O sistema acompanha o que a campanha começou." dark /></div>
            <p className="max-w-xl text-base leading-8 text-white/50 lg:col-span-5">O marketing gera interesse. A operação registra atendimento, veículo, proposta e desfecho. Assim, a concessionária aprende com o caminho inteiro.</p>
          </Reveal>
          <div className="mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {managementFlow.map(([number, title, description], index) => (
              <Reveal key={number} delay={index * 0.04}>
                <article className="relative min-h-56 overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-7">
                  <span className="text-xs font-semibold tracking-[0.18em] text-violet-300">{number}</span>
                  <h3 className="mt-16 text-2xl font-semibold tracking-[-0.035em]">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/45">{description}</p>
                  {index < managementFlow.length - 1 && <span className="absolute right-5 top-5 h-2 w-2 rounded-full bg-violet-400" />}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="page-shell grid gap-12 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-6">
            <div className="rounded-[1.8rem] bg-violet-600 p-7 text-white sm:p-10">
              <ShieldCheck className="h-8 w-8 text-violet-100" />
              <h2 className="mt-10 text-4xl font-semibold leading-[0.98] tracking-[-0.05em] sm:text-5xl">Controle de acesso sem travar a operação.</h2>
              <p className="mt-6 text-base leading-8 text-violet-100/75">Cada pessoa visualiza e movimenta o que faz parte da sua função. Gestores acompanham a operação; vendedores trabalham suas oportunidades; equipes administrativas mantêm dados e estoque consistentes.</p>
            </div>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-6">
            <span className="home-eyebrow">Implantação responsável</span>
            <h2 className="mt-5 text-4xl font-semibold leading-[1] tracking-[-0.05em] sm:text-5xl">Software não entra no mesmo cronômetro dos serviços digitais.</h2>
            <p className="mt-6 text-base leading-8 text-[#66606c]">Antes de definir prazo, mapeamos unidades, usuários, estoque, dados existentes, migração, integração com WhatsApp e ferramentas de terceiros.</p>
            <div className="mt-7 space-y-3">
              {["Diagnóstico técnico e operacional", "Configuração de módulos e permissões", "Migração ou importação de dados", "Testes, treinamento e entrada em operação"].map((item) => <div key={item} className="flex items-center gap-3 rounded-xl border border-black/[0.08] bg-[#f7f6f9] p-4"><Check className="h-4 w-4 text-violet-600" /><span className="text-sm font-medium">{item}</span></div>)}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space bg-[#f7f6f9]">
        <div className="page-shell grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5"><SectionHeading eyebrow="Perguntas frequentes" title="Antes de conectar a operação." description="Escopo, prazo e integrações são definidos a partir da realidade de cada concessionária." /></Reveal>
          <div className="lg:col-span-7"><FAQList items={systemFaqs} /></div>
        </div>
      </section>

      <CTASection eyebrow="Demonstração" title="Veja como a operação pode trabalhar conectada." description="Apresente o cenário da concessionária para avaliarmos unidades, estoque, usuários, WhatsApp e integrações necessárias." />
    </main>
  </>
);

export default DealershipSystem;
