import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { serviceVisuals } from "../data/clientVisuals";

const galleryCopy = {
  sites: {
    eyebrow: "Landing pages e sites em funcionamento",
    title: "Da presença institucional ao sistema sob medida.",
    description: "Interfaces reais que mostram como estratégia, direção visual e desenvolvimento se encontram em sites, portfólios e plataformas web.",
  },
};

const getGridClass = (length, index) => {
  if (length === 5) {
    return ["lg:col-span-12", "lg:col-span-6", "lg:col-span-6", "lg:col-span-7", "lg:col-span-5"][index];
  }

  if (length === 7) {
    return ["lg:col-span-5", "lg:col-span-7", "lg:col-span-6", "lg:col-span-6", "lg:col-span-6", "lg:col-span-6", "lg:col-span-12"][index];
  }

  if (length === 6) {
    return ["lg:col-span-5", "lg:col-span-7", "lg:col-span-6", "lg:col-span-6", "lg:col-span-4", "lg:col-span-8"][index];
  }

  if (length > 2) {
    return index === 0 ? "lg:col-span-7" : index === 1 ? "lg:col-span-5" : "lg:col-span-12";
  }

  return "";
};

const ClientVisualGallery = ({ slug }) => {
  const visuals = serviceVisuals[slug] || [];
  const copy = galleryCopy[slug] || {
    eyebrow: "Direção visual aplicada",
    title: "Marca, mensagem e execução no mesmo sistema.",
    description: "Algumas aplicações reais e novas variações de campanha para mostrar como a estratégia ganha forma nos canais.",
  };

  if (!visuals.length) return null;

  return (
    <section id="direcao-visual" className="section-space overflow-hidden bg-[#17151d] text-white">
      <div className="page-shell">
        <Reveal>
          <SectionHeading
            dark
            eyebrow={copy.eyebrow}
            title={copy.title}
            description={copy.description}
            className="max-w-4xl"
          />
        </Reveal>

        <div className={`mt-12 grid gap-4 ${visuals.length > 2 ? "lg:grid-cols-12" : "lg:grid-cols-2"}`}>
          {visuals.map((visual, index) => (
            <Reveal
              key={`${visual.brand}-${visual.label}`}
              delay={index * 0.06}
              className={getGridClass(visuals.length, index)}
            >
              <figure className={`group relative h-full overflow-hidden rounded-[1.75rem] ${visual.backgroundClass || "bg-black"} ${visuals.length === 5 && index === 0 ? "min-h-[26rem] sm:min-h-[34rem]" : visual.tall ? "min-h-[30rem] sm:min-h-[39rem]" : visual.portrait ? "min-h-[32rem] sm:min-h-[35rem]" : "min-h-[24rem]"}`}>
                <img
                  src={visual.image}
                  alt={visual.alt}
                  loading="lazy"
                  className={`absolute inset-0 h-full w-full transition duration-700 group-hover:scale-[1.025] ${visual.fit === "contain" ? "object-contain p-4 pb-20 sm:p-8 sm:pb-24" : "object-cover"}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <figcaption className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-5 p-6 sm:p-8">
                  <div>
                    <span className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-violet-200">{visual.label}</span>
                    <p className="mt-2 text-xl font-semibold tracking-[-0.025em]">{visual.brand}</p>
                  </div>
                  <span className="rounded-full border border-white/20 bg-black/30 px-3 py-2 text-[0.58rem] font-semibold uppercase tracking-[0.16em] backdrop-blur-md">
                    Aplicação visual
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientVisualGallery;
