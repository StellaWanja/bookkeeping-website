import { motion } from "motion/react";

function PayrollIllustration({ isActive }: { isActive: boolean }) {
  return (
    <svg
      className="w-full h-full text-stone-800"
      viewBox="0 0 300 160"
      fill="none"
      stroke="currentColor"
    >
      {/* Background radial guidelines */}
      <motion.circle
        cx="150"
        cy="80"
        r="45"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeDasharray="4 4"
        strokeOpacity="0.12"
        variants={{
          inactive: { rotate: 0 },
          active: {
            rotate: 360,
            transition: { duration: 15, repeat: Infinity, ease: "linear" },
          },
        }}
        initial="inactive"
        animate={isActive ? "active" : "inactive"}
      />
      {/* Concentric outer thin safe zone circle */}
      <motion.circle
        cx="150"
        cy="80"
        r="60"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeOpacity="0.08"
        variants={{
          inactive: { scale: 0.8, opacity: 0 },
          active: {
            scale: 1,
            opacity: 1,
            transition: { duration: 1.2, ease: "easeOut" },
          },
        }}
        initial="inactive"
        animate={isActive ? "active" : "inactive"}
      />

      {/* Cross concentric tick alignment marks */}
      <motion.path
        d="M 150,15 L 150,25 M 150,135 L 150,145 M 85,80 L 95,80 M 205,80 L 215,80"
        strokeWidth="1"
        strokeOpacity="0.2"
        variants={{
          inactive: { pathLength: 0 },
          active: {
            pathLength: 1,
            transition: { duration: 0.8, ease: "easeInOut" },
          },
        }}
        initial="inactive"
        animate={isActive ? "active" : "inactive"}
      />

      {/* Structured horizontal secure block bar */}
      <motion.rect
        x="90"
        y="72"
        width="120"
        height="16"
        rx="2"
        stroke="#111111"
        strokeWidth="1.5"
        fill="none"
        variants={{
          inactive: { pathLength: 0, fillOpacity: 0 },
          active: {
            pathLength: 1,
            fillOpacity: 0.04,
            transition: { duration: 1.5, ease: "easeInOut", delay: 0.3 },
          },
        }}
        initial="inactive"
        animate={isActive ? "active" : "inactive"}
      />

      {/* Internal success status checkbox indicator */}
      <motion.path
        d="M 140,80 L 147,87 L 160,74"
        stroke="#111111"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          inactive: { pathLength: 0, opacity: 0 },
          active: {
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut", delay: 1.2 },
          },
        }}
        initial="inactive"
        animate={isActive ? "active" : "inactive"}
      />

      <text
        x="100"
        y="55"
        fontSize="9"
        fill="currentColor"
        fillOpacity="0.4"
        className="select-none font-bold"
      >
        PAYROLL PROCESSING
      </text>
      <text
        x="110"
        y="112"
        fontSize="9"
        fill="currentColor"
        fillOpacity="0.4"
        className="select-none font-bold"
      >
        STATUTORY REQUIREMENTS
      </text>
    </svg>
  );
}

export default PayrollIllustration;
