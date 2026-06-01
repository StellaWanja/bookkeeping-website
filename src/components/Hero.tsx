import { motion } from "motion/react";
import { ArrowDown, ShieldCheck } from "lucide-react";

function Hero({ onContactClick }: { onContactClick: () => void }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const slowFloat = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 md:pt-36 pb-16 flex items-center overflow-hidden"
    >
      {/* Absolute subtle background geometric guides */}
      <div className="absolute inset-0 z-0 flex justify-between px-6 md:px-12 pointer-events-none opacity-20">
        <div className="w-px h-full bg-[#1A1A1B]/10" />
        <div className="hidden md:block w-px h-full bg-[#1A1A1B]/10" />
        <div className="hidden lg:block w-px h-full bg-[#1A1A1B]/10" />
        <div className="hidden lg:block w-px h-full bg-[#1A1A1B]/10" />
        <div className="w-px h-full bg-[#1A1A1B]/10" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Side: Headline & Editorial Context */}
        <motion.div
          id="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col justify-center text-left"
        >
          <motion.h1
            id="hero-title"
            variants={itemVariants}
            className="font-heading font-extrabold text-4xl sm:text-5xl xl:text-6xl text-black tracking-tight leading-[1.08] mb-6"
          >
            Precision in <br className="hidden sm:inline" />
            every ledger. <br />
            <span className="text-gold font-serif italic font-normal tracking-wide">
              Clarity
            </span>{" "}
            in <br className="hidden sm:inline" />
            every decision.
          </motion.h1>

          <motion.p
            id="hero-subtitle"
            variants={itemVariants}
            className="leading-relaxed text-lg text-black max-w-lg mb-10"
          >
            We provide bookkeeping, tax support, and fractional CFO services for
            growing businesses that need accurate financial systems, clear
            reporting, and dependable long-term support.
          </motion.p>

          <motion.div
            id="hero-cta-container"
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12"
          >
            <button
              id="hero-primary-cta"
              onClick={onContactClick}
              className="bg-black text-cream text-sm tracking-widest cursor-pointer uppercase font-semibold px-8 py-4 rounded-md border border-[#1A1A1B] hover:bg-transparent hover:text-[#1A1A1B] transition-all duration-300"
            >
              Schedule a Consultation
            </button>

            <a
              id="hero-secondary-cta"
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#services")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group inline-flex items-center text-sm justify-center gap-2.5 px-6 py-4 tracking-widest uppercase font-semibold text-[#1A1A1B]/70 hover:text-[#1A1A1B] transition-colors"
            >
              View Services
              <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />
            </a>
          </motion.div>

          {/* Micro structural metrics strip */}
          <motion.div
            id="hero-metrics"
            variants={itemVariants}
            className="grid grid-cols-3 gap-6 border-t border-black/20 pt-8"
          >
            <div className="flex flex-col">
              <span className="font-serif italic text-2xl lg:text-3xl text-black mb-1">
                99.9%
              </span>
              <span className="text-xs font-medium uppercase tracking-widest text-black/80">
                Reporting Accuracy
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif italic text-2xl lg:text-3xl text-black mb-1">
                KES1M+
              </span>
              <span className="text-xs font-medium uppercase tracking-widest text-black/80">
                Transactions Managed
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif italic text-2xl lg:text-3xl text-black mb-1">
                Zero
              </span>
              <span className="text-xs font-medium uppercase tracking-widest text-black/80">
                Friction Auditing
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: High-End Architectural Asset Presentation */}
        <div
          id="hero-media"
          className="hidden lg:col-span-5 relative w-full lg:flex items-center justify-center lg:justify-end"
        >
          <motion.div
            id="hero-image-wrapper"
            variants={slowFloat}
            animate="animate"
            className="relative w-full max-w-105 aspect-1/2 overflow-hidden"
          >
            <img
              id="hero-image"
              src="/src/assets/hero.png"
              alt="Sophisticated modernist abstract pattern"

            />
          </motion.div>

          {/* Absolute floating micro-card */}
          <motion.div
            id="hero-floating-card"
            initial={{ opacity: 0, x: 50, y: 50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 1, duration: 1, ease: "easeOut" }}
            className="absolute bottom-32 left-1/2 bg-black/90 backdrop-blur-md p-5 border border-white/10 text-white flex gap-4 max-w-xs shadow-2xl"
          >
            <div className="bg-green-800 text-white p-2 flex items-center justify-center w-10 h-10">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 block mb-1">
                COMPLIANCE INTEGRITY
              </span>
              <p className="font-sans text-[11px] leading-snug text-neutral-200 font-light">
                Fully compliant CPA Kenya–certified bookkeeping and double-entry
                accounting.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
