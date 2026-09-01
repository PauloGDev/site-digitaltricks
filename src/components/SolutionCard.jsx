import {
  ArrowUpRight,
  LayoutTemplate,
  Megaphone,
  MessageSquareText,
  MousePointerClick,
  Palette,
} from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import { servicePreviewImages } from "../data/clientVisuals";

const icons = {
  LayoutTemplate,
  MessageSquareText,
  Palette,
  Megaphone,
  MousePointerClick,
};

const SolutionCard = ({ solution, index = 0 }) => {
  const Icon = icons[solution.icon] || LayoutTemplate;
  const previewImage = servicePreviewImages[solution.slug];
  const isDark = index % 3 === 0;

  return (
    <Reveal delay={index * 0.06} className="h-full">
      <Link
        to={`/solucoes/${solution.slug}`}
        className={`group flex h-full min-h-[32rem] flex-col overflow-hidden rounded-[1.6rem] border border-black/[0.08] transition-all duration-300 hover:-translate-y-1 ${isDark ? "bg-[#17151d] text-white" : index % 3 === 1 ? "bg-[#e9e3ff] text-[#17151d]" : "bg-white text-[#17151d]"}`}
      >
        <div className="relative h-64 overflow-hidden bg-[#0f0d14]">
          <img
            src={previewImage}
            alt={`Aplicação visual de ${solution.eyebrow}`}
            loading="lazy"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />
          <div className="absolute bottom-5 left-5 grid h-11 w-11 place-items-center rounded-2xl border border-white/20 bg-black/35 text-white backdrop-blur-md">
            <Icon className="h-5 w-5" />
          </div>
          <span className="absolute right-5 top-5 rounded-full border border-white/20 bg-black/35 px-3 py-2 text-[0.62rem] font-semibold tracking-[0.18em] text-white backdrop-blur-md">
            {solution.number}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6 sm:p-8">
          <span className={`text-[0.68rem] font-semibold uppercase tracking-[0.22em] ${isDark ? "text-violet-200" : "text-violet-700"}`}>
            {solution.eyebrow}
          </span>
          <h3 className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.035em]">
            {solution.title}
          </h3>
          <p className={`mt-4 text-sm leading-7 ${isDark ? "text-white/[0.58]" : "text-[#635d69]"}`}>
            {solution.shortDescription}
          </p>
          <div className="mt-auto flex items-center gap-2 pt-8 text-sm font-semibold">
            Explorar solução
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </div>
        </div>
      </Link>
    </Reveal>
  );
};

export default SolutionCard;
