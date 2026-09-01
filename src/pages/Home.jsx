import {
  ArrowRight,
  ArrowUpRight,
  CarFront,
  Crosshair,
  LayoutTemplate,
  MousePointerClick,
  Palette,
  ShoppingBag,
  Wrench,
} from "lucide-react";
import { Link } from "react-router-dom";
import DealershipDashboard from "../components/DealershipDashboard";
import FAQList from "../components/FAQList";
import Reveal from "../components/Reveal";
import Seo from "../components/Seo";
import heroVideo from "../assets/hero.mp4";
import alucarCampaign from "../assets/client-work/alucar-campaign.webp";
import alucarFlag from "../assets/client-work/alucar-flag.webp";
import alucarTags from "../assets/client-work/alucar-tags.webp";
import { audiences } from "../data/automotiveData";
import { companyProblems, homeFaqs, methodSteps, solutionPillars } from "../data/siteData";

const audienceIcons = { oficinas: Wrench, concessionarias: CarFront, "lojas-automotivas": ShoppingBag };
const solutionIcons = { posicionamento: Crosshair, "landing-pages-sites": LayoutTemplate, criativos: Palette, "trafego-pago": MousePointerClick };

const Home = () => (
  <>
    <Seo description="Estrutura digital para oficinas, concessionárias e lojas automotivas, com sistema de gestão conectado para concessionárias." path="/" />
    <main className="overflow-hidden bg-[#f7f6f9] text-[#17151d]">
      <section className="relative min-h-[100svh] overflow-hidden bg-[#15121c] text-white">
        <video className="absolute inset-0 h-full w-full object-cover" src={heroVideo} autoPlay muted loop playsInline preload="metadata" aria-label="Visual em movimento da Digital Tricks" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#100d18]/95 via-[#100d18]/65 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#100d18] via-transparent to-black/[0.35]" />
        <div className="page-shell relative flex min-h-[100svh] items-end pb-14 pt-32 sm:pb-20 lg:pb-24">
          <div className="w-full">
            <Reveal className="max-w-6xl">
              <span className="inline-flex rounded-full border border-violet-300/25 bg-violet-300/10 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-violet-200 backdrop-blur-md">Digital para o mercado automotivo</span>
              <h1 className="mt-6 max-w-6xl text-balance text-[3rem] font-semibold leading-[0.91] tracking-[-0.068em] sm:text-7xl lg:text-[6rem]">
                Estruturamos o digital de quem <span className="text-violet-300">movimenta o automotivo.</span>
              </h1>
              <p className="mt-7 max-w-3xl text-base leading-8 text-white/65 sm:text-lg">Posicionamento, páginas, criativos e campanhas para oficinas, concessionárias e lojas de produtos automotivos. Para concessionárias, um sistema conecta WhatsApp, estoque, clientes, vendas e equipe.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link to="/diagnostico" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#17151d] transition-transform hover:-translate-y-0.5">Solicitar diagnóstico <ArrowRight className="h-4 w-4" /></Link>
                <Link to="/para-seu-negocio" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 bg-black/20 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/10">Encontrar minha solução</Link>
              </div>
            </Reveal>
            <Reveal delay={0.1} className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/15 pt-6 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white/40">
              <span>Oficinas</span><span>Concessionárias</span><span>Lojas automotivas</span><span>Sistema de gestão</span>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-space bg-[#f7f6f9]">
        <div className="page-shell">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <Reveal className="lg:col-span-7">
              <span className="home-eyebrow">Especialização</span>
              <h2 className="mt-5 text-balance text-4xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl">Um mercado. <span className="text-violet-600">Três operações diferentes.</span></h2>
            </Reveal>
            <Reveal delay={0.08} className="lg:col-span-5"><p className="max-w-xl text-base leading-8 text-[#625d69] sm:text-lg">Não tratamos uma oficina como loja, nem concessionária como catálogo. A estrutura nasce do que cada negócio precisa vender, acompanhar e operar.</p></Reveal>
          </div>

          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {audiences.map((audience, index) => {
              const Icon = audienceIcons[audience.slug];
              return (
                <Reveal key={audience.slug} delay={index * 0.05}>
                  <Link to={`/para-seu-negocio/${audience.slug}`} className="group flex min-h-[32rem] flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-[0_18px_55px_rgba(38,29,63,0.07)]">
                    <div className="relative h-56 overflow-hidden">
                      <img src={audience.image} alt={audience.imageAlt} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                      <span className="absolute left-5 top-5 grid h-11 w-11 place-items-center rounded-xl border border-white/20 bg-black/25 text-white backdrop-blur-md"><Icon className="h-5 w-5" /></span>
                    </div>
                    <div className="flex flex-1 flex-col p-6 sm:p-7">
                      <div className="flex items-center justify-between"><span className="text-[0.63rem] font-semibold uppercase tracking-[0.18em] text-violet-700">{audience.eyebrow}</span><span className="text-xs text-black/25">{audience.number}</span></div>
                      <h3 className="mt-5 text-2xl font-semibold leading-[1.03] tracking-[-0.04em]">{audience.title}</h3>
                      <p className="mt-4 text-sm leading-7 text-[#68626e]">{audience.shortDescription}</p>
                      <ArrowUpRight className="mt-auto h-5 w-5 self-end text-violet-600 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="page-shell grid gap-5 lg:grid-cols-12 lg:auto-rows-[18rem]">
          <Reveal className="lg:col-span-7 lg:row-span-2">
            <article className="relative h-full min-h-[38rem] overflow-hidden rounded-[1.8rem] bg-[#17151d] text-white">
              <img src={alucarCampaign} alt="Campanha automotiva" className="absolute inset-0 h-full w-full object-cover opacity-85" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#15121c] via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-10">
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-violet-200">Do improviso à estrutura</span>
                <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-[0.98] tracking-[-0.05em] sm:text-6xl">O negócio já está na rua. O digital precisa acompanhar.</h2>
              </div>
            </article>
          </Reveal>
          <Reveal delay={0.05} className="lg:col-span-5">
            <article className="h-full rounded-[1.8rem] bg-[#e9e3ff] p-7 sm:p-9">
              <div className="flex items-center justify-between"><span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-violet-700">Sinais do problema</span><span className="rounded-full bg-violet-600 px-3 py-1.5 text-[0.58rem] font-semibold uppercase tracking-[0.13em] text-white">Diagnóstico</span></div>
              <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {companyProblems.slice(0, 4).map((problem, index) => <div key={problem} className="rounded-xl border border-violet-300/50 bg-white/60 p-3.5"><span className="text-[0.58rem] font-semibold text-violet-700">0{index + 1}</span><p className="mt-2 text-xs font-medium leading-5">{problem}</p></div>)}
              </div>
            </article>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-2"><article className="flex h-full min-h-56 flex-col justify-between rounded-[1.8rem] bg-violet-600 p-7 text-white"><span className="text-6xl font-semibold tracking-[-0.07em]">15</span><p className="text-sm font-medium leading-6 text-violet-50">dias de produção após estratégia, escopo, materiais e acessos aprovados.</p></article></Reveal>
          <Reveal delay={0.14} className="lg:col-span-3"><article className="flex h-full min-h-56 flex-col justify-between rounded-[1.8rem] bg-[#17151d] p-7 text-white"><span className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-violet-300">Uma direção</span><p className="text-xl font-semibold leading-7">Página, campanha e atendimento trabalhando para o mesmo objetivo.</p></article></Reveal>
        </div>
      </section>

      <section className="section-space bg-[#eae8ef]">
        <div className="page-shell">
          <Reveal className="mx-auto max-w-5xl text-center"><span className="home-eyebrow justify-center">O que estruturamos</span><h2 className="mt-5 text-balance text-4xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl">A estrutura essencial para <span className="text-violet-600">ser encontrado e escolhido.</span></h2></Reveal>
          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {solutionPillars.map((solution, index) => {
              const Icon = solutionIcons[solution.slug];
              const dark = index === 0 || index === 3;
              return (
                <Reveal key={solution.slug} delay={index * 0.05}>
                  <Link to={`/solucoes/${solution.slug}`} className={`group flex min-h-[24rem] flex-col rounded-[1.7rem] p-7 transition-transform hover:-translate-y-1 sm:p-9 ${dark ? "bg-[#17151d] text-white" : index === 1 ? "bg-violet-600 text-white" : "bg-white text-[#17151d]"}`}>
                    <div className="flex items-center justify-between"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10"><Icon className="h-5 w-5" /></span><span className="text-[0.62rem] tracking-[0.18em] opacity-40">{solution.number}</span></div>
                    <div className="mt-auto pt-12"><span className={`text-[0.63rem] font-semibold uppercase tracking-[0.18em] ${dark || index === 1 ? "text-violet-200" : "text-violet-700"}`}>{solution.eyebrow}</span><h3 className="mt-3 text-3xl font-semibold leading-[1.02] tracking-[-0.045em]">{solution.title}</h3><div className="mt-6 flex items-end justify-between gap-5"><p className="max-w-xl text-sm leading-7 opacity-60">{solution.shortDescription}</p><ArrowUpRight className="h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></div></div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-space overflow-hidden bg-violet-600 text-white">
        <div className="page-shell grid gap-12 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-5">
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-violet-100">Sistema para concessionárias</span>
            <h2 className="mt-5 text-balance text-4xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl">O lead não termina no WhatsApp.</h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-violet-100/75">Conecte conversas, estoque, clientes, propostas, vendas, funcionários e indicadores para acompanhar o que acontece depois que a campanha gera interesse.</p>
            <div className="mt-8 flex flex-wrap gap-2">{["WhatsApp", "Estoque", "Vendas", "Clientes", "Equipe", "Indicadores"].map((item) => <span key={item} className="rounded-full border border-white/20 bg-white/[0.06] px-3 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.12em]">{item}</span>)}</div>
            <Link to="/sistema-concessionarias" className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-violet-700">Conhecer o sistema <ArrowRight className="h-4 w-4" /></Link>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-7"><DealershipDashboard compact /></Reveal>
        </div>
      </section>

      <section className="section-space bg-[#f7f6f9]">
        <div className="page-shell grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5"><span className="home-eyebrow">Método</span><h2 className="mt-5 text-balance text-4xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl">Primeiro a direção. Depois, 15 dias de produção.</h2><p className="mt-6 text-base leading-8 text-[#66606c]">O cronômetro não começa no briefing. Estratégia, escopo, materiais e acessos precisam estar aprovados.</p><Link to="/metodo" className="home-button-dark mt-8">Ver método completo <ArrowRight className="h-4 w-4" /></Link></Reveal>
          <div className="space-y-3 lg:col-span-7">
            {methodSteps.map((step, index) => <Reveal key={step.number} delay={index * 0.035}><article className="grid grid-cols-[3rem_1fr] gap-4 rounded-2xl border border-black/[0.08] bg-white p-5 sm:p-6"><span className="text-xs font-semibold tracking-[0.16em] text-violet-700">{step.number}</span><div><h3 className="text-lg font-semibold tracking-[-0.025em]">{step.title}</h3><p className="mt-2 text-sm leading-6 text-[#69636f]">{step.description}</p></div></article></Reveal>)}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="page-shell grid gap-4 lg:grid-cols-12">
          <Reveal className="lg:col-span-5"><figure className="relative min-h-[32rem] overflow-hidden rounded-[1.8rem]"><img src={alucarFlag} alt="Aplicação de identidade automotiva em fachada" className="absolute inset-0 h-full w-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" /><figcaption className="absolute bottom-0 p-7 text-white"><span className="text-[0.62rem] uppercase tracking-[0.18em] text-violet-200">Identidade aplicada</span><p className="mt-2 text-2xl font-semibold">A percepção começa antes do contato.</p></figcaption></figure></Reveal>
          <Reveal delay={0.06} className="lg:col-span-7"><figure className="relative min-h-[32rem] overflow-hidden rounded-[1.8rem] bg-[#2459dd]"><img src={alucarTags} alt="Aplicações de identidade automotiva em produto" className="absolute inset-0 h-full w-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" /><figcaption className="absolute bottom-0 p-7 text-white"><span className="text-[0.62rem] uppercase tracking-[0.18em] text-violet-100">Marca em movimento</span><p className="mt-2 text-2xl font-semibold">Digital e operação precisam parecer parte da mesma empresa.</p></figcaption></figure></Reveal>
        </div>
      </section>

      <section className="section-space bg-[#f7f6f9]">
        <div className="page-shell grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5"><span className="home-eyebrow">Perguntas frequentes</span><h2 className="mt-5 text-balance text-4xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl">Clareza antes de começar.</h2><p className="mt-6 max-w-xl text-base leading-8 text-[#66606c]">Serviços digitais e sistema possuem escopos e prazos diferentes.</p></Reveal>
          <div className="lg:col-span-7"><FAQList items={homeFaqs} /></div>
        </div>
      </section>

      <section className="bg-[#17151d] py-20 text-white sm:py-28">
        <div className="page-shell">
          <Reveal className="rounded-[2rem] bg-violet-600 p-7 sm:p-12 lg:p-16">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-end"><div className="lg:col-span-8"><span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-violet-100">Próximo movimento</span><h2 className="mt-5 text-balance text-4xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl">Seu negócio automotivo pronto para avançar no digital.</h2><p className="mt-6 max-w-2xl text-base leading-8 text-violet-100/75">Apresente o cenário atual. Nós definimos a estratégia, o escopo e a estrutura adequada antes de iniciar a produção.</p></div><div className="lg:col-span-4 lg:flex lg:justify-end"><Link to="/diagnostico" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-violet-700">Solicitar diagnóstico <ArrowRight className="h-4 w-4" /></Link></div></div>
          </Reveal>
        </div>
      </section>
    </main>
  </>
);

export default Home;
