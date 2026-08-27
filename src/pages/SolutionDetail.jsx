import { ArrowRight, Check, CircleCheckBig } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import CTASection from "../components/CTASection";
import ClientVisualGallery from "../components/ClientVisualGallery";
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
      <Seo
        title={solution.eyebrow}
        description={solution.shortDescription}
        path={`/solucoes/${solution.slug}`}
      />

      <PageHero
        eyebrow={solution.eyebrow}
        title={solution.title}
        description={solution.description}
        aside={`${solution.number} — Um dos quatro serviços que formam o posicionamento digital Digital Tricks.`}
      >
        <Link to="/diagnostico" className="home-button-dark mt-9 w-fit">
          Incluir no meu projeto de 15 dias
          <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHero>

      <section className="section-space bg-white text-[#17151d]">
        <div className="page-shell grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              eyebrow="Quando faz sentido"
              title="Sinais de que esta frente precisa de atenção."
              description="Os sintomas podem aparecer isoladamente, mas normalmente fazem parte de um problema estrutural maior."
            />
          </Reveal>
          <div className="lg:col-span-7">
            <div className="divide-y divide-black/10 border-y border-black/10">
              {solution.pains.map((pain, index) => (
                <Reveal key={pain} delay={index * 0.04}>
                  <div className="flex gap-4 py-6">
                    <span className="text-xs font-semibold tracking-[0.16em] text-violet-700">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-base leading-7 text-[#5f5966]">{pain}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ClientVisualGallery slug={solution.slug} />

      <section className="section-space bg-[#eae8ef] text-[#17151d]">
        <div className="page-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Entregas possíveis"
              title="O que esta frente pode incluir."
              description="As entregas entram no escopo conforme o objetivo e podem ser combinadas com os demais serviços."
              className="max-w-4xl"
            />
          </Reveal>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {solution.services.map((service, index) => (
              <Reveal key={service} delay={index * 0.03}>
                <div className="flex min-h-24 items-center gap-4 rounded-2xl border border-black/[0.08] bg-white p-5">
                  <Check className="h-4 w-4 shrink-0 text-violet-700" />
                  <span className="text-sm leading-6 text-[#5f5966]">{service}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-white text-[#17151d]">
        <div className="page-shell grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              eyebrow="Impacto esperado"
              title="Mais clareza, consistência e capacidade de evolução."
            />
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {solution.outcomes.map((outcome, index) => (
              <Reveal key={outcome} delay={index * 0.05}>
                <div className="h-full rounded-[1.5rem] border border-black/[0.08] bg-[#f3f0fb] p-6">
                  <CircleCheckBig className="h-5 w-5 text-violet-700" />
                  <p className="mt-8 text-base leading-7 text-[#4f4956]">{outcome}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-[#eae8ef] text-[#17151d]">
        <div className="page-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Processo"
              title="Da definição à entrega em funcionamento."
              className="max-w-4xl"
            />
          </Reveal>
          <div className="mt-14 grid gap-3 md:grid-cols-5">
            {solution.process.map(([title, description], index) => (
              <Reveal key={title} delay={index * 0.05}>
                <div className="h-full rounded-[1.5rem] border border-black/[0.08] bg-white p-6 sm:p-7">
                  <span className="text-xs font-semibold tracking-[0.18em] text-violet-700">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-10 text-lg font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#68626e]">{description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-white text-[#17151d]">
        <div className="page-shell grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionHeading eyebrow="Perguntas frequentes" title="Antes de avançar." />
          </Reveal>
          <div className="lg:col-span-7">
            <FAQList items={solution.faqs} />
          </div>
        </div>
      </section>

      <CTASection
        title="Vamos incluir esta frente no seu digital de 15 dias?"
        description="Conte-nos o cenário atual para definirmos o escopo inicial e como este serviço se conecta aos demais."
      />
    </>
  );
};

export default SolutionDetail;
