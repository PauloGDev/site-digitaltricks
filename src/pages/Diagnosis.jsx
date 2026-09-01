import { useState } from "react";
import { ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import Seo from "../components/Seo";
import { audiences } from "../data/automotiveData";
import { contact, solutionPillars } from "../data/siteData";

const Diagnosis = () => {
  const [searchParams] = useSearchParams();
  const isSystemDiagnosis = searchParams.get("interesse") === "sistema";
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [sending, setSending] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;
    if (!accessKey) {
      setStatus({ type: "error", message: "O envio pelo site está temporariamente indisponível. Fale conosco pelo WhatsApp." });
      return;
    }
    setSending(true);
    setStatus({ type: "idle", message: "" });
    const formData = new FormData(form);
    formData.append("access_key", accessKey);
    formData.append("subject", "Novo diagnóstico automotivo — Digital Tricks");
    formData.append("from_name", "Site Digital Tricks");
    try {
      const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      const data = await response.json();
      if (!response.ok || !data.success) throw new Error(data.message || "Não foi possível enviar.");
      form.reset();
      setStatus({ type: "success", message: "Recebemos as informações. Nossa equipe entrará em contato para aprofundar o cenário." });
    } catch (error) {
      console.error(error);
      setStatus({ type: "error", message: "Não foi possível enviar agora. Continue pelo WhatsApp." });
    } finally { setSending(false); }
  };

  return (
    <>
      <Seo title="Diagnóstico automotivo" description="Solicite uma avaliação da estrutura digital ou do sistema de gestão para sua operação automotiva." path="/diagnostico" />
      <PageHero eyebrow="Diagnóstico automotivo" title="Antes de propor, precisamos entender a operação." description="Conte-nos se você administra uma oficina, concessionária ou loja automotiva e qual movimento precisa acontecer agora." />
      <section className="section-space bg-[#f7f6f9] text-[#17151d]">
        <div className="page-shell grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4"><div className="lg:sticky lg:top-28"><span className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-violet-700">O que acontece depois</span><ol className="mt-8 space-y-6">{[["01", "Analisamos o segmento e o momento comercial."], ["02", "Aprofundamos operação, canais e capacidade."], ["03", "Definimos prioridades, dependências e caminhos."], ["04", "Apresentamos o escopo adequado."]].map(([number, text]) => <li key={number} className="flex gap-4 border-t border-black/10 pt-5"><span className="text-xs font-semibold tracking-[0.18em] text-violet-700">{number}</span><p className="text-sm leading-7 text-[#68626e]">{text}</p></li>)}</ol><a href={contact.whatsappUrl} target="_blank" rel="noreferrer" className="mt-9 inline-flex items-center gap-2 text-sm font-semibold text-violet-700">Prefere falar diretamente? <ExternalLink className="h-4 w-4" /></a></div></Reveal>
          <Reveal delay={0.08} className="lg:col-span-8">
            <form onSubmit={onSubmit} className="rounded-[2rem] border border-black/[0.08] bg-white p-6 shadow-[0_25px_70px_rgba(38,29,63,0.08)] sm:p-9 lg:p-12">
              <input type="checkbox" name="botcheck" className="hidden" tabIndex="-1" autoComplete="off" />
              <div className="form-section"><div className="form-section-heading"><span>01</span><div><h2>Empresa e responsável</h2><p>Informações básicas para contextualizar o atendimento.</p></div></div><div className="mt-8 grid gap-5 sm:grid-cols-2"><label className="field-label">Seu nome<input className="field-input" name="name" required autoComplete="name" /></label><label className="field-label">E-mail<input className="field-input" name="email" type="email" required autoComplete="email" /></label><label className="field-label">WhatsApp<input className="field-input" name="phone" type="tel" required autoComplete="tel" /></label><label className="field-label">Empresa<input className="field-input" name="company" required autoComplete="organization" /></label></div><label className="field-label mt-5">Site, perfil ou catálogo atual<input className="field-input" name="current_presence" placeholder="https://" /></label></div>

              <div className="form-section"><div className="form-section-heading"><span>02</span><div><h2>Tipo de operação</h2><p>Selecione a opção mais próxima do negócio.</p></div></div><div className="mt-8 grid gap-3 sm:grid-cols-3">{audiences.map((item) => <label key={item.slug} className="choice-card"><input type="radio" name="business_type" value={item.name} required defaultChecked={isSystemDiagnosis && item.slug === "concessionarias"} /><span><strong>{item.name}</strong><small>{item.shortDescription}</small></span></label>)}</div></div>

              <div className="form-section"><div className="form-section-heading"><span>03</span><div><h2>Frentes de interesse</h2><p>Marque o que precisa ser avaliado.</p></div></div><div className="mt-8 grid gap-3 sm:grid-cols-2">{solutionPillars.map((item) => <label key={item.slug} className="choice-card"><input type="checkbox" name="interests" value={item.eyebrow} /><span><strong>{item.eyebrow}</strong><small>{item.shortDescription}</small></span></label>)}<label className="choice-card"><input type="checkbox" name="interests" value="Sistema para concessionárias" defaultChecked={isSystemDiagnosis} /><span><strong>Sistema para concessionárias</strong><small>WhatsApp, estoque, vendas, clientes, funcionários e indicadores.</small></span></label></div></div>

              <div className="form-section"><div className="form-section-heading"><span>04</span><div><h2>Objetivo e contexto</h2><p>O que precisa mudar na operação?</p></div></div><label className="field-label mt-8">Principal dificuldade<textarea className="field-input min-h-32 resize-y" name="main_challenge" required /></label><label className="field-label mt-5">Resultado esperado nos próximos meses<textarea className="field-input min-h-32 resize-y" name="objective" required /></label><div className="mt-5 grid gap-5 sm:grid-cols-2"><label className="field-label">Tamanho da equipe<select className="field-input" name="team_size" required defaultValue=""><option value="" disabled>Selecione</option><option>1 a 5 pessoas</option><option>6 a 15 pessoas</option><option>16 a 49 pessoas</option><option>50 ou mais</option></select></label><label className="field-label">Prazo desejado<select className="field-input" name="desired_timeline" required defaultValue=""><option value="" disabled>Selecione</option><option>Quero começar agora</option><option>Nos próximos 30 dias</option><option>Nos próximos 3 meses</option><option>Ainda estou avaliando</option></select></label></div></div>

              <label className="mt-8 flex items-start gap-3 text-sm leading-6 text-[#68626e]"><input type="checkbox" name="privacy_consent" required className="mt-1 accent-violet-500" /><span>Concordo com o uso destas informações para o atendimento, conforme a <a href="/privacidade" className="text-violet-700 underline underline-offset-4">Política de Privacidade</a>.</span></label>
              <div className="mt-8 flex flex-col gap-5 border-t border-black/10 pt-8 sm:flex-row sm:items-center sm:justify-between"><button type="submit" disabled={sending} className="home-button-dark justify-center sm:min-w-56">{sending ? "Enviando..." : "Enviar diagnóstico"}{!sending && <ArrowRight className="h-4 w-4" />}</button><p className="text-xs leading-5 text-[#827b87]">As informações serão usadas somente para o atendimento.</p></div>
              {status.message && <div className={`mt-6 flex items-start gap-3 border p-4 text-sm leading-6 ${status.type === "success" ? "border-emerald-400/40 bg-emerald-50 text-emerald-800" : "border-amber-400/40 bg-amber-50 text-amber-900"}`} role="status" aria-live="polite">{status.type === "success" && <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />}<span>{status.message}</span></div>}
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Diagnosis;
