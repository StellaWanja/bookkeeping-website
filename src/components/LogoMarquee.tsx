import { motion } from "motion/react";
import {
  Award,
  Briefcase,
  Building,
  Compass,
  DraftingCompass,
  Landmark,
} from "lucide-react";
import { MARQUEE_LOGOS } from "../data";
import { useEffect, useRef, useState } from "react";

function LogoMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  const icons = [
    <DraftingCompass className="w-4 h-4 mb-0.5" />,
    <Compass className="w-4 h-4 mb-0.5" />,
    <Building className="w-4 h-4 mb-0.5" />,
    <Landmark className="w-4 h-4 mb-0.5" />,
    <Briefcase className="w-4 h-4 mb-0.5" />,
    <Award className="w-4 h-4 mb-0.5" />,
  ];

  const duplicatedLogos = [...MARQUEE_LOGOS, ...MARQUEE_LOGOS];

  useEffect(() => {
    if (!trackRef.current) return;

    setWidth(trackRef.current.scrollWidth / 2);
  }, []);

  return (
 <section className="relative overflow-hidden py-12 select-none bg-alabaster">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8">
        <span className="font-bold text-sm uppercase tracking-widest text-black block text-center lg:text-left mb-2">
          TRUSTED BY BUSINESSES ACROSS ALL SECTORS
        </span>
      </div>

      <div className="relative overflow-hidden">
        {/* left fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-linear-to-r from-alabaster to-transparent" />

        {/* right fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-linear-to-l from-alabaster to-transparent" />

        <motion.div
          ref={trackRef}
          className="flex w-max gap-16 md:gap-24"
          animate={{
            x: [0, -width],
          }}
          transition={{
            ease: "linear",
            duration: 25,
            repeat: Infinity,
          }}
        >
          {duplicatedLogos.map((logo, idx) => (
            <div
              key={idx}
              className="group flex shrink-0 cursor-pointer items-center gap-3 text-black opacity-40 transition-all duration-300 hover:opacity-100"
            >
              <span className="text-black transition-transform duration-300 group-hover:scale-110">
                {icons[idx % icons.length]}
              </span>

              <span className="font-sans text-sm font-bold uppercase tracking-tight">
                {logo.name}
              </span>

              <span className="rounded-none bg-[#1A1A1B]/5 px-2 py-0.5 font-mono text-[9px] lowercase text-black/50">
                {logo.category}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>  );
}

export default LogoMarquee;
