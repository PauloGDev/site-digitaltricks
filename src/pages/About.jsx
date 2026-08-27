import { ArrowRight, BrainCircuit, Crosshair, Network, Waves } from "lucide-react";
import { Link } from "react-router-dom";
import CTASection from "../components/CTASection";
import MascotSwimmer from "../components/MascotSwimmer";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import Seo from "../components/Seo";

const About = () => (
  <>
    <Seo
      title="Sobre"
      description="Conheça a Digital Tricks, parceira de posicionamento digital para colocar empresas em movimento em 15 dias."
      path="/sobre"
    />

    <PageHero
      eyebrow="Sobre a Digital Tricks"
      title="Posicionamento para aparecer. Estrutura para avançar."
      description="Montamos o digital inicial de empresas em 15 dias, conectando sites, criativos, marketing e tráfego pago."
      aside="Uma equipe, um cronograma e uma direção para colocar os canais essenciais em funcionamento."
    >
      <Link to="/metodo" className="home-button-dark mt-9 w-fit">
        Conhecer nosso método
        <ArrowRight className="h-4 w-4" />
      </Link>
    </PageHero>

    <section className="section-space bg-white text-[#17151d]">
      <div className="page-shell grid gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <SectionHeading
            eyebrow="Nossa visão"
            title="O digital precisa funcionar como parte da empresa."
          />
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-7">
          <div className="space-y-7 text-lg leading-9 text-[#625d69]">
            <p>
              Muitas empresas entram no digital resolvendo urgências: criam uma
              rede social, publicam um site, impulsionam uma campanha e adotam
              novas ferramentas. Com o tempo, essas iniciativas deixam de formar
              um conjunto coerente.
            </p>
            <p>
              A Digital Tricks existe para acelerar essa organização. Definimos
              o posicionamento e conectamos sites, criativos, marketing e
              tráfego pago em uma direção comum.
            </p>
            <p className="rounded-[1.5rem] bg-[#f2effa] p-7 font-medium text-[#302a37]">
              Nosso trabalho é transformar decisões em uma presença digital
              pronta para funcionar — com uma implantação inicial de 15 dias.
            </p>
          </div>
        </Reveal>
      </div>
    </section>

    <section className="section-space bg-[#eae8ef] text-[#17151d]">
      <div className="page-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Como pensamos"
            title="Princípios que atravessam cada projeto."
            className="max-w-4xl"
          />
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {[
            [BrainCircuit, "Inteligência aplicada", "Decisões guiadas pelo contexto da empresa, não por modismos ou fórmulas prontas."],
            [Crosshair, "Direção clara", "Cada entrega precisa responder a um objetivo e contribuir para a estrutura completa."],
            [Network, "Visão integrada", "Site, redes, criativos, marketing e tráfego pago devem comunicar o mesmo posicionamento."],
            [Waves, "Evolução contínua", "O digital muda. Construímos bases capazes de aprender, adaptar e crescer."],
          ].map(([Icon, title, description], index) => (
            <Reveal key={title} delay={index * 0.05}>
              <div className={`h-full rounded-[1.6rem] p-7 sm:p-9 ${index === 0 ? "bg-[#17151d] text-white" : index === 2 ? "bg-violet-600 text-white" : "border border-black/[0.08] bg-white"}`}>
                <Icon className={`h-6 w-6 ${index === 0 || index === 2 ? "text-violet-200" : "text-violet-700"}`} />
                <h3 className="mt-10 text-2xl font-semibold tracking-[-0.035em]">{title}</h3>
                <p className={`mt-4 max-w-xl text-sm leading-7 ${index === 0 || index === 2 ? "text-white/[0.65]" : "text-[#68626e]"}`}>{description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className="relative overflow-hidden bg-[#050506]">
      <div className="pointer-events-none absolute inset-0 grid-surface opacity-35" />
      <div className="page-shell relative grid min-h-[46rem] items-center gap-6 py-20 lg:grid-cols-12">
        <Reveal className="relative z-10 lg:col-span-5">
          <span className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-violet-300">
            O Trix
          </span>
          <h2 className="mt-5 text-4xl font-semibold leading-[1] tracking-[-0.05em] text-white sm:text-6xl">
            Estratégia e domínio do ambiente.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/[0.55]">
            A orca combina inteligência, comunicação, precisão e coordenação. Ela
            entende o ambiente antes de agir e se move com propósito — a mesma
            mentalidade que buscamos aplicar à estrutura digital de cada empresa.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="relative h-[30rem] lg:col-span-7 lg:h-[42rem]">
          <div className="absolute inset-[-10%]">
            <MascotSwimmer className="h-full w-full" />
          </div>
        </Reveal>
      </div>
    </section>

    <CTASection
      title="Vamos montar o digital da sua empresa em 15 dias."
      description="O primeiro passo é definir o escopo inicial e organizar os materiais para o kickoff."
    />
  </>
);

export default About;
