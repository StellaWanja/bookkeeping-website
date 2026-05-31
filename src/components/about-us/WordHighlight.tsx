import { motion, MotionValue, useTransform } from "motion/react";

interface WordHighlightProps {
  word: string;
  startFraction: number;
  endFraction: number;
  scrollProgress: MotionValue; // MotionValue
}

function WordHighlight({
  word,
  startFraction,
  endFraction,
  scrollProgress,
}: WordHighlightProps) {
  // Map progress to color outputs directly using startFraction and endFraction
  const color = useTransform(
    scrollProgress,
    [startFraction, endFraction],
    ["rgba(26, 26, 27, 0.15)", "rgba(26, 26, 27, 1)"],
  );

  // Subtle lift up during word highlight activity range
  const y = useTransform(
    scrollProgress,
    [startFraction, endFraction],
    [1.5, 0],
  );

  return (
    <motion.span
      style={{ color, y }}
      className="inline-block mr-2.5 mb-1.5 transition-shadow"
    >
      {word}
    </motion.span>
  );
}

export default WordHighlight;
