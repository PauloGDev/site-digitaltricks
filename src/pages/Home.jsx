import {
  ArrowRight,
  ArrowUpRight,
  LayoutTemplate,
  Megaphone,
  MousePointerClick,
  Palette,
} from "lucide-react";
import { Link } from "react-router-dom";
import MascotSwimmer from "../components/MascotSwimmer";
import Reveal from "../components/Reveal";
import Seo from "../components/Seo";
import heroVideo from "../assets/hero.mp4";
import sobreHome from "../assets/sobre-home.jpg";
import {
  companyProblems,
  homeFaqs,
  methodSteps,
  solutionPillars,
} from "../data/siteData";
import { homeVisuals } from "../data/clientVisuals";

const solutionIcons = [
  LayoutTemplate,
  Palette,
  Megaphone,
  MousePointerClick,
];

const solutionStyles = [
  "bg-[#17151d] text-white",
  "bg-[#7658ff] text-white",
  "bg-[#f1eff4] text-[#17151d]",
  "bg-[#17151d] text-white",
];

const Home = () => (
  <>
    <Seo
      description="Landing pages, sites, criativos, marketing e tráfego pago: montamos a estrutura digital inicial da sua empresa em 15 dias."
      path="/"
    />

    <main className="overflow-hidden bg-[#f7f6f9] text-[#17151d]">
      <section className="relative min-h-[100svh] overflow-hidden bg-[#15121c] text-white">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={heroVideo}
          poster={sobreHome}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Visual abstrato em movimento da Digital Tricks"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#100d18]/95 via-[#100d18]/60 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#100d18] via-transparent to-black/[0.35]" />

        <div className="page-shell relative flex min-h-[100svh] items-end pb-16 pt-32 sm:pb-20 lg:pb-24">
          <div className="w-full">
            <Reveal className="max-w-6xl">
              <h1 className="max-w-5xl text-balance text-[3rem] font-semibold leading-[0.93] tracking-[-0.065em] sm:text-7xl lg:text-[6rem]">
                Montamos todo o digital da sua empresa
                <span className="block text-violet-300">
                  em 15 dias.
                </span>
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                Landing pages, sites, criativos, marketing e tráfego pago
                organizados em uma estrutura pronta para entrar em movimento.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link to="/diagnostico" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#17151d] transition-transform hover:-translate-y-0.5">
                  Quero montar meu digital
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/solucoes" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 bg-black/20 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/10">
                  Explorar soluções
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f6f9] py-20 sm:py-28">
        <div className="page-shell">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <Reveal className="lg:col-span-7">
              <span className="home-eyebrow">O ponto de virada</span>
              <h2 className="mt-5 max-w-4xl text-balance text-4xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                Crescer improvisando até vai.
                <span className="text-violet-600"> Até deixar de funcionar.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.08} className="lg:col-span-5 lg:pb-2">
              <p className="max-w-xl text-base leading-8 text-[#625d69] sm:text-lg">
                Quando site, redes, campanhas e operação seguem caminhos
                diferentes, a empresa perde clareza, velocidade e oportunidades.
                É aqui que entramos.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid auto-rows-[minmax(15rem,auto)] gap-4 lg:grid-cols-12">
            <Reveal className="lg:col-span-7 lg:row-span-2">
              <article className="group relative h-full min-h-[34rem] overflow-hidden rounded-[1.75rem] bg-[#17151d] text-white">
                <img
                  src={sobreHome}
                  alt="Elemento tridimensional abstrato"
                  className="absolute inset-0 h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#15121c] via-transparent to-black/10" />
                <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-10">
                  <span className="text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-violet-200">
                    De ações isoladas
                  </span>
                  <h3 className="mt-4 max-w-xl text-3xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-5xl">
                    Para uma estrutura que sustenta decisões e crescimento.
                  </h3>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.06} className="lg:col-span-5">
              <article className="h-full rounded-[1.75rem] bg-[#e9e3ff] p-7 sm:p-9">
                <div className="flex items-center justify-between">
                  <span className="text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-violet-700">
                    Sinais do problema
                  </span>
                  <span className="rounded-full bg-violet-600 px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-white">
                    Diagnóstico
                  </span>
                </div>
                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {companyProblems.slice(0, 4).map((problem, index) => (
                    <div key={problem} className="rounded-2xl border border-violet-300/60 bg-white/60 p-4">
                      <span className="text-[0.62rem] font-semibold text-violet-700">0{index + 1}</span>
                      <p className="mt-3 text-sm font-medium leading-6 text-[#292431]">{problem}</p>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-3">
              <article className="flex h-full min-h-56 flex-col justify-between rounded-[1.75rem] bg-violet-600 p-7 text-white">
                <span className="text-5xl font-semibold tracking-[-0.06em]">15</span>
                <p className="max-w-[14rem] text-lg font-medium leading-6">
                  dias para colocar a estrutura digital inicial em funcionamento.
                </p>
              </article>
            </Reveal>
            <Reveal delay={0.14} className="lg:col-span-2">
              <article className="flex h-full min-h-56 flex-col justify-between rounded-[1.75rem] border border-black/[0.08] bg-white p-7">
                <ArrowUpRight className="h-6 w-6 text-violet-600" />
                <p className="text-sm font-medium leading-6 text-[#4e4955]">
                  Clareza para priorizar o que realmente move a empresa.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="page-shell">
          <Reveal className="mx-auto max-w-4xl text-center">
            <span className="home-eyebrow justify-center">O que estruturamos</span>
            <h2 className="mt-5 text-balance text-4xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              Quatro serviços.
              <span className="block text-violet-600">Um posicionamento digital completo.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#625d69] sm:text-lg">
              Sites, criativos, estratégia e mídia trabalham juntos para que a
              empresa seja vista, compreendida e escolhida.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-4 lg:grid-cols-2">
            {solutionPillars.map((solution, index) => {
              const Icon = solutionIcons[index];
              const isDark = index === 0 || index === 1 || index === 3;
              return (
                <Reveal key={solution.slug} delay={index * 0.05} className={index === 0 || index === 3 ? "lg:col-span-2" : ""}>
                  <Link
                    to={`/solucoes/${solution.slug}`}
                    className={`group flex h-full min-h-[23rem] flex-col overflow-hidden rounded-[1.75rem] p-7 transition-transform duration-300 hover:-translate-y-1 sm:p-9 ${solutionStyles[index]}`}
                  >
                    <div className="flex items-start justify-between gap-5">
                      <span className={`grid h-12 w-12 place-items-center rounded-2xl ${isDark ? "bg-white/10" : "bg-white/70"}`}>
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className={`text-[0.65rem] font-semibold uppercase tracking-[0.2em] ${isDark ? "text-white/50" : "text-[#17151d]/50"}`}>
                        {solution.number}
                      </span>
                    </div>
                    <div className="mt-auto pt-14">
                      <span className={`text-[0.66rem] font-semibold uppercase tracking-[0.18em] ${isDark ? "text-violet-200" : "text-violet-700"}`}>
                        {solution.eyebrow}
                      </span>
                      <h3 className="mt-3 max-w-3xl text-3xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-4xl">
                        {solution.title}
                      </h3>
                      <div className="mt-7 flex items-center justify-between gap-5">
                        <p className={`max-w-2xl text-sm leading-7 ${isDark ? "text-white/60" : "text-[#514c58]"}`}>
                          {solution.shortDescription}
                        </p>
                        <ArrowUpRight className="h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="direcao-visual" className="bg-[#eae8ef] py-20 sm:py-28">
        <div className="page-shell">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <Reveal className="lg:col-span-7">
              <span className="home-eyebrow">Direção visual aplicada</span>
              <h2 className="mt-5 max-w-5xl text-balance text-4xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                Não basta estar no digital.
                <span className="block text-violet-600">É preciso parecer pronto.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.08} className="lg:col-span-5 lg:pb-2">
              <p className="max-w-xl text-base leading-8 text-[#625d69] sm:text-lg">
                Identidade, conteúdo e campanha formam a percepção da marca.
                Estas aplicações reais e novas variações mostram como cada
                ponto de contato pode trabalhar na mesma direção.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-4 lg:grid-cols-12 lg:auto-rows-[19rem]">
            {homeVisuals.map((visual, index) => {
              const layout = [
                "lg:col-span-5 lg:row-span-2",
                "lg:col-span-7",
                "lg:col-span-3",
                "lg:col-span-4",
              ][index];

              return (
                <Reveal key={`${visual.brand}-${visual.label}`} delay={index * 0.05} className={layout}>
                  <figure className="group relative h-full min-h-[24rem] overflow-hidden rounded-[1.75rem] bg-[#17151d] lg:min-h-0">
                    <img
                      src={visual.image}
                      alt={visual.alt}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.025]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <figcaption className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 p-6 text-white sm:p-7">
                      <div>
                        <span className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-violet-200">{visual.label}</span>
                        <p className="mt-2 text-xl font-semibold">{visual.brand}</p>
                      </div>
                      <span className="rounded-full border border-white/20 bg-black/30 px-3 py-2 text-[0.58rem] font-semibold uppercase tracking-[0.14em] backdrop-blur-md">
                        Visual aplicado
                      </span>
                    </figcaption>
                  </figure>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative bg-[#eae8ef] py-20 sm:py-28">
        <div className="dot-surface-light pointer-events-none absolute inset-0 opacity-70" />
        <div className="page-shell relative">
          <Reveal className="mx-auto max-w-4xl text-center">
            <span className="home-eyebrow justify-center">Nosso método</span>
            <h2 className="mt-5 text-balance text-4xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              Do briefing ao digital no ar em 15 dias.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-4 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <div className="relative min-h-[42rem] overflow-hidden rounded-[1.75rem] bg-[#15121c] text-white">
                <img src={sobreHome} alt="Forma abstrata tridimensional" className="absolute inset-0 h-full w-full object-cover opacity-75" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#15121c] via-transparent to-transparent" />
                <div className="absolute left-7 top-7 rounded-full border border-white/20 bg-black/30 px-4 py-2 text-[0.63rem] font-semibold uppercase tracking-[0.18em] backdrop-blur-md">
                  Estratégia + execução
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-10">
                  <h3 className="max-w-xl text-4xl font-semibold leading-[1] tracking-[-0.05em] sm:text-5xl">
                    Uma entrega rápida, sem perder direção.
                  </h3>
                  <p className="mt-5 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
                    Posicionamento e execução avançam juntos para colocar os
                    canais essenciais em funcionamento no mesmo ciclo.
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="space-y-3 lg:col-span-5">
              {methodSteps.map((step, index) => (
                <Reveal key={step.number} delay={index * 0.04}>
                  <article className="group grid grid-cols-[3.25rem_1fr_auto] items-center gap-4 rounded-2xl border border-black/[0.08] bg-white p-5 transition-colors hover:bg-[#f4f0ff] sm:p-6">
                    <span className="text-xs font-semibold tracking-[0.16em] text-violet-600">{step.number}</span>
                    <div>
                      <h3 className="text-lg font-semibold tracking-[-0.025em]">{step.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-[#69636f]">{step.description}</p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-[#8d8793] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-600" />
                  </article>
                </Reveal>
              ))}
              <Link to="/metodo" className="home-button-dark mt-5 w-full">
                Ver método completo
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#15121c] text-white">
        <div className="pointer-events-none absolute inset-x-0 top-0 text-center text-[27vw] font-semibold leading-none tracking-[-0.09em] text-white/[0.025]">
          TRIX
        </div>
        <div className="page-shell relative grid min-h-[48rem] items-center gap-8 py-20 lg:grid-cols-12">
          <Reveal className="z-10 lg:col-span-5">
            <span className="text-[0.67rem] font-semibold uppercase tracking-[0.22em] text-violet-300">Inteligência em movimento</span>
            <h2 className="mt-5 text-balance text-5xl font-semibold leading-[0.96] tracking-[-0.06em] sm:text-7xl">
              Conheça o Trix.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/60 sm:text-lg">
              A orca representa inteligência, estratégia e domínio do ambiente.
              O Trix transforma essa mentalidade em decisões digitais mais
              precisas, conectadas e prontas para evoluir.
            </p>
            <Link to="/sobre" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#17151d]">
              Conhecer a Digital Tricks
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal delay={0.08} className="relative h-[29rem] lg:col-span-7 lg:h-[45rem]">
            <div className="absolute inset-[-8%] rounded-full bg-violet-600/20 blur-[90px]" />
            <div className="absolute inset-[-8%]">
              <MascotSwimmer className="h-full w-full" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#f7f6f9] py-20 sm:py-28">
        <div className="page-shell grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <span className="home-eyebrow">Perguntas frequentes</span>
            <h2 className="mt-5 text-balance text-4xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl">
              Clareza antes de começar.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#66606c]">
              Algumas respostas para entender como funciona uma estruturação
              digital com a Digital Tricks.
            </p>
          </Reveal>
          <div className="divide-y divide-black/10 border-y border-black/10 lg:col-span-7">
            {homeFaqs.map(([question, answer], index) => (
              <Reveal key={question} delay={index * 0.03}>
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left text-base font-semibold sm:text-lg">
                    {question}
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-black/10 text-xl font-normal transition group-open:rotate-45 group-open:bg-violet-600 group-open:text-white">+</span>
                  </summary>
                  <p className="max-w-3xl pb-7 pr-10 text-sm leading-7 text-[#68626e] sm:text-base sm:leading-8">{answer}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f6f9] pb-20 sm:pb-28">
        <div className="page-shell">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-violet-600 px-7 py-12 text-white sm:px-10 sm:py-16 lg:px-16 lg:py-20">
              <div className="dot-surface-dark pointer-events-none absolute inset-0 opacity-50" />
              <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-fuchsia-400/35 blur-[100px]" />
              <div className="relative grid gap-10 lg:grid-cols-12 lg:items-end">
                <div className="lg:col-span-8">
                  <span className="text-[0.67rem] font-semibold uppercase tracking-[0.22em] text-violet-100">Próximo passo</span>
                  <h2 className="mt-5 max-w-5xl text-balance text-4xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                    Vamos montar o digital da sua empresa em 15 dias.
                  </h2>
                </div>
                <div className="lg:col-span-4 lg:flex lg:justify-end">
                  <Link to="/diagnostico" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-violet-700 shadow-lg transition-transform hover:-translate-y-0.5">
                    Solicitar diagnóstico
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  </>
);

export default Home;
