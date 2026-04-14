import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { assets } from "../assets/assets";
import { ArrowRight, Menu, MenuIcon, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navLinks = [
    { name: "Início", path: "/" },
    { name: "Sobre", path: "/sobre" },
    { name: "E-commerce", path: "/ecommerce" },
    { name: "Websites", path: "/websites" },
    { name: "Design", path: "/design" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-black/80 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        <div className="h-16 sm:h-18 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img
              src={assets.logo}
              alt="Digital Tricks"
              className="w-14 sm:w-16 md:w-[74px] object-contain"
            />
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            <div className="flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-sm tracking-[0.08em] transition-colors duration-300 ${
                    isActive(link.path)
                      ? "text-white"
                      : "text-white/60 hover:text-white/90"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-2 left-0 h-px bg-[#7B61FF] transition-all duration-300 ${
                      isActive(link.path) ? "w-full" : "w-0"
                    }`}
                  />
                </Link>
              ))}
            </div>

            <a
              href="https://wa.me/5585921743200?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#7B61FF] text-white px-5 py-3 text-sm font-medium hover:bg-[#6A50F5] transition-colors"
            >
              Contato
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile button */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-none border border-white/15 bg-black/70 backdrop-blur-md text-white shadow-[0_0_0_1px_rgba(255,255,255,0.02)] hover:bg-white/[0.08] active:scale-[0.98] transition-all"
          >
            <span>
                {menuOpen ? (
                  <X className="w-5 h-5 text-white" strokeWidth={2.2} />
                ) : (
                  <MenuIcon className="w-5 h-5 text-white" strokeWidth={2.2} />
                )}
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <>
            {/* overlay */}
            <motion.button
              type="button"
              aria-label="Fechar menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="md:hidden fixed inset-0 bg-black/70 backdrop-blur-sm"
            />

            {/* drawer */}
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="md:hidden fixed top-0 right-0 h-screen w-[88%] max-w-[360px] bg-[#050505] border-l border-white/10 z-[60]"
            >
              <div className="h-full flex flex-col">
                {/* top */}
                <div className="h-16 sm:h-[72px] px-4 sm:px-5 flex items-center justify-between border-b border-white/10">
                  <img
                    src={assets.logo}
                    alt="Digital Tricks"
                    className="w-14 sm:w-16 object-contain"
                  />

                  <button
                    type="button"
                    onClick={() => setMenuOpen(false)}
                    aria-label="Fechar menu"
                    className="inline-flex items-center justify-center w-11 h-11 border border-white/15 bg-white/[0.03] text-white hover:bg-white/[0.06] transition-colors"
                  >
                    <span>
                      <X className="w-5 h-5" strokeWidth={2.2} />
                    </span>
                  </button>
                </div>

                {/* links */}
                <div className="flex-1 px-5 py-8 flex flex-col justify-between">
                  <div className="flex flex-col gap-1">
                    {navLinks.map((link, i) => (
                      <motion.div
                        key={link.path}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.04 }}
                      >
                        <Link
                          to={link.path}
                          onClick={() => setMenuOpen(false)}
                          className={`flex items-center justify-between py-4 border-b border-white/8 text-[1.05rem] transition-colors ${
                            isActive(link.path)
                              ? "text-white"
                              : "text-white/65 hover:text-white"
                          }`}
                        >
                          <span>{link.name}</span>
                          {isActive(link.path) && (
                            <span className="w-6 h-px bg-[#7B61FF]" />
                          )}
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  {/* bottom */}
                  <div className="pt-8">
                    <a
                      href="https://wa.me/5585921743200?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais!"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMenuOpen(false)}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#7B61FF] text-white px-5 py-3 text-sm font-medium hover:bg-[#6A50F5] transition-colors"
                    >
                      Falar com a Digital Tricks
                      <ArrowRight className="w-4 h-4" />
                    </a>

                    <p className="mt-5 text-xs leading-relaxed text-white/28">
                      Presença digital com direção, clareza e valor.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;