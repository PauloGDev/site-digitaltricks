import Reveal from "./Reveal";
import heroVisual from "../assets/client-work/alucar-campaign.webp";

const PageHero = ({ eyebrow, title, description, children }) => (
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
            alt="Campanha visual desenvolvida para o mercado automotivo"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#15121c]/80 via-transparent to-transparent" />
        </Reveal>
      </div>
    </div>
  </section>
);

export default PageHero;
