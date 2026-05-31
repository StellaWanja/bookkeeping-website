import { motion } from "motion/react";

function BookkeepingIllustration({ isActive }: { isActive: boolean }) {
  return (
    <svg
      className="w-full h-full text-stone-600"
      viewBox="0 0 300 160"
      fill="none"
      stroke="currentColor"
    >
      <defs>
        <pattern
          id="grid-ledger-etc"
          width="16"
          height="16"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 16 0 L 0 0 0 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeOpacity="0.08"
          />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        fill="url(#grid-ledger-etc)"
        className="opacity-80"
      />

      {/* Horizontal ledger table row guides */}
      <motion.path
        d="M 30,30 L 270,30 M 30,60 L 270,60 M 30,90 L 270,90 M 30,120 L 270,120"
        strokeWidth="1"
        strokeOpacity="0.12"
        variants={{
          inactive: { pathLength: 0 },
          active: {
            pathLength: 1,
            transition: { duration: 1.2, ease: "easeInOut" },
          },
        }}
        initial="inactive"
        animate={isActive ? "active" : "inactive"}
      />

      {/* Vertical ledger alignment lines */}
      <motion.path
        d="M 50,20 L 50,140 M 130,20 L 130,140 M 190,20 L 190,140"
        strokeWidth="1"
        strokeOpacity="0.08"
        variants={{
          inactive: { pathLength: 0 },
          active: {
            pathLength: 1,
            transition: { duration: 0.9, ease: "easeInOut", delay: 0.15 },
          },
        }}
        initial="inactive"
        animate={isActive ? "active" : "inactive"}
      />

      {/* Dynamic liquidity drawing trajectory bezier */}
      <motion.path
        d="M 50,110 Q 90,100 130,75 T 190,90 T 250,45"
        strokeWidth="2.5"
        strokeLinecap="round"
        stroke="#111111"
        variants={{
          inactive: { pathLength: 0, opacity: 0 },
          active: {
            pathLength: 1,
            opacity: 1,
            transition: { duration: 1.8, ease: "easeOut", delay: 0.3 },
          },
        }}
        initial="inactive"
        animate={isActive ? "active" : "inactive"}
      />

      {/* Endpoint node */}
      <motion.circle
        cx="250"
        cy="45"
        r="3.5"
        fill="#111111"
        variants={{
          inactive: { scale: 0, opacity: 0 },
          active: {
            scale: 1,
            opacity: 1,
            transition: { type: "spring", delay: 1.6 },
          },
        }}
        initial="inactive"
        animate={isActive ? "active" : "inactive"}
      />

      {/* Ripple pulse on the endpoint */}
      <motion.circle
        cx="250"
        cy="45"
        r="10"
        stroke="#111111"
        strokeWidth="1"
        fill="none"
        variants={{
          inactive: { scale: 0.6, opacity: 0 },
          active: {
            scale: [0.6, 1.8],
            opacity: [0.8, 0],
            transition: {
              repeat: Infinity,
              duration: 1.6,
              ease: "easeOut",
              delay: 1.6,
            },
          },
        }}
        initial="inactive"
        animate={isActive ? "active" : "inactive"}
      />

      <text
        x="60"
        y="50"
        fontSize="7"
        fontFamily="var(--font-mono)"
        fill="currentColor"
        fillOpacity="0.4"
        className="select-none font-bold"
      >
        ACCT. BALANCES
      </text>
      <text
        x="140"
        y="105"
        fontSize="7"
        fontFamily="var(--font-mono)"
        fill="currentColor"
        fillOpacity="0.4"
        className="select-none font-bold"
      >
        NET LIQUIDITY
      </text>
    </svg>
  );
}

export default BookkeepingIllustration;
