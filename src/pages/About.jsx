import { ArrowRight, Crosshair, Gauge, Network, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import CTASection from "../components/CTASection";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import Seo from "../components/Seo";

const About = () => (
  <>
    <Seo title="Sobre" description="A Digital Tricks estrutura aquisição, presença e operação digital para negócios automotivos." path="/sobre" />
    <PageHero eyebrow="Sobre a Digital Tricks" title="Especialização para entender antes de executar." description="Atendemos oficinas, concessionárias e lojas automotivas porque estratégia digital só funciona quando respeita a operação que existe por trás da tela.">
      <Link to="/para-seu-negocio" className="home-button-dark mt-9 w-fit">Ver quem atendemos <ArrowRight className="h-4 w-4" /></Link>
    </PageHero>

    <section className="section-space bg-white text-[#17151d]">
      <div className="page-shell grid gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-5"><SectionHeading eyebrow="Nossa função" title="Conectar percepção, aquisição e operação." /></Reveal>
        <Reveal delay={0.08} className="lg:col-span-7"><div className="space-y-7 text-lg leading-9 text-[#625d69]"><p>Uma empresa automotiva pode ter boa equipe, estoque e produto, mas perder oportunidades quando aparece de forma genérica, anuncia sem página adequada ou atende sem histórico.</p><p>A Digital Tricks organiza a camada digital dessa operação: define o posicionamento, constrói páginas, produz campanhas e estrutura aquisição.</p><p className="rounded-[1.5rem] bg-[#f2effa] p-7 font-medium text-[#302a37]">Para concessionárias, avançamos também sobre a operação com um sistema que conecta WhatsApp, estoque, clientes, vendas, funcionários e indicadores.</p></div></Reveal>
      </div>
    </section>

    <section className="section-space bg-[#eae8ef] text-[#17151d]">
      <div className="page-shell">
        <Reveal><SectionHeading eyebrow="Como pensamos" title="Quatro princípios para não confundir movimento com avanço." className="max-w-5xl" /></Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            [Wrench, "Operação primeiro", "A estratégia precisa caber na capacidade, no atendimento e na realidade comercial."],
            [Crosshair, "Objetivo claro", "Cada página e campanha precisa conduzir a uma ação mensurável."],
            [Network, "Informação conectada", "Marketing, atendimento e resultado precisam compartilhar contexto."],
            [Gauge, "Evolução mensurável", "Decisões melhores nascem de dados digitais combinados ao retorno comercial."],
          ].map(([Icon, title, description], index) => <Reveal key={title} delay={index * 0.04}><article className={`h-full min-h-[22rem] rounded-[1.6rem] p-7 ${index === 1 ? "bg-violet-600 text-white" : "bg-white"}`}><Icon className={`h-6 w-6 ${index === 1 ? "text-violet-100" : "text-violet-700"}`} /><h3 className="mt-16 text-xl font-semibold">{title}</h3><p className={`mt-4 text-sm leading-7 ${index === 1 ? "text-violet-100/75" : "text-[#68626e]"}`}>{description}</p></article></Reveal>)}
        </div>
      </div>
    </section>
    <CTASection title="Seu negócio automotivo precisa de uma direção própria." />
  </>
);

export default About;
