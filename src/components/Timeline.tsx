import { useRef } from "react";
import { motion, useScroll } from "motion/react";
import { Calendar, Network, Settings, Sparkles } from "lucide-react";
import { TIMELINE } from "../data";

function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const timelineIcons = [
    <Calendar className="w-4 h-4 text-white" />,
    <Network className="w-4 h-4 text-white" />,
    <Settings className="w-4 h-4 text-white" />,
    <Sparkles className="w-4 h-4 text-white" />,
  ];

  return (
    <section
      id="timeline"
      ref={containerRef}
      className="py-24 md:py-32 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header content */}
        <div className="text-center max-w-xl mx-auto mb-20 md:mb-28">
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-black tracking-tight leading-none mb-6">
            How It Works
          </h2>
          <p className="leading-relaxed text-black">
            A proven framework designed to transform financial records into
            clarity, control, and confident decision-making.
          </p>
        </div>

        {/* Timeline wrapper containing drawing line interaction */}
        <div className="relative mt-12 md:mt-24">
          {/* Animated Scroll Drawing Line */}
          <motion.div
            style={{
              scaleY: scrollYProgress,
              originY: 0,
            }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-black -translate-x-1/2 pointer-events-none"
          />
          {/* Timeline steps */}
          <div className="space-y-16 md:space-y-24 relative">
            {TIMELINE.map((step, idx) => {
              const isEven = idx % 2 === 1;

              return (
                <div
                  id={`timeline-step-${step.id}`}
                  key={step.id}
                  className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                >
                  {/* Left Side: step content on odd rows, or placeholder on even rows */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className={`pl-10 md:pl-0 text-left ${
                      isEven
                        ? "order-2 md:order-2 md:pl-12"
                        : "order-2 md:order-1 md:text-right md:pr-12"
                    }`}
                  >
                    <div
                      className={`mb-3 inline-flex items-center gap-2 font-heading text-xs font-semibold text-black/60 uppercase tracking-widest ${
                        isEven
                          ? "justify-start"
                          : "justify-start md:justify-end"
                      }`}
                    >
                      <span>PHASE {step.num}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-black/20" />
                      <span className="font-semibold text-black/60">
                        {step.metric}
                      </span>
                    </div>

                    <h3 className="font-bold text-lg md:text-xl text-black tracking-tight mb-2">
                      {step.title}
                    </h3>

                    <p
                      className={`leading-relaxed text-black max-w-sm ${
                        isEven ? "" : "md:ml-auto"
                      }`}
                    >
                      {step.description}
                    </p>
                  </motion.div>

                    {/* Absolute Center Node visual tracker */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-black border border-white flex items-center justify-center z-10 shadow-lg">
                    {timelineIcons[idx]}
                  </div>

                  {/* Right Side placeholder container to keep grid alignment centered */}
                  <div className={`hidden md:block ${isEven ? 'order-1' : 'order-3'}`} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;
