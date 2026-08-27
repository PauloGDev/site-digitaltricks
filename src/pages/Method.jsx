import { ArrowRight, Compass, Eye, Layers3, RefreshCw, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import CTASection from "../components/CTASection";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import Seo from "../components/Seo";
import { methodSteps } from "../data/siteData";

const stepIcons = [Eye, Compass, Layers3, Rocket, RefreshCw];

const Method = () => (
  <>
    <Seo
      title="Método"
      description="Conheça o sprint de 15 dias da Digital Tricks para posicionar e colocar no ar a estrutura digital inicial da empresa."
      path="/metodo"
    />

    <PageHero
      eyebrow="Método Digital Tricks"
      title="Seu digital em movimento em 15 dias."
      description="Um sprint objetivo para definir o posicionamento, produzir os canais essenciais e colocar a estrutura inicial no ar."
      aside="O prazo funciona com escopo claro, materiais disponíveis e aprovações realizadas dentro do cronograma."
    >
      <Link to="/diagnostico" className="home-button-dark mt-9 w-fit">
        Começar meu projeto de 15 dias
        <ArrowRight className="h-4 w-4" />
      </Link>
    </PageHero>

    <section className="section-space bg-white text-[#17151d]">
      <div className="page-shell grid gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <SectionHeading
            eyebrow="Ponto de partida"
            title="Velocidade precisa de uma direção clara."
            description="Antes da produção, alinhamos posicionamento, oferta e público para que sites, criativos e campanhas comuniquem a mesma empresa."
          />
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-7">
          <blockquote className="rounded-r-[1.75rem] border-l-2 border-violet-500 bg-[#f2effa] py-8 pl-7 pr-7 text-balance text-2xl leading-[1.35] tracking-[-0.025em] text-[#302a37] sm:text-3xl lg:text-4xl">
            “Quinze dias não significam improviso. Significam foco, decisões
            rápidas e produção integrada em torno de um escopo claro.”
          </blockquote>
        </Reveal>
      </div>
    </section>

    <section className="section-space bg-[#eae8ef] text-[#17151d]">
      <div className="page-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Cinco etapas"
            title="Do kickoff à entrega no dia 15."
            className="max-w-4xl"
          />
        </Reveal>

        <div className="mt-14">
          {methodSteps.map((step, index) => {
            const Icon = stepIcons[index];
            return (
              <Reveal key={step.number} delay={index * 0.04}>
                <div className="group grid gap-6 border-t border-black/10 py-8 sm:grid-cols-[5rem_4rem_1fr] sm:items-start lg:py-10">
                  <span className="text-xs font-semibold tracking-[0.22em] text-violet-700">{step.number}</span>
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-[#5f5966] transition-colors group-hover:bg-violet-600 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="grid gap-4 lg:grid-cols-2">
                    <h2 className="text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">
                      {step.title}
                    </h2>
                    <p className="max-w-xl text-sm leading-7 text-[#68626e] sm:text-base sm:leading-8">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>

    <section className="section-space bg-white text-[#17151d]">
      <div className="page-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Princípios"
            title="O que orienta nossas decisões."
            className="max-w-4xl"
          />
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            ["Clareza antes de complexidade", "Toda solução precisa ser compreendida pela empresa e pelo cliente que interage com ela."],
            ["Integração antes de volume", "Preferimos canais conectados a uma coleção extensa de ações que não trabalham juntas."],
            ["Evolução antes de improviso", "Construímos bases que podem receber novos recursos sem recomeçar a cada fase."],
          ].map(([title, description], index) => (
            <Reveal key={title} delay={index * 0.06}>
              <div className={`h-full rounded-[1.6rem] p-7 sm:p-8 ${index === 1 ? "bg-violet-600 text-white" : "border border-black/[0.08] bg-[#f3f0f8]"}`}>
                <span className={`text-xs font-semibold tracking-[0.2em] ${index === 1 ? "text-violet-100" : "text-violet-700"}`}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-12 text-xl font-semibold">{title}</h3>
                <p className={`mt-4 text-sm leading-7 ${index === 1 ? "text-white/70" : "text-[#68626e]"}`}>{description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <CTASection
      title="Daqui a 15 dias, sua empresa pode se apresentar de outra forma."
      description="Compartilhe o momento atual para definirmos o escopo e iniciar o sprint de posicionamento digital."
    />
  </>
);

export default Method;
