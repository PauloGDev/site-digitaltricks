import { ArrowRight, Check, Clock3, Layers3, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import CTASection from "../components/CTASection";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import Seo from "../components/Seo";
import { methodSteps } from "../data/siteData";

const Method = () => (
  <>
    <Seo title="Método" description="Entenda como a Digital Tricks define, aprova e produz a estrutura digital automotiva em 15 dias." path="/metodo" />
    <PageHero eyebrow="Método Digital Tricks" title="Os 15 dias começam depois que a direção está aprovada." description="Diagnóstico, estratégia, escopo, materiais e acessos são resolvidos antes da contagem. O ciclo de produção começa com uma decisão clara sobre o que será construído.">
      <Link to="/diagnostico" className="home-button-dark mt-9 w-fit">Começar pelo diagnóstico <ArrowRight className="h-4 w-4" /></Link>
    </PageHero>

    <section className="section-space bg-white text-[#17151d]">
      <div className="page-shell">
        <Reveal><SectionHeading eyebrow="A sequência" title="Direção antes de velocidade." description="O método reduz retrabalho porque a equipe só inicia a produção depois de validar o que o negócio precisa comunicar, captar e acompanhar." className="max-w-5xl" /></Reveal>
        <div className="mt-14 space-y-4">
          {methodSteps.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.04}>
              <article className={`grid gap-5 rounded-[1.6rem] p-6 sm:p-8 lg:grid-cols-[5rem_1fr_1.15fr] lg:items-center ${index === 2 ? "bg-violet-600 text-white" : "border border-black/[0.08] bg-[#f7f6f9]"}`}>
                <span className={`text-xs font-semibold tracking-[0.18em] ${index === 2 ? "text-violet-100" : "text-violet-700"}`}>{step.number}</span>
                <h2 className="text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">{step.title}</h2>
                <p className={`text-sm leading-7 sm:text-base ${index === 2 ? "text-violet-100/75" : "text-[#68626e]"}`}>{step.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className="section-space bg-[#17151d] text-white">
      <div className="page-shell grid gap-4 md:grid-cols-3">
        {[
          [Clock3, "15 dias não são resultado", "O prazo corresponde à produção e ativação do escopo aprovado. Campanhas precisam de dados, atendimento e otimização para amadurecer."],
          [Layers3, "Complexidade muda o prazo", "Grandes catálogos, integrações, migrações e múltiplas unidades recebem cronograma próprio."],
          [ShieldCheck, "Software tem implantação própria", "O sistema para concessionárias passa por diagnóstico técnico, configuração, importação, testes e treinamento."],
        ].map(([Icon, title, description], index) => (
          <Reveal key={title} delay={index * 0.05}><article className="h-full min-h-[24rem] rounded-[1.6rem] border border-white/10 bg-white/[0.025] p-7"><Icon className="h-6 w-6 text-violet-300" /><h3 className="mt-16 text-2xl font-semibold tracking-[-0.035em]">{title}</h3><p className="mt-5 text-sm leading-7 text-white/50">{description}</p></article></Reveal>
        ))}
      </div>
    </section>

    <section className="section-space bg-[#eae8ef] text-[#17151d]">
      <div className="page-shell grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5"><SectionHeading eyebrow="Responsabilidades" title="Um cronograma só funciona quando os dois lados avançam." /></Reveal>
        <Reveal delay={0.08} className="lg:col-span-7"><div className="rounded-[1.7rem] bg-white p-7 sm:p-10"><div className="space-y-5">{["Digital Tricks apresenta estratégia, escopo, dependências e cronograma.", "O cliente valida informações técnicas, ofertas, preços e condições comerciais.", "Materiais, acessos e retornos são disponibilizados nos marcos combinados.", "Alterações fora do escopo são avaliadas antes de entrar na produção.", "Campanhas e páginas são acompanhadas depois da ativação quando houver operação recorrente."].map((item) => <div key={item} className="flex gap-3 border-t border-black/10 pt-5 first:border-0 first:pt-0"><Check className="mt-1 h-4 w-4 shrink-0 text-violet-700" /><p className="text-sm leading-7 text-[#625d69]">{item}</p></div>)}</div></div></Reveal>
      </div>
    </section>
    <CTASection title="Primeiro alinhamos a direção. Depois, a produção começa." />
  </>
);

export default Method;
