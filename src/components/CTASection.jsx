import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";

const CTASection = ({
  eyebrow = "Próximo passo",
  title = "Vamos montar o digital da sua empresa em 15 dias?",
  description = "Conte-nos o momento atual para definirmos o posicionamento, o escopo inicial e o cronograma de implantação.",
}) => (
  <section className="bg-[#f7f6f9] pb-20 pt-8 sm:pb-28 sm:pt-12">
    <div className="page-shell">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-violet-600 px-7 py-12 text-white sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div className="dot-surface-dark pointer-events-none absolute inset-0 opacity-45" />
          <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-fuchsia-400/30 blur-[100px]" />
          <div className="relative grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <span className="text-[0.67rem] font-semibold uppercase tracking-[0.22em] text-violet-100">
                {eyebrow}
              </span>
              <h2 className="mt-5 max-w-5xl text-balance text-4xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                {title}
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-violet-100/80 sm:text-lg">
                {description}
              </p>
            </div>
            <div className="lg:col-span-4 lg:flex lg:justify-end">
              <Link to="/diagnostico" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-violet-700 shadow-lg transition-transform hover:-translate-y-0.5">
                Quero meu digital em 15 dias
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default CTASection;
