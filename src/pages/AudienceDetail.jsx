import { ArrowRight, Check, CircleCheck, Gauge, MoveRight } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import CTASection from "../components/CTASection";
import DealershipDashboard from "../components/DealershipDashboard";
import FAQList from "../components/FAQList";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import Seo from "../components/Seo";
import { audiences } from "../data/automotiveData";

const AudienceDetail = () => {
  const { slug } = useParams();
  const audience = audiences.find((item) => item.slug === slug);
  if (!audience) return <Navigate to="/para-seu-negocio" replace />;
  const isDealer = audience.slug === "concessionarias";
  const singularName = audience.slug === "oficinas" ? "oficina" : audience.slug === "concessionarias" ? "concessionária" : "loja automotiva";

  return (
    <>
      <Seo title={audience.name} description={audience.heroDescription} path={`/para-seu-negocio/${audience.slug}`} />
      <section className="relative overflow-hidden bg-[#e9e7ef] pb-16 pt-28 text-[#17151d] sm:pb-24 sm:pt-32">
        <div className="dot-surface-light pointer-events-none absolute inset-0 opacity-70" />
        <div className="page-shell relative">
          <div className="grid min-h-[42rem] overflow-hidden rounded-[2rem] border border-black/[0.08] bg-[#fbfaff] shadow-[0_30px_90px_rgba(38,29,63,0.12)] lg:grid-cols-12">
            <Reveal className="flex flex-col justify-end p-7 sm:p-10 lg:col-span-7 lg:p-14">
              <span className="home-eyebrow">{audience.eyebrow}</span>
              <h1 className="mt-6 max-w-5xl text-balance text-4xl font-semibold leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:text-[4.8rem]">{audience.title}</h1>
              <p className="mt-7 max-w-3xl text-base leading-8 text-[#615c68] sm:text-lg">{audience.heroDescription}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link to="/diagnostico" className="home-button-dark">Solicitar diagnóstico <ArrowRight className="h-4 w-4" /></Link>
                {isDealer && <Link to="/sistema-concessionarias" className="home-button-light">Conhecer o sistema</Link>}
              </div>
            </Reveal>
            <Reveal delay={0.08} className="relative min-h-[25rem] lg:col-span-5 lg:min-h-full">
              <img src={audience.image} alt={audience.imageAlt} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#15121c]/60 via-transparent to-transparent" />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-space bg-white text-[#17151d]">
        <div className="page-shell grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionHeading eyebrow="O desafio" title="Uma boa operação pode parecer comum no digital." description={audience.promise} />
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
            {audience.pains.map((pain, index) => (
              <Reveal key={pain} delay={index * 0.035}>
                <div className="h-full rounded-2xl border border-black/[0.08] bg-[#f6f4f8] p-5">
                  <span className="text-[0.62rem] font-semibold tracking-[0.18em] text-violet-700">{String(index + 1).padStart(2, "0")}</span>
                  <p className="mt-6 text-sm font-medium leading-7 text-[#403a47]">{pain}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-[#17151d] text-white">
        <div className="page-shell">
          <Reveal><SectionHeading eyebrow="A estrutura" title="Frentes que trabalham como uma só operação." description="Cada entrega é escolhida conforme o objetivo, o momento do negócio e a capacidade de atender a demanda gerada." dark /></Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-[1.7rem] bg-white/10 md:grid-cols-2 lg:grid-cols-3">
            {audience.deliverables.map(([title, description], index) => (
              <Reveal key={title} delay={index * 0.04}>
                <article className="h-full min-h-56 bg-[#17151d] p-7 sm:p-8">
                  <div className="flex items-center justify-between"><CircleCheck className="h-5 w-5 text-violet-300" /><span className="text-[0.6rem] tracking-[0.18em] text-white/25">{String(index + 1).padStart(2, "0")}</span></div>
                  <h3 className="mt-12 text-xl font-semibold">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/50">{description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {isDealer && (
        <section className="section-space overflow-hidden bg-violet-600 text-white">
          <div className="page-shell grid gap-12 lg:grid-cols-12 lg:items-center">
            <Reveal className="lg:col-span-5">
              <span className="text-[0.67rem] font-semibold uppercase tracking-[0.22em] text-violet-100">Sistema de gestão</span>
              <h2 className="mt-5 text-balance text-4xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl">O marketing mostra de onde veio. O sistema acompanha até onde chegou.</h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-violet-100/75">WhatsApp, estoque, clientes, propostas, vendas e equipe conectados para reduzir a perda de contexto entre anúncio e showroom.</p>
              <Link to="/sistema-concessionarias" className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-violet-700">Explorar o sistema <ArrowRight className="h-4 w-4" /></Link>
            </Reveal>
            <Reveal delay={0.08} className="lg:col-span-7"><DealershipDashboard compact /></Reveal>
          </div>
        </section>
      )}

      <section className="section-space bg-[#f0edf5] text-[#17151d]">
        <div className="page-shell grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5"><SectionHeading eyebrow="Campanhas possíveis" title="Ideias conectadas ao momento comercial." /></Reveal>
          <div className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
            {audience.campaigns.map((campaign, index) => (
              <Reveal key={campaign} delay={index * 0.035}>
                <div className="group flex min-h-28 items-center justify-between gap-4 rounded-2xl bg-white p-5 shadow-[0_15px_35px_rgba(38,29,63,0.05)]">
                  <div className="flex items-center gap-4"><span className="text-xs font-semibold text-violet-700">{String(index + 1).padStart(2, "0")}</span><p className="text-sm font-semibold">{campaign}</p></div>
                  <MoveRight className="h-4 w-4 text-black/25 transition-transform group-hover:translate-x-1 group-hover:text-violet-600" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-white text-[#17151d]">
        <div className="page-shell grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#eee9ff] text-violet-700"><Gauge className="h-5 w-5" /></span>
            <SectionHeading className="mt-8" eyebrow="Antes de acelerar" title="A operação precisa estar pronta para a demanda." description="O digital amplia o que já existe. Por isso, capacidade, atendimento e registro comercial fazem parte do diagnóstico." />
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-7">
            <div className="rounded-[1.7rem] border border-black/[0.08] bg-[#f7f6f9] p-7 sm:p-9">
              <p className="text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-violet-700">Condições para avançar</p>
              <div className="mt-7 space-y-4">
                {audience.qualifiers.map((item) => <div key={item} className="flex gap-3 border-t border-black/10 pt-4"><Check className="mt-1 h-4 w-4 shrink-0 text-violet-600" /><p className="text-sm leading-7 text-[#5f5965]">{item}</p></div>)}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space bg-[#f7f6f9] text-[#17151d]">
        <div className="page-shell grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5"><SectionHeading eyebrow="Perguntas frequentes" title={`O que ${audience.name.toLowerCase()} precisam saber.`} /></Reveal>
          <div className="lg:col-span-7"><FAQList items={audience.faqs} /></div>
        </div>
      </section>

      <CTASection title={`Vamos estruturar o próximo movimento da sua ${singularName}.`} description="O diagnóstico define posicionamento, escopo e entregas antes do início do ciclo de produção." />
    </>
  );
};

export default AudienceDetail;
