import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import CTASection from "../components/CTASection";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import Seo from "../components/Seo";
import SolutionCard from "../components/SolutionCard";
import { solutionPillars } from "../data/siteData";

const Solutions = () => (
  <>
    <Seo
      title="Soluções"
      description="Landing pages, sites, criativos, marketing e tráfego pago para posicionar sua empresa no digital em 15 dias."
      path="/solucoes"
    />

    <PageHero
      eyebrow="Soluções"
      title="Todo o digital da sua empresa em 15 dias."
      description="Organizamos posicionamento, site, redes sociais, criativos, marketing e tráfego pago em uma implantação rápida e integrada."
      aside="O prazo de 15 dias cobre a estrutura inicial acordada no kickoff, com escopo objetivo e aprovações dentro do cronograma."
    >
      <Link to="/diagnostico" className="home-button-dark mt-9 w-fit">
        Quero montar meu digital
        <ArrowRight className="h-4 w-4" />
      </Link>
    </PageHero>

    <section className="section-space bg-white text-[#17151d]">
      <div className="page-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Serviços"
            title="Quatro frentes para posicionar sua empresa no digital."
            description="Cada serviço possui uma página própria e pode ser contratado separadamente ou dentro da implantação completa de 15 dias."
            className="max-w-4xl"
          />
        </Reveal>
        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {solutionPillars.map((solution, index) => (
            <SolutionCard key={solution.slug} solution={solution} index={index} />
          ))}
        </div>
      </div>
    </section>

    <section id="servicos" className="section-space bg-[#eae8ef] text-[#17151d]">
      <div className="page-shell grid gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-6">
          <SectionHeading
            eyebrow="Sprint de implantação"
            title="Quinze dias com escopo, ritmo e direção."
            description="O cronograma reúne decisões e produção em paralelo para transformar posicionamento em canais funcionando."
          />
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-6">
          <div className="rounded-[1.75rem] border border-black/[0.08] bg-white p-7 shadow-[0_20px_60px_rgba(38,29,63,0.08)] sm:p-10">
            <p className="text-lg leading-8 text-[#3f3946]">
              No kickoff definimos o que entra na implantação inicial. A equipe
              avança em site, redes, criativos e campanhas com uma única direção
              de posicionamento.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Kickoff e coleta de materiais",
                "Posicionamento e direção visual",
                "Produção simultânea das frentes",
                "Aprovações dentro do cronograma",
                "Publicação e entrega no dia 15",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 border-t border-black/[0.08] pt-4 text-sm text-[#625d69] first:border-t-0 first:pt-0">
                  <Check className="h-4 w-4 text-violet-700" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>

    <CTASection
      title="Seu digital pode estar em movimento daqui a 15 dias."
      description="Conte-nos o momento da empresa para definirmos a estrutura inicial e o cronograma de implantação."
    />
  </>
);

export default Solutions;
