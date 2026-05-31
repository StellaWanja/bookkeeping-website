import { motion } from "motion/react";

function TaxIllustration({ isActive }: { isActive: boolean }) {
  return (
    <svg className="w-full h-full text-stone-700" viewBox="0 0 300 160" fill="none" stroke="currentColor">
      {/* Background circular alignment reference */}
      <motion.circle
        cx="150"
        cy="80"
        r="55"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeDasharray="3 3"
        strokeOpacity="0.15"
        variants={{
          inactive: { scale: 0.8, opacity: 0 },
          active: { scale: 1, opacity: 1, transition: { duration: 1.4, ease: "easeOut" } }
        }}
        initial="inactive"
        animate={isActive ? "active" : "inactive"}
      />
      
      {/* Primary planning triangle projection */}
      <motion.polygon
        points="150,25 90,125 210,125"
        strokeWidth="1.5"
        strokeOpacity="0.5"
        stroke="#111111"
        variants={{
          inactive: { pathLength: 0, opacity: 0 },
          active: { pathLength: 1, opacity: 1, transition: { duration: 1.8, ease: "easeInOut", delay: 0.2 } }
        }}
        initial="inactive"
        animate={isActive ? "active" : "inactive"}
      />
      
      {/* Core secondary hedge triangle projection */}
      <motion.polygon
        points="150,135 90,35 210,35"
        strokeWidth="1"
        strokeOpacity="0.15"
        variants={{
          inactive: { pathLength: 0, opacity: 0 },
          active: { pathLength: 1, opacity: 1, transition: { duration: 1.8, ease: "easeInOut", delay: 0.4 } }
        }}
        initial="inactive"
        animate={isActive ? "active" : "inactive"}
      />
      
      {/* Dynamic triangulation corner vertices */}
      <motion.circle
        cx="150"
        cy="25"
        r="3"
        fill="#111111"
        variants={{
          inactive: { scale: 0 },
          active: { scale: 1, transition: { type: "spring", delay: 1.4 } }
        }}
        initial="inactive"
        animate={isActive ? "active" : "inactive"}
      />
      <motion.circle
        cx="90"
        cy="125"
        r="3"
        fill="#111111"
        variants={{
          inactive: { scale: 0 },
          active: { scale: 1, transition: { type: "spring", delay: 1.5 } }
        }}
        initial="inactive"
        animate={isActive ? "active" : "inactive"}
      />
      <motion.circle
        cx="210"
        cy="125"
        r="3"
        fill="#111111"
        variants={{
          inactive: { scale: 0 },
          active: { scale: 1, transition: { type: "spring", delay: 1.6 } }
        }}
        initial="inactive"
        animate={isActive ? "active" : "inactive"}
      />

      {/* Axis alignment grid lines */}
      <line x1="150" y1="10" x2="150" y2="150" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.08" />
      <line x1="10" y1="80" x2="290" y2="80" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.08" />
      
      <text x="160" y="35" fontSize="7" fontFamily="var(--font-mono)" fill="currentColor" fillOpacity="0.4" className="select-none font-bold">CAPITAL RETENTION</text>
      <text x="40" y="70" fontSize="7" fontFamily="var(--font-mono)" fill="currentColor" fillOpacity="0.4" className="select-none font-bold">TAX LIABILITY PREDICTION</text>
    </svg>
  );
}

export default TaxIllustration;
