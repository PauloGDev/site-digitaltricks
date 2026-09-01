import { ArrowUpRight, Facebook, Instagram, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { audiences } from "../data/automotiveData";
import { contact, solutionPillars } from "../data/siteData";

const Footer = () => (
  <footer className="relative border-t border-white/10 bg-black text-white">
    <div className="page-shell">
      <div className="grid gap-12 border-b border-white/10 py-16 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-5">
          <img src={logo} alt="Digital Tricks" className="h-12 w-auto" />
          <p className="mt-6 max-w-md text-base leading-8 text-white/[0.48]">Estrutura digital para oficinas, concessionárias e lojas de produtos automotivos. Sistema de gestão conectado para concessionárias.</p>
          <Link to="/diagnostico" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-violet-300 hover:text-violet-200">Solicitar diagnóstico <ArrowUpRight className="h-4 w-4" /></Link>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-4">
          <div>
            <span className="footer-label">Para seu negócio</span>
            <ul className="mt-5 space-y-3 text-sm text-white/[0.52]">{audiences.map((item) => <li key={item.slug}><Link to={`/para-seu-negocio/${item.slug}`} className="hover:text-white">{item.name}</Link></li>)}<li><Link to="/sistema-concessionarias" className="hover:text-white">Sistema de gestão</Link></li></ul>
          </div>
          <div>
            <span className="footer-label">Soluções</span>
            <ul className="mt-5 space-y-3 text-sm text-white/[0.52]">{solutionPillars.map((item) => <li key={item.slug}><Link to={`/solucoes/${item.slug}`} className="hover:text-white">{item.eyebrow}</Link></li>)}</ul>
          </div>
          <div>
            <span className="footer-label">Digital Tricks</span>
            <ul className="mt-5 space-y-3 text-sm text-white/[0.52]"><li><Link to="/metodo" className="hover:text-white">Método</Link></li><li><Link to="/sobre" className="hover:text-white">Sobre</Link></li><li><Link to="/diagnostico" className="hover:text-white">Diagnóstico</Link></li></ul>
          </div>
          <div>
            <span className="footer-label">Contato</span>
            <ul className="mt-5 space-y-4 text-sm text-white/[0.52]"><li><a href={contact.whatsappUrl} target="_blank" rel="noreferrer" className="flex gap-2 hover:text-white"><Phone className="mt-0.5 h-4 w-4 text-violet-300" />WhatsApp</a></li><li><a href={`mailto:${contact.email}`} className="flex gap-2 break-all hover:text-white"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-violet-300" />{contact.email}</a></li></ul>
            <div className="mt-7 flex gap-3"><a href={contact.instagram} target="_blank" rel="noreferrer" className="social-button" aria-label="Instagram"><Instagram className="h-4 w-4" /></a><a href={contact.facebook} target="_blank" rel="noreferrer" className="social-button" aria-label="Facebook"><Facebook className="h-4 w-4" /></a></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 py-7 text-xs text-white/[0.30] sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} Digital Tricks. Todos os direitos reservados.</p><div className="flex flex-wrap gap-x-5 gap-y-2"><Link to="/privacidade" className="hover:text-white">Privacidade</Link><Link to="/cookies" className="hover:text-white">Cookies</Link><Link to="/termos" className="hover:text-white">Termos</Link></div></div>
    </div>
  </footer>
);

export default Footer;
