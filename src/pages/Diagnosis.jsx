import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import Seo from "../components/Seo";
import { solutionPillars, contact } from "../data/siteData";
import { normalizePhone, createDiagnosisUrl } from "../utils/diagnosis.js";

const Diagnosis = () => {
  const [preparedUrl, setPreparedUrl] = useState("");
  const [validationError, setValidationError] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const fields = form.elements;
    for (const key of ['name', 'company']) {
      fields.namedItem(key).setCustomValidity(fields.namedItem(key).value.trim().length < 2 ? 'Preencha este campo com pelo menos 2 caracteres.' : '');
    }
    const phoneField = fields.namedItem('whatsapp');
    const whatsapp = normalizePhone(phoneField.value);
    phoneField.setCustomValidity(whatsapp ? '' : 'Informe um telefone brasileiro com DDD. Exemplo: (85) 99999-9999.');
    if (!form.checkValidity()) {
      const invalidField = form.querySelector(':invalid');
      setValidationError(invalidField.validationMessage);
      invalidField.focus();
      return;
    }
    setValidationError('');
    const data = new FormData(form);
    const url = createDiagnosisUrl({ name: data.get('name'), company: data.get('company'), whatsapp, interests: data.getAll('interests') }, contact.whatsapp);
    setPreparedUrl(url);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <Seo title="Diagnóstico" description="Solicite uma avaliação da estrutura digital ou do sistema de gestão para sua operação." path="/diagnostico" />
      <PageHero eyebrow="Diagnóstico" title="Antes de propor, precisamos entender a operação." description="Conte-nos sobre seu negócio e quais frentes precisam ser avaliadas." />
      <section className="section-space bg-[#f7f6f9] text-[#17151d]">
        <div className="page-shell grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4"><div className="lg:sticky lg:top-28"><span className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-violet-700">O que acontece depois</span><ol className="mt-8 space-y-6">{[["01", "Analisamos o segmento e o momento comercial."], ["02", "Aprofundamos operação, canais e capacidade."], ["03", "Definimos prioridades, dependências e caminhos."], ["04", "Apresentamos o escopo adequado."]].map(([number, text]) => <li key={number} className="flex gap-4 border-t border-black/10 pt-5"><span className="text-xs font-semibold tracking-[0.18em] text-violet-700">{number}</span><p className="text-sm leading-7 text-[#68626e]">{text}</p></li>)}</ol><a href={contact.whatsappUrl} target="_blank" rel="noreferrer" className="mt-9 inline-flex items-center gap-2 text-sm font-semibold text-violet-700">Prefere falar diretamente? <ExternalLink className="h-4 w-4" /></a></div></Reveal>
          <Reveal delay={0.08} className="lg:col-span-8">
            <form onSubmit={onSubmit} onChange={() => setPreparedUrl('')} onInput={(event) => { event.target.setCustomValidity?.(''); setValidationError(''); }} className="rounded-[2rem] border border-black/[0.08] bg-white p-6 shadow-[0_25px_70px_rgba(38,29,63,0.08)] sm:p-9 lg:p-12">
              <div className="form-section">
                <div className="form-section-heading"><span>01</span><div><h2>Dados de contato</h2><p>Nome, empresa e WhatsApp para retornarmos.</p></div></div>
                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  <label className="field-label">Seu nome<input className="field-input" name="name" required minLength={2} maxLength={100} autoComplete="name" /></label>
                  <label className="field-label">Empresa<input className="field-input" name="company" required minLength={2} maxLength={120} autoComplete="organization" /></label>
                  <label className="field-label sm:col-span-2">WhatsApp<input className="field-input" name="whatsapp" type="tel" inputMode="tel" required maxLength={22} autoComplete="tel" aria-describedby="phone-help" placeholder="(85) 99999-9999" /><span id="phone-help" className="text-xs font-normal leading-5 text-[#68626e]">Informe o DDD e o número. O código +55 é opcional.</span></label>
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
                <button type="submit" className="home-button-dark justify-center sm:min-w-56">
                  Continuar no WhatsApp
                  <ArrowRight className="h-4 w-4" />
                </button>
                <p className="text-xs leading-5 text-[#68626e]">Revise e envie a mensagem no WhatsApp para concluir sua solicitação. O formulário não envia seus dados automaticamente.</p>
              </div>
              {validationError && <p role="alert" className="mt-4 rounded-xl border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-800">{validationError}</p>}
              <p className="mt-5 text-xs leading-6 text-[#68626e]">Seus dados serão usados para atender sua solicitação. <Link to="/privacidade" className="font-semibold text-violet-700 underline underline-offset-4">Leia a Política de Privacidade.</Link></p>
              <div role="status" aria-live="polite">
                {preparedUrl && <p className="mt-5 rounded-xl border border-violet-200 bg-violet-50 p-4 text-sm leading-6 text-violet-900">Mensagem preparada. Conclua o envio no WhatsApp. Se a nova aba não abriu, <a href={preparedUrl} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-4">abra a mensagem aqui</a>.</p>}
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Diagnosis;
