import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { audiences } from "../data/automotiveData";
import { navigation, solutionPillars } from "../data/siteData";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [desktopMenu, setDesktopMenu] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    setDesktopMenu(null);
    setMobileMenu(null);
  }, [location.pathname]);

  const dropdownItems = (href) => {
    if (href === "/para-seu-negocio") {
      return audiences.map((item) => ({ href: `/para-seu-negocio/${item.slug}`, title: item.name, description: item.shortDescription, number: item.number }));
    }
    return solutionPillars.map((item) => ({ href: `/solucoes/${item.slug}`, title: item.eyebrow, description: item.shortDescription, number: item.number }));
  };

  const navClass = ({ isActive }) => `inline-flex h-11 items-center px-3 text-[0.78rem] font-medium transition-colors ${isActive ? "text-violet-700" : "text-[#514b57] hover:text-violet-700"}`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div className="relative mx-auto flex h-[4.25rem] max-w-[1440px] items-center justify-between rounded-2xl border border-black/[0.08] bg-[#fbfaff]/95 px-4 shadow-[0_12px_45px_rgba(16,10,30,0.10)] backdrop-blur-xl sm:px-5">
        <Link to="/" className="relative z-10 shrink-0"><img src={logo} alt="Digital Tricks" className="h-9 w-auto sm:h-10" /></Link>

        <nav className="hidden items-center lg:flex" aria-label="Navegação principal">
          {navigation.map((item) => item.hasDropdown ? (
            <div key={item.href} className="relative" onMouseEnter={() => setDesktopMenu(item.href)} onMouseLeave={() => setDesktopMenu(null)}>
              <NavLink to={item.href} className={navClass}>
                {item.label}<ChevronDown className={`ml-1.5 h-3.5 w-3.5 transition-transform ${desktopMenu === item.href ? "rotate-180" : ""}`} />
              </NavLink>
              <AnimatePresence>
                {desktopMenu === item.href && (
                  <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} transition={{ duration: 0.15 }} className="absolute left-1/2 top-full w-[42rem] -translate-x-1/2 pt-3">
                    <div className="overflow-hidden rounded-[1.3rem] border border-black/10 bg-[#fbfaff] shadow-[0_28px_80px_rgba(12,8,24,0.20)]">
                      <div className="flex items-center justify-between border-b border-black/[0.07] px-5 py-4">
                        <div><p className="text-[0.61rem] font-semibold uppercase tracking-[0.18em] text-violet-700">{item.label}</p><p className="mt-1 text-xs text-[#77717d]">Escolha a frente mais próxima do seu momento.</p></div>
                        <Link to={item.href} className="flex items-center gap-2 text-xs font-semibold text-[#17151d] hover:text-violet-700">Visão geral <ArrowRight className="h-3.5 w-3.5" /></Link>
                      </div>
                      <div className="grid grid-cols-2 gap-px bg-black/[0.07]">
                        {dropdownItems(item.href).map((entry) => (
                          <Link key={entry.href} to={entry.href} className="group/item bg-[#fbfaff] p-5 transition-colors hover:bg-[#eee9ff]">
                            <span className="flex items-center justify-between gap-4"><span className="text-sm font-semibold text-[#17151d]">{entry.title}</span><span className="text-[0.6rem] font-semibold tracking-[0.18em] text-violet-600">{entry.number}</span></span>
                            <span className="mt-2 block text-xs leading-5 text-[#77717d] group-hover/item:text-[#5b5363]">{entry.description}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : <NavLink key={item.href} to={item.href} className={navClass}>{item.label}</NavLink>)}
        </nav>

        <Link to="/diagnostico" className="hidden min-h-10 items-center justify-center gap-2 rounded-xl bg-[#17151d] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-violet-700 lg:inline-flex">Solicitar diagnóstico <ArrowRight className="h-4 w-4" /></Link>

        <button type="button" onClick={() => setOpen((value) => !value)} className="relative z-10 grid h-10 w-10 place-items-center rounded-xl border border-black/10 bg-[#f1eff4] text-[#17151d] lg:hidden" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open}>{open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} className="absolute left-3 right-3 top-[5.25rem] h-[calc(100dvh-6rem)] overflow-y-auto rounded-[1.4rem] border border-black/10 bg-[#fbfaff] text-[#17151d] shadow-[0_28px_80px_rgba(12,8,24,0.22)] sm:left-5 sm:right-5 lg:hidden">
            <div className="px-5 py-7 sm:px-8">
              {navigation.map((item) => item.hasDropdown ? (
                <div key={item.href}>
                  <button type="button" onClick={() => setMobileMenu((value) => value === item.href ? null : item.href)} className="flex w-full items-center justify-between border-b border-black/[0.08] py-4 text-left text-lg font-semibold">
                    {item.label}<ChevronDown className={`h-5 w-5 transition-transform ${mobileMenu === item.href ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {mobileMenu === item.href && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                        <Link to={item.href} className="block border-b border-black/[0.08] py-4 pl-4 text-sm font-semibold text-violet-700">Visão geral</Link>
                        {dropdownItems(item.href).map((entry) => <Link key={entry.href} to={entry.href} className="block border-b border-black/[0.08] py-4 pl-4 text-sm text-[#68616e]">{entry.title}</Link>)}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : <NavLink key={item.href} to={item.href} className="block border-b border-black/[0.08] py-4 text-lg font-semibold">{item.label}</NavLink>)}
              <Link to="/diagnostico" className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#17151d] px-6 py-3 text-sm font-semibold text-white">Solicitar diagnóstico <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
