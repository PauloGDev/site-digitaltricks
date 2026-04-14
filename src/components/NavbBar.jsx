import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { assets } from "../assets/assets";
import { ArrowRight, Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

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
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/78 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={assets.logo}
              alt="Digital Tricks"
              className="w-16 md:w-[74px] object-contain"
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
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 border border-white/10 bg-white/[0.03] text-white hover:bg-white/[0.06] transition-colors"
          >
            {menuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="md:hidden fixed inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="md:hidden fixed top-0 right-0 h-screen w-full max-w-sm bg-[#050505] border-l border-white/10 z-[60]"
            >
              <div className="h-full flex flex-col">
                <div className="h-20 px-6 flex items-center justify-between border-b border-white/10">
                  <img
                    src={assets.logo}
                    alt="Digital Tricks"
                    className="w-16 object-contain"
                  />

                  <button
                    onClick={() => setMenuOpen(false)}
                    aria-label="Fechar menu"
                    className="inline-flex items-center justify-center w-11 h-11 border border-white/10 bg-white/[0.03] text-white hover:bg-white/[0.06] transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex-1 px-6 py-10 flex flex-col justify-between">
                  <div className="flex flex-col gap-6">
                    {navLinks.map((link, i) => (
                      <motion.div
                        key={link.path}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                      >
                        <Link
                          to={link.path}
                          className={`block text-2xl tracking-tight transition-colors ${
                            isActive(link.path)
                              ? "text-white"
                              : "text-white/65 hover:text-white"
                          }`}
                        >
                          {link.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  <div className="pt-10 border-t border-white/10">
                    <a
                      href="https://wa.me/5585921743200?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais!"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMenuOpen(false)}
                      className="inline-flex items-center gap-2 bg-[#7B61FF] text-white px-5 py-3 text-sm font-medium hover:bg-[#6A50F5] transition-colors"
                    >
                      Falar com a Digital Tricks
                      <ArrowRight className="w-4 h-4" />
                    </a>

                    <p className="mt-6 text-sm text-white/30">
                      Digital Tricks — presença digital com direção.
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