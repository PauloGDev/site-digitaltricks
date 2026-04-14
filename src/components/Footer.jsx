import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, Phone } from "lucide-react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="relative text-white overflow-hidden">
      {/* Efeito de brilho suave no fundo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_60%)] pointer-events-none" />

      {/* Conteúdo principal */}
      <div className="relative container mx-auto px-6 sm:px-12 lg:px-20 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 z-10">
        {/* Logo e descrição */}
        <div>
          <img src={assets.logo} alt="Digital Tricks Logo" className="w-28 mb-5" />
          <p className="text-sm text-gray-200 leading-relaxed max-w-xs">
            Desenvolvemos sites profissionais e identidades visuais marcantes para empresas que buscam inovação, presença digital e crescimento real.
          </p>

          <div className="flex gap-3 mt-6">
            <a
              href="https://www.instagram.com/digitaltricks.design/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 hover:bg-[#E1306C] rounded-full transition-all duration-300"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61566596216125"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 hover:bg-[#1877F2] rounded-full transition-all duration-300"
            >
              <Facebook size={20} />
            </a>
          </div>
        </div>

        {/* Links Rápidos */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
          <ul className="space-y-3 text-gray-200">
            <li><Link to="/" className="hover:text-white transition">Início</Link></li>
            <li><Link to="/sobre" className="hover:text-white transition">Sobre Nós</Link></li>
          </ul>
        </div>

        {/* Serviços */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Serviços</h3>
          <ul className="space-y-3 text-gray-200">
            <li><Link to="/websites" className="hover:text-white transition">Websites</Link></li>
            <li><Link to="/design" className="hover:text-white transition">Design</Link></li>
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contato</h3>
          <ul className="space-y-3 text-gray-200">
            <li className="flex items-center gap-2">
              <Phone size={18} className="text-[#7DF9FF]" />
              <a
                href="https://wa.me/5585921743200?text=Oi,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20da%20Digital%20Tricks."
                className="hover:text-white transition"
              >
                +55 (85) 92174-3200
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} className="text-[#7DF9FF]" />
              <a href="mailto:contato@digitaltricks.com.br" className="hover:text-white transition">
                contato@digitaltricks.com.br
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Linha divisória */}
      <div className="border-t border-white/10"></div>

      {/* Rodapé final */}
      <div className="text-center py-6 text-gray-300 text-sm relative z-10">
        © {new Date().getFullYear()} <span className="font-semibold text-white">Digital Tricks</span> — Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
