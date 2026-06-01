import { motion } from "motion/react";

function CFOIllustration({ isActive }: { isActive: boolean }) {
  return (
    <svg
      className="w-full h-full text-stone-750"
      viewBox="0 0 300 160"
      fill="none"
      stroke="currentColor"
    >
      {/* Data point nodes */}
      <motion.circle
        cx="50"
        cy="100"
        r="4"
        fill="currentColor"
        variants={{
          inactive: { scale: 0 },
          active: { scale: 1, transition: { type: "spring", delay: 0.1 } },
        }}
        initial="inactive"
        animate={isActive ? "active" : "inactive"}
      />
      <motion.circle
        cx="150"
        cy="50"
        r="4"
        fill="currentColor"
        variants={{
          inactive: { scale: 0 },
          active: { scale: 1, transition: { type: "spring", delay: 0.2 } },
        }}
        initial="inactive"
        animate={isActive ? "active" : "inactive"}
      />
      <motion.circle
        cx="150"
        cy="110"
        r="3"
        stroke="currentColor"
        strokeWidth="1.2"
        variants={{
          inactive: { scale: 0 },
          active: { scale: 1, transition: { type: "spring", delay: 0.3 } },
        }}
        initial="inactive"
        animate={isActive ? "active" : "inactive"}
      />
      <motion.circle
        cx="250"
        cy="70"
        r="4"
        fill="currentColor"
        variants={{
          inactive: { scale: 0 },
          active: { scale: 1, transition: { type: "spring", delay: 0.4 } },
        }}
        initial="inactive"
        animate={isActive ? "active" : "inactive"}
      />

      {/* Main Solid Projection path */}
      <motion.line
        x1="50"
        y1="100"
        x2="150"
        y2="50"
        strokeWidth="1.6"
        stroke="#111111"
        variants={{
          inactive: { pathLength: 0 },
          active: {
            pathLength: 1,
            transition: { duration: 1.1, ease: "easeInOut", delay: 0.3 },
          },
        }}
        initial="inactive"
        animate={isActive ? "active" : "inactive"}
      />
      <motion.line
        x1="150"
        y1="50"
        x2="250"
        y2="70"
        strokeWidth="1.6"
        stroke="#111111"
        variants={{
          inactive: { pathLength: 0 },
          active: {
            pathLength: 1,
            transition: { duration: 1.1, ease: "easeInOut", delay: 0.8 },
          },
        }}
        initial="inactive"
        animate={isActive ? "active" : "inactive"}
      />

      {/* Dotted Lower Hedging bounds */}
      <motion.line
        x1="50"
        y1="100"
        x2="150"
        y2="110"
        strokeWidth="1"
        strokeDasharray="4 2"
        strokeOpacity="0.4"
        variants={{
          inactive: { pathLength: 0 },
          active: {
            pathLength: 1,
            transition: { duration: 0.9, ease: "easeInOut", delay: 0.5 },
          },
        }}
        initial="inactive"
        animate={isActive ? "active" : "inactive"}
      />
      <motion.line
        x1="150"
        y1="110"
        x2="250"
        y2="70"
        strokeWidth="1"
        strokeDasharray="4 2"
        strokeOpacity="0.3"
        variants={{
          inactive: { pathLength: 0 },
          active: {
            pathLength: 1,
            transition: { duration: 0.9, ease: "easeInOut", delay: 0.9 },
          },
        }}
        initial="inactive"
        animate={isActive ? "active" : "inactive"}
      />

      {/* Radar halo representing threshold safety limit */}
      <motion.circle
        cx="150"
        cy="50"
        r="14"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeOpacity="0.15"
        variants={{
          inactive: { scale: 0.6, opacity: 0 },
          active: {
            scale: 1,
            opacity: 1,
            transition: { duration: 1.2, ease: "easeOut", delay: 1.1 },
          },
        }}
        initial="inactive"
        animate={isActive ? "active" : "inactive"}
      />

      <text
        x="160"
        y="45"
        fontSize="9"
        fill="currentColor"
        fillOpacity="0.5"
        className="select-none tracking-widest"
      >
        VALUATION APEX
      </text>
      <text
        x="20"
        y="85"
        fontSize="9"
        fill="currentColor"
        fillOpacity="0.5"
        className="select-none tracking-widest"
      >
        RUNWAY THRESHOLD
      </text>
    </svg>
  );
}

export default CFOIllustration;
