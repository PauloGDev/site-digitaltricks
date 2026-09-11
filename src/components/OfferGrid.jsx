import PropTypes from 'prop-types';
import { ArrowUpRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { diagnosisLink, money } from '../data/commercial';

const OfferGrid = ({ offers }) => <div className={`grid gap-5 ${offers.length === 2 ? 'lg:grid-cols-2' : offers.length > 2 ? 'lg:grid-cols-3' : 'max-w-3xl'}`}>
  {offers.map(offer => <article key={offer.id} className="flex min-w-0 flex-col rounded-[1.75rem] border border-violet-200/60 bg-white p-6 text-[#17151d] shadow-[0_15px_50px_rgba(38,29,63,0.05)] sm:p-8">
    <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-violet-700">{offer.name}</h3>
    <p className="mt-6 text-xs text-[#68626e]">{offer.starting ? 'A partir de' : 'Investimento mensal'}</p>
    <p className="mt-1 flex flex-wrap items-baseline gap-1"><strong className="text-4xl font-semibold tracking-[-0.05em]">{money(offer.price)}</strong>{offer.monthly && <span className="text-sm text-[#68626e]">/mês</span>}</p>
    {offer.savings && <p className="mt-3 text-sm font-semibold text-violet-700">Economia de {money(offer.savings)}/mês</p>}
    <p className="mt-5 text-sm leading-6 text-[#68626e]">{offer.audience}</p>
    <ul className="my-7 space-y-3 border-t border-black/10 pt-6">{offer.items.map(item => <li key={item} className="flex gap-3 text-sm leading-6"><Check aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-violet-600" />{item}</li>)}</ul>
    {offer.deadline && <p className="mb-6 text-xs font-medium leading-5 text-violet-700">Entrega estimada: {offer.deadline}</p>}
    <Link to={diagnosisLink(offer.service, offer.id)} className="home-button-dark mt-auto justify-center">Quero {offer.name === 'Landing page' ? 'uma landing page' : offer.name === 'Site institucional' ? 'um site' : offer.name === 'E-commerce' ? 'um e-commerce' : `o ${offer.name}`}<ArrowUpRight className="h-4 w-4 shrink-0" /></Link>
  </article>)}
</div>;
OfferGrid.propTypes = { offers: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired, service: PropTypes.string.isRequired, name: PropTypes.string.isRequired, price: PropTypes.number.isRequired, monthly: PropTypes.bool, starting: PropTypes.bool, savings: PropTypes.number, audience: PropTypes.string, items: PropTypes.arrayOf(PropTypes.string).isRequired, deadline: PropTypes.string })).isRequired };
export default OfferGrid;
