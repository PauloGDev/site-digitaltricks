import { ArrowRight, ArrowUpRight, CarFront, ShoppingBag, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import CTASection from "../components/CTASection";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import Seo from "../components/Seo";
import { audiences } from "../data/automotiveData";

const icons = { oficinas: Wrench, concessionarias: CarFront, "lojas-automotivas": ShoppingBag };

const Audiences = () => (
  <>
    <Seo title="Para seu negócio" description="Estrutura digital especializada para oficinas, concessionárias e lojas de produtos automotivos." path="/para-seu-negocio" />
    <PageHero
      eyebrow="Mercado automotivo"
      title="Uma estrutura diferente para cada operação."
      description="Oficinas vendem confiança técnica. Concessionárias precisam conectar estoque, leads e equipe. Lojas precisam transformar catálogo em marca e venda. A estratégia começa por essa diferença."
    />

    <section className="section-space bg-white text-[#17151d]">
      <div className="page-shell">
        <div className="space-y-5">
          {audiences.map((audience, index) => {
            const Icon = icons[audience.slug];
            return (
              <Reveal key={audience.slug} delay={index * 0.05}>
                <Link to={`/para-seu-negocio/${audience.slug}`} className={`group grid overflow-hidden rounded-[1.8rem] lg:grid-cols-12 ${audience.accent}`}>
                  <div className="relative min-h-[22rem] overflow-hidden lg:col-span-5 lg:min-h-[30rem]">
                    <img src={audience.image} alt={audience.imageAlt} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.025]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <span className="absolute left-6 top-6 grid h-12 w-12 place-items-center rounded-2xl border border-white/15 bg-black/25 text-white backdrop-blur-md"><Icon className="h-5 w-5" /></span>
                  </div>
                  <div className="flex flex-col justify-between gap-12 p-7 sm:p-10 lg:col-span-7 lg:p-12">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-[0.66rem] font-semibold uppercase tracking-[0.2em] opacity-55">{audience.eyebrow}</span>
                      <span className="text-xs font-semibold tracking-[0.18em] opacity-40">{audience.number}</span>
                    </div>
                    <div>
                      <h2 className="max-w-4xl text-balance text-4xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl">{audience.title}</h2>
                      <div className="mt-7 flex items-end justify-between gap-6">
                        <p className="max-w-2xl text-sm leading-7 opacity-65 sm:text-base">{audience.shortDescription}</p>
                        <ArrowUpRight className="h-6 w-6 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-16 rounded-[1.8rem] border border-black/[0.08] bg-[#f2eff8] p-7 sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <span className="home-eyebrow">Concessionárias</span>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.045em] sm:text-5xl">Além da aquisição, uma operação conectada.</h2>
              <p className="mt-5 max-w-3xl text-base leading-8 text-[#66606c]">O sistema de gestão da Digital Tricks reúne WhatsApp, estoque, vendas, clientes, funcionários e indicadores para acompanhar a jornada depois que o lead chega.</p>
            </div>
            <div className="lg:col-span-4 lg:flex lg:justify-end">
              <Link to="/sistema-concessionarias" className="home-button-dark">Conhecer o sistema <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    <CTASection title="Qual é o próximo movimento do seu negócio automotivo?" description="Conte-nos como a operação funciona hoje para definirmos a estrutura digital adequada ao segmento, ao público e à capacidade comercial." />
  </>
);

export default Audiences;
