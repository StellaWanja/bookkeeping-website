import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAVLINKS = [
  { name: "Our services", href: "#services" },
  { name: "Who we are", href: "#manifesto" },
  { name: "How it works", href: "#timeline" },
  { name: "Testimonials", href: "#testimonials" },
];

function Header({ onContactClick }: { onContactClick: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        id="app-header"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-4 bg-white/85 backdrop-blur-md border-b border-black/5 px-6 md:px-12"
            : "py-6 bg-transparent px-6 md:px-12"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo & Luxury Identifier */}
          <a
            id="logo-link"
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#hero");
            }}
            className="flex items-center gap-4 select-none group"
          >
            <div className="relative w-9 h-9 flex items-center justify-center">
              <span className="absolute inset-0 border border-black uppercase flex items-center justify-center font-semibold group-hover:rotate-45 transition-transform duration-500">
                N
              </span>
              <span className="absolute inset-0 bg-black text-white uppercase flex items-center justify-center font-semibold scale-0 group-hover:scale-100 group-hover:rotate-45 transition-all duration-500">
                K
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-lg text-black leading-none">
                NixKeana Solutions
              </span>
              <span className="text-[11px] tracking-widest text-gold uppercase font-semibold leading-none mt-1">
                Bespoke Ledger Engineering
              </span>
            </div>
          </a>

          {/* Desktop Navigation Link Slides */}
          <nav className="hidden lg:flex items-center gap-10">
            {NAVLINKS.map((link) => (
              <a
                id={`nav-link-${link.name.toLowerCase()}`}
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="relative font-medium tracking-wide text-black/70 hover:text-black transition-colors py-2 group select-none"
              >
                {link.name}
                {/* Custom sliding line hover */}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Premium Call to Action */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={onContactClick}
              className="px-4 py-2 border-2 border-black rounded-md text-black transition-colors duration-300 hover:bg-black hover:text-cream cursor-pointer"
            >
              Book a Consultation
            </button>
          </div>

          {/* Mobile Hamburguer trigger */}
          <div className="lg:hidden">
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-onyx p-1.5 focus:outline-none cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Full screened mobile overlay menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 bg-white z-40 pt-24 px-6 flex flex-col justify-between pb-12 lg:hidden border-b border-white/20"
          >
            <div className="space-y-6 flex flex-col items-center pt-8 text-center">
              {NAVLINKS.map((link, idx) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => scrollToSection(link.href)}
                  className="text-2xl font-bold text-onyx tracking-wide hover:text-slate-green transition-colors cursor-pointer"
                >
                  {link.name}
                </motion.button>
              ))}

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="pt-6"
              >
                <button
                  id="mobile-inquire-btn"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onContactClick();
                  }}
                  className="px-4 py-2 border-2 border-black rounded-md text-black transition-colors duration-300 hover:bg-black hover:text-cream cursor-pointer"
                >
                  Book a Consultation
                </button>
              </motion.div>
            </div>

            {/* Micro branding footer inside overlay */}
            <div className="text-center space-y-2 border-t border-gold pt-6">
              <p className="text-[9px] uppercase tracking-[0.25em] text-black/80 font-bold">
                NixKeana Solutions &copy; {new Date().getFullYear()}
              </p>
              <p className="text-[10px] text-black/80">
                Bookkeeping and Advisory
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
