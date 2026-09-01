import { ArrowRight, Check, CircleCheck } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import CTASection from "../components/CTASection";
import FAQList from "../components/FAQList";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import Seo from "../components/Seo";
import { solutionPillars } from "../data/siteData";

const SolutionDetail = () => {
  const { slug } = useParams();
  const solution = solutionPillars.find((item) => item.slug === slug);
  if (!solution) return <Navigate to="/solucoes" replace />;

  return (
    <>
      <Seo title={solution.eyebrow} description={solution.shortDescription} path={`/solucoes/${solution.slug}`} />
      <PageHero eyebrow={`${solution.number} — ${solution.eyebrow}`} title={solution.title} description={solution.description}>
        <Link to="/diagnostico" className="home-button-dark mt-9 w-fit">Solicitar diagnóstico <ArrowRight className="h-4 w-4" /></Link>
      </PageHero>

      <section className="section-space bg-white text-[#17151d]">
        <div className="page-shell grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5"><SectionHeading eyebrow="Quando faz sentido" title="Sinais de que esta frente precisa de atenção." /></Reveal>
          <div className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
            {solution.pains.map((pain, index) => <Reveal key={pain} delay={index * 0.035}><div className="h-full rounded-2xl border border-black/[0.08] bg-[#f7f6f9] p-5"><span className="text-xs font-semibold text-violet-700">{String(index + 1).padStart(2, "0")}</span><p className="mt-7 text-sm font-medium leading-7">{pain}</p></div></Reveal>)}
          </div>
        </div>
      </section>

      <section className="section-space bg-[#17151d] text-white">
        <div className="page-shell grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5"><SectionHeading eyebrow="O que pode entrar" title="Entregas definidas pelo objetivo, não por pacote genérico." description="O escopo final considera o segmento, o momento comercial e a capacidade de execução do cliente." dark /></Reveal>
          <div className="grid gap-px overflow-hidden rounded-[1.6rem] bg-white/10 sm:grid-cols-2 lg:col-span-7">
            {solution.services.map((service, index) => <Reveal key={service} delay={index * 0.025}><div className="flex min-h-28 items-center gap-4 bg-[#17151d] p-5"><CircleCheck className="h-4 w-4 shrink-0 text-violet-300" /><span className="text-sm text-white/70">{service}</span></div></Reveal>)}
          </div>
        </div>
      </section>

      <section className="section-space bg-[#eae8ef] text-[#17151d]">
        <div className="page-shell">
          <Reveal><SectionHeading eyebrow="Resultado esperado" title="O que muda quando esta frente ganha direção." className="max-w-5xl" /></Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {solution.outcomes.map((outcome, index) => <Reveal key={outcome} delay={index * 0.04}><div className={`h-full min-h-56 rounded-[1.5rem] p-7 ${index === 1 ? "bg-violet-600 text-white" : "bg-white"}`}><Check className={`h-5 w-5 ${index === 1 ? "text-violet-100" : "text-violet-700"}`} /><p className="mt-20 text-lg font-semibold leading-7">{outcome}</p></div></Reveal>)}
          </div>
        </div>
      </section>

      <section className="section-space bg-white text-[#17151d]">
        <div className="page-shell">
          <Reveal><SectionHeading eyebrow="Processo" title="Da decisão à entrega." description="Estratégia e escopo são aprovados antes do ciclo de produção." /></Reveal>
          <div className="mt-12 space-y-3">
            {solution.process.map(([title, description], index) => <Reveal key={title} delay={index * 0.035}><article className="grid gap-4 rounded-2xl border border-black/[0.08] bg-[#f7f6f9] p-6 sm:grid-cols-[4rem_15rem_1fr] sm:items-center"><span className="text-xs font-semibold tracking-[0.16em] text-violet-700">{String(index + 1).padStart(2, "0")}</span><h3 className="text-lg font-semibold">{title}</h3><p className="text-sm leading-7 text-[#68626e]">{description}</p></article></Reveal>)}
          </div>
        </div>
      </section>

      <section className="section-space bg-[#f7f6f9] text-[#17151d]">
        <div className="page-shell grid gap-12 lg:grid-cols-12"><Reveal className="lg:col-span-5"><SectionHeading eyebrow="Perguntas frequentes" title={`Sobre ${solution.eyebrow.toLowerCase()}.`} /></Reveal><div className="lg:col-span-7"><FAQList items={solution.faqs} /></div></div>
      </section>
      <CTASection title="Esta é a frente que precisa entrar em movimento?" description="O diagnóstico confirma prioridades, escopo e dependências antes da produção." />
    </>
  );
};

export default SolutionDetail;
