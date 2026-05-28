import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      // Clean, elegant, non-linear pacing
      const increment = Math.floor(Math.random() * 9) + 4;
      count = Math.min(count + increment, 100);
      setPercent(count);

      if (count >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 800);
      }
    }, 45); // Snappy but perceived loading phase

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      key="preloader"
      id="preloader-overlay"
      initial={{ opacity: 1 }}
      exit={{
        y: "-100vh",
        transition: {
          duration: 0.85,
          ease: [0.76, 0, 0.24, 1],
        },
      }}
      className="fixed inset-0 bg-black z-9999 flex flex-col justify-between p-8 md:p-12 select-none overflow-hidden"
    >
      {/* 1. Progress indicator line at the top of the screen */}
      <div className="absolute top-0 left-0 right-0 h-0.75 bg-white/5">
        <motion.div
          className="h-full bg-white opacity-90"
          style={{ width: `${percent}%` }}
          transition={{ ease: "easeInOut" }}
        />
      </div>

      {/* Spacer to force contents to the bottom */}
      <div className="grow" />

      {/* Bottom Row Layout */}
      <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-8">
        {/* 2. FA logo animating at the bottom left */}
        <div className="flex flex-col md:flex-row items-baseline gap-4 md:gap-6">
          <motion.h1
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-8xl md:text-[11rem] font-extrabold text-white tracking-tighter leading-[0.85] select-none"
          >
            NK
          </motion.h1>

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-white font-medium"
          >
            (LEDGER & ADVISORY)
          </motion.span>
        </div>

        {/* 3. Spinning loader at the bottom right */}
        <div className="flex items-center gap-4 self-end">
          <span className="text-[10px] text-stone-500 uppercase tracking-widest">
            {percent.toString().padStart(3, "0")}%
          </span>
          <div className="relative w-5 h-5">
            {/* Spinning arc loader */}
            <motion.svg
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, ease: "linear", duration: 1 }}
              className="w-full h-full text-white"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-20"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="2.5"
                fill="none"
              />
              <path
                className="opacity-90"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </motion.svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
