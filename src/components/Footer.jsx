import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, Phone, ArrowRight } from "lucide-react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="relative border-t border-white/10 bg-black text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(123,97,255,0.08),transparent_28%)]" />

      <div className="relative mx-auto px-6 lg:px-20">
        {/* Bloco superior */}
        <div className="py-16 md:py-20 border-b border-white/10 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <img
              src={assets.logo}
              alt="Digital Tricks"
              className="w-24 md:w-28 object-contain"
            />

            <p className="mt-6 max-w-md text-white/60 leading-relaxed">
              Desenvolvemos websites, identidades visuais e estruturas digitais
              com foco em presença, clareza estratégica e valor percebido.
            </p>

            <div className="mt-8">
              <a
                href="https://wa.me/5585921743200?text=Oi,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20da%20Digital%20Tricks."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#7B61FF] hover:text-[#9B89FF] transition-colors"
              >
                Falar com a Digital Tricks
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-3 gap-10">
            {/* Navegação */}
            <div>
              <span className="block text-[11px] uppercase tracking-[0.24em] text-white/35 mb-5">
                Navegação
              </span>

              <ul className="space-y-3 text-white/65">
                <li>
                  <Link to="/" className="hover:text-white transition-colors">
                    Início
                  </Link>
                </li>
                <li>
                  <Link to="/sobre" className="hover:text-white transition-colors">
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link to="/websites" className="hover:text-white transition-colors">
                    Websites
                  </Link>
                </li>
                <li>
                  <Link to="/design" className="hover:text-white transition-colors">
                    Design
                  </Link>
                </li>
                <li>
                  <Link to="/ecommerce" className="hover:text-white transition-colors">
                    E-commerce
                  </Link>
                </li>
              </ul>
            </div>

            {/* Serviços */}
            <div>
              <span className="block text-[11px] uppercase tracking-[0.24em] text-white/35 mb-5">
                Especialidades
              </span>

              <ul className="space-y-3 text-white/65">
                <li>Sites institucionais</li>
                <li>Landing pages</li>
                <li>Lojas virtuais</li>
                <li>UX/UI</li>
                <li>Branding</li>
              </ul>
            </div>

            {/* Contato */}
            <div>
              <span className="block text-[11px] uppercase tracking-[0.24em] text-white/35 mb-5">
                Contato
              </span>

              <ul className="space-y-4 text-white/65">
                <li className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#7B61FF] mt-1" />
                  <a
                    href="https://wa.me/5585921743200?text=Oi,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20da%20Digital%20Tricks."
                    className="hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +55 (85) 92174-3200
                  </a>
                </li>

                <li className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#7B61FF] mt-1" />
                  <a
                    href="mailto:contato@digitaltricks.com.br"
                    className="hover:text-white transition-colors"
                  >
                    contato@digitaltricks.com.br
                  </a>
                </li>
              </ul>

              <div className="flex gap-3 mt-8">
                <a
                  href="https://www.instagram.com/digitaltricks.web/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-white/10 bg-white/[0.03] flex items-center justify-center text-white/70 hover:text-white hover:border-white/20 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>

                <a
                  href="https://www.facebook.com/profile.php?id=61566596216125"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-white/10 bg-white/[0.03] flex items-center justify-center text-white/70 hover:text-white hover:border-white/20 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bloco inferior */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/35">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="text-white/80 font-medium">Digital Tricks</span>. Todos os direitos reservados.
          </p>

          <p className="text-white/25">
            Presença digital com direção, clareza e valor.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;