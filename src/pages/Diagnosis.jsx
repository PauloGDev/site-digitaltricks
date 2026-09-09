import { useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import Seo from "../components/Seo";
import { solutionPillars } from "../data/siteData";
import { contact } from "../data/siteData";

const Diagnosis = () => {
  const [sending, setSending] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.name.value.trim();
    const company = form.company.value.trim();
    const whatsapp = form.whatsapp.value.trim();
    const interests = Array.from(form.querySelectorAll('input[name="interests"]:checked')).map(el => el.value);

    const message = [
      `Nome: ${name}`,
      `Empresa: ${company}`,
      `WhatsApp: ${whatsapp}`,
      `Frentes de interesse: ${interests.length ? interests.join(", ") : "Nenhuma selecionada"}`,
      "",
      "Digital Tricks — diagnóstico recebido via site.",
    ].join("\n");

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${contact.whatsapp.replace(/\D/g, "")}?text=${encoded}`, "_blank", "noopener noreferrer");
  };

  return (
    <>
      <Seo title="Diagnóstico" description="Solicite uma avaliação da estrutura digital ou do sistema de gestão para sua operação." path="/diagnostico" />
      <PageHero eyebrow="Diagnóstico" title="Antes de propor, precisamos entender a operação." description="Conte-nos sobre seu negócio e quais frentes precisam ser avaliadas." />
      <section className="section-space bg-[#f7f6f9] text-[#17151d]">
        <div className="page-shell grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4"><div className="lg:sticky lg:top-28"><span className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-violet-700">O que acontece depois</span><ol className="mt-8 space-y-6">{[["01", "Analisamos o segmento e o momento comercial."], ["02", "Aprofundamos operação, canais e capacidade."], ["03", "Definimos prioridades, dependências e caminhos."], ["04", "Apresentamos o escopo adequado."]].map(([number, text]) => <li key={number} className="flex gap-4 border-t border-black/10 pt-5"><span className="text-xs font-semibold tracking-[0.18em] text-violet-700">{number}</span><p className="text-sm leading-7 text-[#68626e]">{text}</p></li>)}</ol><a href={contact.whatsappUrl} target="_blank" rel="noreferrer" className="mt-9 inline-flex items-center gap-2 text-sm font-semibold text-violet-700">Prefere falar diretamente? <ExternalLink className="h-4 w-4" /></a></div></Reveal>
          <Reveal delay={0.08} className="lg:col-span-8">
            <form onSubmit={onSubmit} className="rounded-[2rem] border border-black/[0.08] bg-white p-6 shadow-[0_25px_70px_rgba(38,29,63,0.08)] sm:p-9 lg:p-12">
              <input type="checkbox" name="botcheck" className="hidden" tabIndex="-1" autoComplete="off" />
              <div className="form-section">
                <div className="form-section-heading"><span>01</span><div><h2>Dados de contato</h2><p>Nome, empresa e WhatsApp para retornarmos.</p></div></div>
                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  <label className="field-label">Seu nome<input className="field-input" name="name" required autoComplete="name" /></label>
                  <label className="field-label">Empresa<input className="field-input" name="company" required autoComplete="organization" /></label>
                  <label className="field-label sm:col-span-2">WhatsApp<input className="field-input" name="whatsapp" type="tel" required autoComplete="tel" placeholder="(00) 00000-0000" /></label>
                </div>
              </div>

              <div className="form-section">
                <div className="form-section-heading"><span>02</span><div><h2>Frentes de interesse</h2><p>O que precisa ser avaliado?</p></div></div>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {solutionPillars.map((item) => (
                    <label key={item.slug} className="choice-card">
                      <input type="checkbox" name="interests" value={item.eyebrow} />
                      <span><strong>{item.eyebrow}</strong><small>{item.shortDescription}</small></span>
                    </label>
                  ))}
                  <label className="choice-card">
                    <input type="checkbox" name="interests" value="Sistema de gestão" />
                    <span><strong>Sistema de gestão</strong><small>WhatsApp, estoque, vendas, clientes, funcionários e indicadores.</small></span>
                  </label>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-5 border-t border-black/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
                <button type="submit" disabled={sending} className="home-button-dark justify-center sm:min-w-56">
                  {sending ? "Abrindo WhatsApp..." : "Enviar diagnóstico"}
                  {!sending && <ArrowRight className="h-4 w-4" />}
                </button>
                <p className="text-xs leading-5 text-[#827b87]">Será aberto o WhatsApp com uma mensagem pré-definida.</p>
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Diagnosis;
