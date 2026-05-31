import { motion } from "motion/react";

export const NAVLINKS = [
  { name: "Our services", href: "#services" },
  { name: "Who we are", href: "#manifesto" },
  { name: "How it works", href: "#timeline" },
  { name: "Testimonials", href: "#testimonials" },
];


export const MARQUEE_LOGOS = [
  { name: 'Kolektif Design', category: 'Creative' },
  { name: 'Sofi Design', category: 'Architecture' },
  { name: 'Aether Capital', category: 'Venture' },
  { name: 'Vanguard Law', category: 'Council' },
  { name: 'Hexagon Partners', category: 'Consulting' },
  { name: 'Rostov & Co.', category: 'Architects' }
];

export const SERVICES = [
  {
    id: "bookkeeping",
    num: "01",
    title: "Stay on top of your finances",
    tagline: "BUILD A STRONG FINANCIAL FOUNDATION",
    description: "We maintain organized financial records that give you a clear view of your business performance. From daily transactions to monthly reconciliations, your books stay accurate, current, and ready when you need them.",
    features: [
      "Transaction recording and categorization",
      "Bank, credit card and M-Pesa reconciliations",
      "Monthly financial updates",
      "Organized records year-round"
    ],
    illustration: (
     <img src="../src/assets/card-img1.svg" alt="Dashboard image" />
    )
  },
  {
    id: "tax",
    num: "02",
    title: "Navigate tax obligations with ease",
    tagline: "STAY COMPLIANT, STAY CONFIDENT",
    description: "Tax obligations shouldn't be a source of stress. We help ensure your records are tax-ready and assist with compliance requirements so you can focus on running your business with confidence.",
    features: [
      "KRA tax filing support",
      "VAT and PAYE assistance",
      "Tax-ready financial records",
      "Compliance guidance and documentation"
    ],
    numClass: "text-stone-600",
    borderClass: "border-stone-400/40",
    accentDot: "bg-stone-800",
    illustration: (
      <img src="../src/assets/card-img1.svg" alt="Tax illustration" />
    )
  },
  {
    id: "cfo",
    num: "03",
    title: "Make smarter financial decisions",
    tagline: "TURN NUMBERS INTO OPPORTUNITIES",
    description: "Your financial data tells a story. We help you understand that story through practical insights that support better planning, stronger cash flow management, and sustainable growth.",
    features: [
      "Cash flow analysis",
      "Financial performance reviews",
      "Budgeting support",
      "Business growth insights"
    ],
    numClass: "text-stone-700",
    borderClass: "border-stone-400/50",
    accentDot: "bg-stone-900",
    illustration: (
      <svg className="w-full h-full text-stone-700" viewBox="0 0 300 160" fill="none" stroke="currentColor">
        <circle cx="50" cy="100" r="4" fill="currentColor" />
        <circle cx="150" cy="50" r="4" fill="currentColor" />
        <circle cx="150" cy="110" r="3" stroke="currentColor" strokeWidth="1" />
        <circle cx="250" cy="70" r="4" fill="currentColor" />
        <motion.line
          x1="50" y1="100" x2="150" y2="50"
          strokeWidth="1.2"
          stroke="#111111"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5 }}
        />
        <motion.line
          x1="150" y1="50" x2="250" y2="70"
          strokeWidth="1.2"
          stroke="#111111"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        />
        <motion.line
          x1="50" y1="100" x2="150" y2="110"
          strokeWidth="1"
          strokeDasharray="4 2"
          strokeOpacity="0.3"
        />
        <motion.line
          x1="150" y1="110" x2="250" y2="70"
          strokeWidth="1"
          strokeDasharray="4 2"
          strokeOpacity="0.3"
        />
        <circle cx="150" cy="50" r="14" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.2" />
        <text x="160" y="45" fontSize="7" fontFamily="var(--font-mono)" fill="currentColor" fillOpacity="0.5">VALUATION APEX</text>
        <text x="50" y="85" fontSize="7" fontFamily="var(--font-mono)" fill="currentColor" fillOpacity="0.5">RUNWAY THRESHOLD</text>
      </svg>
    )
  }
];
