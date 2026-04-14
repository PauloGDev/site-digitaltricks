import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { assets } from "../assets/assets";
import { ArrowRight, Menu, X } from "lucide-react";
import NeonButton from "./NeonButton";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", path: "/" },
    { name: "Sobre", path: "/sobre" },
    { name: "E-commerces", path: "/ecommerce" },
    { name: "Websites", path: "/websites" },
    { name: "Design", path: "/design" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed w-full z-50 backdrop-blur-xl transition-all duration-500 ${
        scrolled
          ? "bg-black/70 shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 md:px-10 md:py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <motion.img
            src={assets.logo}
            alt="Digital Tricks"
            className="w-16 md:w-20"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </Link>

        {/* Links Desktop */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10 text-gray-200 font-medium">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              to={link.path}
              className={`relative group text-sm tracking-wide transition-all ${
                isActive(link.path)
                  ? "text-[#7d8aff]"
                  : "hover:text-white/90 text-gray-300"
              }`}
            >
              {link.name}
              <span
                className={`absolute bottom-0 left-0 h-[2px] bg-[#7d8aff] transition-all duration-300 ${
                  isActive(link.path) ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}

          <a
            href="https://wa.me/5585921743200?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais!"
            target="_blank"
            rel="noopener noreferrer"
          >
            <NeonButton
              text="Contato"
              href="https://wa.me/5585921743200?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais!"
              color="#5146D9"
              icon={ArrowRight}
            />
          </a>
        </div>

        {/* Menu Mobile Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
          className="md:hidden p-2 rounded-md bg-white/10 hover:bg-white/10 transition"
        >
          {menuOpen ? (
            <X className="w-7 h-7 text-white" />
          ) : (
            <Menu className="w-7 h-7 text-white" />
          )}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="fixed top-0 right-0 w-full sm:w-[75%] h-screen 
                       bg-[#0B0B16]
                       border-l border-white/10 backdrop-blur-2xl
                       flex flex-col items-center justify-center space-y-10
                       text-white shadow-2xl z-[55]"
          >
            {/* Close Button */}
            <motion.button
              onClick={() => setMenuOpen(false)}
              whileHover={{ rotate: 90 }}
              transition={{ duration: 0.3 }}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <X className="w-7 h-7 text-white" />
            </motion.button>

            {/* Links */}
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`text-2xl font-semibold tracking-wide transition-all ${
                    isActive(link.path)
                      ? "text-[#7DF9FF] drop-shadow-[0_0_8px_rgba(125,249,255,0.8)]"
                      : "text-white hover:text-[#7DF9FF]/80"
                  }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}

            {/* WhatsApp Button */}
            <motion.a
              href="https://wa.me/5585921743200"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative inline-flex items-center justify-center
                         bg-gradient-to-r from-[#7DF9FF] to-[#7367F0]
                         text-[#0B0B16] font-semibold px-10 py-3 rounded-full
                         shadow-[0_0_25px_rgba(125,249,255,0.3)] hover:shadow-[0_0_40px_rgba(125,249,255,0.5)]
                         transition-all duration-300"
            >
              <ArrowRight className="mr-2 w-5 h-5" />
              Contato
            </motion.a>

            <p className="text-white/50 text-sm mt-8">
              © 2025 Digital Tricks. Todos os direitos reservados.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
