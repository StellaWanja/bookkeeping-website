import { useRef, useState } from "react";
import { useMotionValueEvent, useScroll, useTransform } from "motion/react";
import { SERVICES } from "../data";
import CardSection from "./services/CardSection.tsx";

export default function ServicesAccordion() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll on the entire outer pinning container frame
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Monitor the scroll position to dynamically set the active layout index trigger for drawing paths
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.28) {
      setActiveCardIndex(0);
    } else if (latest >= 0.28 && latest < 0.53) {
      setActiveCardIndex(1);
    } else if (latest >= 0.53 && latest < 0.78) {
      setActiveCardIndex(2);
    } else {
      setActiveCardIndex(3);
    }
  });

  // Calculate same-speed slide offsets and scale transformations for the stacked sequence
  // Index 0 (Bookkeeping): stays active, and scales/fades safely downstream
  const card0Y = 0;
  const card0Scale = useTransform(
    scrollYProgress,
    [0, 0.05, 0.25, 0.35, 0.95, 1],
    [1, 1, 0.95, 0.95, 0.92, 0.92],
  );
  const card0Opacity = useTransform(
    scrollYProgress,
    [0, 0.05, 0.25, 0.35, 0.95, 1],
    [1, 1, 0.65, 0.65, 0.45, 0.45],
  );

  // Index 1 (Tax Strategy): slides up from below ("100%") between [0.05, 0.25]
  const card1Y = useTransform(
    scrollYProgress,
    [0, 0.05, 0.25, 0.3, 0.95, 1],
    ["100%", "100%", "0%", "0%", "0%", "0%"],
  );
  const card1Scale = useTransform(
    scrollYProgress,
    [0, 0.25, 0.3, 0.5, 0.55, 1],
    [1, 1, 1, 0.96, 0.96, 0.96],
  );
  const card1Opacity = useTransform(
    scrollYProgress,
    [0, 0.05, 0.12, 0.5, 0.55, 1],
    [0, 0, 1, 1, 0.65, 0.65],
  );

  // Index 2 (Fractional CFO): slides up from below ("100%") between [0.30, 0.50]
  const card2Y = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.55, 0.95, 1],
    ["100%", "100%", "0%", "0%", "0%", "0%"],
  );
  const card2Scale = useTransform(
    scrollYProgress,
    [0, 0.5, 0.55, 0.75, 0.8, 1],
    [1, 1, 1, 0.96, 0.96, 0.96],
  );
  const card2Opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.38, 0.75, 0.8, 1],
    [0, 0, 1, 1, 0.65, 0.65],
  );

  // Index 3 (Compliance & Audit): slides up from below ("100%") between [0.55, 0.75]
  const card3Y = useTransform(
    scrollYProgress,
    [0, 0.55, 0.75, 1],
    ["100%", "100%", "0%", "0%"],
  );
  const card3Opacity = useTransform(
    scrollYProgress,
    [0, 0.55, 0.63, 1],
    [0, 0, 1, 1],
  );

  return (
    <section
      ref={containerRef}
      id="services"
      className="relative h-[300vh] bg-services"
    >
      {/* Sticky container that stays locked (pinned) viewport-wide during scroll progression */}
      <div className="sticky top-0 h-screen w-full flex flex-col overflow-hidden justify-center px-6 md:px-12">
        <div className="max-w-7xl mx-auto w-full">
          {/* Header row locked in sticky viewport */}
          <div className="grid md:grid-cols-2 gap-4 mb-8 md:mb-10 items-end">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tight text-black mt-2">
                Services aligned to your elevation.
              </h2>
            </div>
            <div>
              <p className="text-sm md:text-base text-black max-w-sm ml-auto md:mr-0 leading-relaxed normal-case">
                We build reliable financial systems that support sustainable
                business growth. By structuring your finances properly, we help
                you allocate resources efficiently, improve financial control,
                and prepare your business for scale.
              </p>
            </div>
          </div>

          {/* Cards Active Deck Frame: Exactly as tall as a single card! */}
          {/* Sinks content securely so it doesn't overflow any viewport screen size */}
          <div className="relative w-full max-w-7xl h-132.5 xs:h-[480px] sm:h-100 md:h-100 lg:h-92.5 mx-auto mt-2">
            {/* Card 0: Bookkeeping */}
            <CardSection
              service={SERVICES[0]}
              index={0}
              y={card0Y}
              scale={card0Scale}
              opacity={card0Opacity}
              activeCardIndex={activeCardIndex}
            />

            {/* Card 1: Tax Strategy */}
            <CardSection
              service={SERVICES[1]}
              index={1}
              y={card1Y}
              scale={card1Scale}
              opacity={card1Opacity}
              activeCardIndex={activeCardIndex}
            />

            {/* Card 2: Payroll */}
            <CardSection
              service={SERVICES[2]}
              index={2}
              y={card2Y}
              scale={card2Scale}
              opacity={card2Opacity}
              activeCardIndex={activeCardIndex}
            />

            {/* Card 3: Fractional CFO */}
            <CardSection
              service={SERVICES[3]}
              index={3}
              y={card3Y}
              scale={1}
              opacity={card3Opacity}
              activeCardIndex={activeCardIndex}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
