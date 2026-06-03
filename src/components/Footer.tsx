import { ArrowUp, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

interface FooterProps {
  onContactClick: () => void;
  style?: React.CSSProperties;
}
function Footer({ onContactClick, style }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinksLeft = [
    { name: "Bookkeeping Services", href: "#services" },
    { name: "Tax Support", href: "#services" },
    { name: "CFO Advisory", href: "#services" },
    { name: "System Integration", href: "#timeline" },
  ];

  return (
    <footer
      id="app-footer"
      style={style}
      className="bg-black text-white relative pt-24 md:pt-36 pb-12 overflow-hidden border-t border-white/5"
    >
      {/* Background subtle radial gradient */}
      <div className="absolute bottom-0 right-0 w-125 h-125 bg-black/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Large Final Call-To-Action Block */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <span className="font-heading text-xs font-semibold tracking-widest uppercase block">
              SECURE YOUR INFRASTRUCTURE
            </span>

            <h2 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight leading-none">
              Ready to structure <br />
              your sucess?
            </h2>

            <p className="max-w-sm mx-auto leading-relaxed">
              From organized records to informed decisions, our bookkeeping
              framework delivers the clarity and confidence needed to support
              long-term growth.
            </p>

            <div className="pt-4">
              <button
                id="hero-primary-cta"
                onClick={onContactClick}
                className="bg-white text-black text-sm tracking-widest cursor-pointer uppercase font-semibold px-8 py-4 rounded-md border hover:bg-transparent hover:text-white hover:border-whitetransition-all duration-300"
              >
                Schedule a Consultation
              </button>
            </div>
          </motion.div>
        </div>

        {/* Dynamic Structural Grid Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-white/10 pt-16 pb-16 text-left">
          {/* Logo & Statement Column */}
          <div className="md:col-span-4 space-y-4">
            <span className="font-bold text-lg tracking-tight inline-block">
              NixKeana Solutions
            </span>
            <span className="text-sm uppercase tracking-widest text-white/80 font-semibold inline-block">
              Clarity in every ledger
            </span>
            <p className="text-sm leading-relaxed">
              Designing accurate double-entry bookkeeping, optimizing tax
              efficiency, and supporting financial planning for businesses
              focused on scalable growth.
            </p>
          </div>

          {/* Links Column 1: Services */}
          <div className="md:col-span-2 space-y-4">
            <span className="text-lg uppercase tracking-widest font-semibold block">
              SERVICES
            </span>
            <ul className="space-y-2 text-xs ">
              {footerLinksLeft.map((link, idx) => (
                <li key={idx}>
                  <a
                    id={`footer-left-link-${idx}`}
                    href={link.href}
                    className="relative font-medium text-sm tracking-wide text-white/70 hover:text-white transition-colors group select-none inline-block py-0.5"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .querySelector(link.href)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {link.name}
                    {/* Custom sliding line hover */}
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-white transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contacts & Premium Socials Column */}
          <div id="footer-contact-details" className="md:col-span-3 space-y-6">
            <div className="space-y-4">
              <span className="text-lg uppercase tracking-widest font-semibold block">
                CONTACT US
              </span>
              <div className="space-y-2.5">
                <div>
                  <span className="text-xs uppercase tracking-widest block font-semibold">
                    contact number
                  </span>
                  <a
                    id="footer-contact-phone-primary"
                    href="tel:+254106756099"
                    className="relative inline-block font-medium tracking-wide text-white/70 hover:text-white transition-colors group select-none py-0.5"
                  >
                    +(254) 106 756 099
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-white transition-all duration-300 group-hover:w-full" />
                  </a>
                </div>

                <div>
                  <span className="text-xs uppercase tracking-widest block font-semibold">
                    email address
                  </span>
                  <a
                    id="footer-contact-email"
                    href="mailto:nixkeana02@gmail.com"
                    className="relative inline-block font-medium tracking-wide text-white/70 hover:text-white transition-colors group select-none py-0.5"
                  >
                    nixkeana02@gmail.com
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-white transition-all duration-300 group-hover:w-full" />
                  </a>
                </div>

                <div>
                  <span className="text-xs uppercase tracking-widest block font-semibold">
                    location
                  </span>
                  <p
                    id="footer-contact-location"
                    className="relative inline-block font-medium tracking-wide text-white/70 hover:text-white transition-colors group select-none py-0.5"
                  >
                    Nairobi, Kenya
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 space-y-4">
            <span className="text-lg uppercase tracking-widest font-semibold block">
              SOCIAL media links
            </span>
            <div className="flex flex-col gap-y-3 text-white/70 ">
              <a
                id="social-link-linkedin"
                href="https://www.linkedin.com/company/nixkeana-solutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors inline-flex items-center gap-1 group/social"
              >
                LinkedIn
                <ArrowUpRight className="w-3 h-3 text-white group-hover/social:translate-x-0.5 group-hover/social:-translate-y-0.5 transition-transform" />
              </a>

              <a
                id="social-link-instagram"
                href="https://instagram.com/nixkeana_solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors inline-flex items-center gap-1 group/social"
              >
                Instagram{" "}
                <ArrowUpRight className="w-3 h-3 text-white group-hover/social:translate-x-0.5 group-hover/social:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom meta details bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] text-white/70 gap-4">
          <div className="flex items-center gap-4">
            <span className="tracking-widest capitalize font-light">
              Developed by{" "}
              <a
                id="social-link-instagram"
                href="https://stylades.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors inline-flex items-center gap-1 group/social"
              >
                StylaDes
              </a>
            </span>
          </div>

          <p className="flex items-center gap-1.5 font-sans text-xs">
            &copy; {new Date().getFullYear()} NixKeana Solutions. All rights
            reserved.
          </p>

          {/* Back to Top button */}
          <button
            id="back-to-top"
            onClick={scrollToTop}
            className="flex items-center gap-2 group hover:text-white transition-colors p-2 cursor-pointer"
            aria-label="Back to top"
          >
            <span>BACK TO TOP</span>
            <span className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/40 transition-colors">
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
