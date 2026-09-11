import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
const CaseHighlight = ({ detail = false }) => <section className="section-space overflow-hidden bg-[#14111d] text-white">
  <div className="page-shell">
    <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end"><div className="max-w-3xl"><span className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">Caso de campanha</span><h2 className="mt-5 text-4xl font-semibold leading-[1.06] tracking-[-0.045em] sm:text-5xl">Quando estratégia e performance trabalham juntas.</h2></div>{!detail && <Link to="/resultados" className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-violet-200">Conhecer o caso <ArrowUpRight className="h-4 w-4" /></Link>}</div>
    <dl className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{[['R$ 906','Investidos em mídia'],['145','Conversas geradas'],['R$ 35.208','Faturamento atribuído'],['38,9x','Retorno sobre a mídia (ROAS)']].map(([value,label],i) => <div key={label} className={`rounded-2xl p-6 sm:p-7 ${i === 3 ? 'bg-violet-600' : 'border border-white/10 bg-white/[0.04]'}`}><dt className="text-xs leading-5 text-white/70">{label}</dt><dd className="mt-5 text-3xl font-semibold tracking-[-0.04em] xl:text-4xl">{value}</dd></div>)}</dl>
    <p className="mt-6 max-w-4xl text-xs leading-6 text-white/60">Dados apresentados no material comercial da Digital Tricks. ROAS relaciona faturamento atribuído e investimento em mídia; não representa lucro. Cada operação tem características próprias e resultados anteriores não garantem desempenho futuro.</p>
  </div>
</section>;
CaseHighlight.propTypes = { detail: PropTypes.bool };
export default CaseHighlight;
