import { ArrowUpRight, Crosshair, LayoutTemplate, MousePointerClick, Palette } from "lucide-react";
import { Link } from "react-router-dom";
import CTASection from "../components/CTASection";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import Seo from "../components/Seo";
import { solutionPillars } from "../data/siteData";

const icons = { posicionamento: Crosshair, "landing-pages-sites": LayoutTemplate, criativos: Palette, "trafego-pago": MousePointerClick };

const Solutions = () => (
  <>
    <Seo title="Soluções" description="Posicionamento, landing pages, sites, criativos e tráfego pago para negócios automotivos." path="/solucoes" />
    <PageHero eyebrow="Soluções digitais" title="As frentes certas, conectadas ao mesmo objetivo." description="A Digital Tricks organiza percepção, páginas, campanhas e aquisição para que oficinas, concessionárias e lojas automotivas não dependam de ações isoladas." />
    <section className="section-space bg-white text-[#17151d]">
      <div className="page-shell">
        <div className="grid gap-4 md:grid-cols-2">
          {solutionPillars.map((solution, index) => {
            const Icon = icons[solution.slug];
            const dark = index === 0 || index === 3;
            return (
              <Reveal key={solution.slug} delay={index * 0.05}>
                <Link to={`/solucoes/${solution.slug}`} className={`group flex min-h-[29rem] flex-col rounded-[1.8rem] p-7 transition-transform hover:-translate-y-1 sm:p-10 ${dark ? "bg-[#17151d] text-white" : index === 1 ? "bg-violet-600 text-white" : "bg-[#eee9ff] text-[#17151d]"}`}>
                  <div className="flex items-center justify-between"><span className={`grid h-12 w-12 place-items-center rounded-2xl ${dark || index === 1 ? "bg-white/10" : "bg-white/70"}`}><Icon className="h-5 w-5" /></span><span className="text-xs font-semibold tracking-[0.18em] opacity-40">{solution.number}</span></div>
                  <div className="mt-auto pt-16"><span className={`text-[0.65rem] font-semibold uppercase tracking-[0.18em] ${dark || index === 1 ? "text-violet-200" : "text-violet-700"}`}>{solution.eyebrow}</span><h2 className="mt-4 text-3xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-4xl">{solution.title}</h2><div className="mt-7 flex items-end justify-between gap-5"><p className="max-w-xl text-sm leading-7 opacity-60">{solution.shortDescription}</p><ArrowUpRight className="h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></div></div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
    <section className="section-space bg-[#eae8ef] text-[#17151d]">
      <div className="page-shell grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5"><span className="home-eyebrow">Como combinamos</span><h2 className="mt-5 text-4xl font-semibold leading-[1] tracking-[-0.05em] sm:text-6xl">Nem todo cliente precisa começar por tudo.</h2></Reveal>
        <Reveal delay={0.08} className="lg:col-span-7"><div className="space-y-5 text-base leading-8 text-[#625d69] sm:text-lg"><p>Uma oficina pode começar pela busca local e uma landing page. Uma concessionária pode priorizar estoque, campanha e sistema. Uma loja pode precisar primeiro de catálogo, produto e e-commerce.</p><p className="rounded-[1.5rem] bg-white p-7 font-medium text-[#302a37]">O diagnóstico define a combinação mínima capaz de resolver o problema atual sem criar uma coleção de entregas sem uso.</p></div></Reveal>
      </div>
    </section>
    <CTASection title="Vamos escolher a estrutura certa para o seu negócio automotivo." />
  </>
);

export default Solutions;
