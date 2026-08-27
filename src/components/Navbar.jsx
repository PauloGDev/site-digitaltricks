import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logoIco from "../assets/logo-ico.png";
import { navigation, solutionPillars } from "../data/siteData";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [desktopSolutionsOpen, setDesktopSolutionsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const desktopCloseTimer = useRef(null);
  const location = useLocation();

  const openDesktopSolutions = () => {
    window.clearTimeout(desktopCloseTimer.current);
    setDesktopSolutionsOpen(true);
  };

  const closeDesktopSolutions = () => {
    window.clearTimeout(desktopCloseTimer.current);
    desktopCloseTimer.current = window.setTimeout(() => {
      setDesktopSolutionsOpen(false);
    }, 140);
  };

  useEffect(() => {
    setOpen(false);
    setSolutionsOpen(false);
    setDesktopSolutionsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
      window.clearTimeout(desktopCloseTimer.current);
    };
  }, [open]);

  const navClass = ({ isActive }) =>
    `inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[0.78rem] font-semibold leading-none transition-colors ${
      isActive
        ? "bg-[#eee9ff] text-violet-700"
        : "text-[#5f5965] hover:bg-[#f1eff4] hover:text-[#17151d]"
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 sm:px-5">
      <div
        className={`mx-auto flex max-w-[1340px] items-center justify-between border border-black/[0.08] bg-[#fbfaff] px-4 text-[#17151d] transition-all duration-300 sm:px-5 ${
          scrolled || open
            ? "mt-2 h-[4rem] rounded-[1.15rem] shadow-[0_16px_50px_rgba(20,14,32,0.16)]"
            : "mt-4 h-[4.25rem] rounded-[1.35rem] shadow-[0_12px_40px_rgba(20,14,32,0.12)]"
        }`}
      >
        <Link to="/" aria-label="Digital Tricks - início" className="relative z-10 flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center overflow-hidden rounded-xl bg-[#e9e3ff] ring-1 ring-violet-200">
            <img src={logoIco} alt="" className="h-10 w-10 object-cover" />
          </span>
          <span className="hidden text-sm font-semibold tracking-[-0.025em] text-[#17151d] sm:block">
            Digital Tricks
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação principal">
          {navigation.map((item) =>
            item.hasDropdown ? (
              <div
                key={item.href}
                className="group relative"
                onMouseEnter={openDesktopSolutions}
                onMouseLeave={closeDesktopSolutions}
                onFocusCapture={openDesktopSolutions}
                onBlurCapture={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget)) {
                    setDesktopSolutionsOpen(false);
                  }
                }}
              >
                <NavLink
                  to={item.href}
                  className={navClass}
                  aria-haspopup="menu"
                  aria-expanded={desktopSolutionsOpen}
                >
                  {item.label}
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform ${desktopSolutionsOpen ? "rotate-180" : ""}`} />
                </NavLink>
                <div
                  className={`absolute left-1/2 top-[calc(100%-0.5rem)] w-[39rem] -translate-x-1/2 pt-6 transition-all duration-200 ${
                    desktopSolutionsOpen
                      ? "pointer-events-auto translate-y-0 opacity-100"
                      : "pointer-events-none -translate-y-2 opacity-0"
                  }`}
                >
                  <div className="overflow-hidden rounded-[1.4rem] border border-black/10 bg-[#fbfaff] text-[#17151d] shadow-[0_28px_80px_rgba(12,8,24,0.22)]">
                    <div className="flex items-center justify-between border-b border-black/[0.08] px-5 py-4">
                      <div>
                        <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-violet-700">
                          Soluções Digital Tricks
                        </span>
                        <span className="mt-1 block text-xs text-[#77717d]">
                          Quatro serviços para posicionar e ativar sua empresa.
                        </span>
                      </div>
                      <Link
                        to="/solucoes"
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-[#17151d] text-white transition-colors hover:bg-violet-700"
                        aria-label="Visão geral das soluções"
                      >
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-px bg-black/[0.08]">
                      {solutionPillars.map((pillar) => (
                        <Link
                          key={pillar.slug}
                          to={`/solucoes/${pillar.slug}`}
                          className="group/item bg-[#fbfaff] p-5 transition-colors hover:bg-[#eee9ff]"
                        >
                          <span className="flex items-center justify-between gap-4">
                            <span className="text-sm font-semibold text-[#17151d]">{pillar.eyebrow}</span>
                            <span className="text-[0.62rem] font-semibold tracking-[0.18em] text-violet-600">{pillar.number}</span>
                          </span>
                          <span className="mt-2 block text-xs leading-5 text-[#77717d] transition-colors group-hover/item:text-[#5b5363]">
                            {pillar.shortDescription}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <NavLink key={item.href} to={item.href} className={navClass}>
                {item.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/diagnostico"
            className="inline-flex min-h-10 items-center justify-center gap-2 rounded-xl bg-[#17151d] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-violet-700"
          >
            Começar projeto
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="relative z-10 grid h-10 w-10 place-items-center rounded-xl border border-black/10 bg-[#f1eff4] text-[#17151d] lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="absolute left-3 right-3 top-[5.25rem] h-[calc(100dvh-6rem)] overflow-y-auto rounded-[1.4rem] border border-black/10 bg-[#fbfaff] text-[#17151d] shadow-[0_28px_80px_rgba(12,8,24,0.22)] lg:hidden"
          >
            <div className="page-shell py-8">
              <div className="space-y-1">
                {navigation.map((item) =>
                  item.hasDropdown ? (
                    <div key={item.href}>
                      <button
                        type="button"
                        onClick={() => setSolutionsOpen((value) => !value)}
                        className="flex w-full items-center justify-between border-b border-black/[0.08] py-4 text-left text-xl font-semibold text-[#17151d]"
                      >
                        {item.label}
                        <ChevronDown
                          className={`h-5 w-5 transition-transform ${solutionsOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {solutionsOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <Link to="/solucoes" className="block border-b border-black/[0.08] py-4 pl-4 text-sm font-medium text-violet-700">
                              Visão geral
                            </Link>
                            {solutionPillars.map((pillar) => (
                              <Link
                                key={pillar.slug}
                                to={`/solucoes/${pillar.slug}`}
                                className="block border-b border-black/[0.08] py-4 pl-4 text-sm text-[#68616e]"
                              >
                                {pillar.eyebrow}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <NavLink
                      key={item.href}
                      to={item.href}
                      className="block border-b border-black/[0.08] py-4 text-xl font-semibold text-[#17151d]"
                    >
                      {item.label}
                    </NavLink>
                  ),
                )}
              </div>
              <Link to="/diagnostico" className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#17151d] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-violet-700">
                Quero meu digital em 15 dias
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
