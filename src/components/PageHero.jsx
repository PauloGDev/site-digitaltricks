import Reveal from "./Reveal";
import heroVisual from "../assets/sobre-home.jpg";

const PageHero = ({ eyebrow, title, description, aside, children }) => (
  <section className="relative overflow-hidden bg-[#e9e7ef] pb-16 pt-28 text-[#17151d] sm:pb-24 sm:pt-32">
    <div className="dot-surface-light pointer-events-none absolute inset-0 opacity-70" />
    <div className="pointer-events-none absolute -left-32 top-12 h-80 w-80 rounded-full bg-violet-300/35 blur-[100px]" />

    <div className="page-shell relative">
      <div className="grid min-h-[36rem] overflow-hidden rounded-[2rem] border border-black/[0.08] bg-[#fbfaff] shadow-[0_30px_90px_rgba(38,29,63,0.12)] lg:grid-cols-12">
        <Reveal className="flex flex-col justify-end p-7 sm:p-10 lg:col-span-7 lg:p-14">
          <div className="mb-7 flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-violet-700">
            <span className="h-px w-8 bg-violet-500" />
            {eyebrow}
          </div>
          <h1 className="max-w-5xl text-balance text-4xl font-semibold leading-[0.96] tracking-[-0.06em] sm:text-6xl lg:text-[4.7rem]">
            {title}
          </h1>
          <p className="mt-7 max-w-3xl text-base leading-8 text-[#615c68] sm:text-lg">
            {description}
          </p>
          {children}
        </Reveal>

        <Reveal delay={0.1} className="relative min-h-[25rem] lg:col-span-5 lg:min-h-full">
          <img
            src={heroVisual}
            alt="Forma tridimensional abstrata"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#15121c]/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-white/90 p-5 text-[#17151d] shadow-xl backdrop-blur-md sm:bottom-8 sm:left-8 sm:right-8">
            <span className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-violet-700">
              Digital Tricks
            </span>
            <p className="mt-3 text-sm leading-6 text-[#56515d]">
              {aside ||
                "Posicionamento e execução trabalhando juntos para colocar a estrutura digital inicial em funcionamento em 15 dias."}
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export default PageHero;
