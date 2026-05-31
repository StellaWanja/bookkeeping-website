import { Check } from "lucide-react";
import { motion, MotionValue } from "motion/react";
import BookkeepingIllustration from "./BookkeepingIllustration";
import TaxIllustration from "./TaxIllustration";
import CFOIllustration from "./CFOIllustration";

interface ServiceItem {
  id: string;
  num: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  illustration: React.ReactNode;
}

interface CardSectionProps {
  service: ServiceItem;
  index: number;
  y: MotionValue<string> | number;
  scale: MotionValue<number> | number;
  opacity: MotionValue<number> | number;
  activeCardIndex: number;
}

function ServiceIllustration({
  id,
  isActive,
}: {
  id: string;
  isActive: boolean;
}) {
  switch (id) {
    case "bookkeeping":
      return <BookkeepingIllustration isActive={isActive} />;
    case "tax":
      return <TaxIllustration isActive={isActive} />;
    case "cfo":
      return <CFOIllustration isActive={isActive} />;
    default:
      return null;
  }
}

function CardSection({ service, index, y, scale, opacity, activeCardIndex }: CardSectionProps) {
  const isActive = activeCardIndex === index;

  return (
    <motion.div
      style={{
        y,
        scale,
        opacity,
        zIndex: index + 10,
      }}
      className={`absolute inset-0 w-full h-full rounded-2xl md:rounded-3xl border bg-[#FAF7F0] border-black/20 text-black p-5 xs:p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.04)] flex flex-col md:flex-row gap-5 md:gap-8 justify-between items-stretch overflow-hidden transform-gpu`}
    >
      {/* Left Column: Identifiers, Texts, Values */}
      <div className="flex-1 flex flex-col justify-between space-y-4 md:space-y-6">
        {/* Title structure */}
        <div className="space-y-1 xs:space-y-2">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-sans font-extrabold tracking-tight leading-none">
            {service.title}
          </h3>
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider mt-2">
            {service.tagline}
          </p>
        </div>

        {/* Description body paragraphs */}
        <div className="space-y-3 xs:space-y-4 grow">
          <p className="text-sm md:text-base leading-relaxed">
            {service.description}
          </p>

          <ul className="space-y-2">
            {service.features.map((feature, fIdx) => (
              <li
                key={fIdx}
                className="flex items-start gap-2 text-xs md:text-sm leading-tight"
              >
                <span className="mt-0.5 shrink-0">
                  <Check
                    className="w-3 h-3 md:w-3.5 md:h-3.5"
                    strokeWidth={2.5}
                  />
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right Column: Mini blueprint system & indicators */}
      <div className="w-full md:w-65 lg:w-[320px] flex flex-col justify-between rounded-xl p-4 border bg-alabaster border-black/50 min-h-27.5 xs:min-h-[140px] md:min-h-[unset]">
        <div className="w-full h-full flex items-center justify-center relative overflow-hidden opacity-90">
          <ServiceIllustration id={service.id} isActive={isActive} />
        </div>
      </div>
    </motion.div>
  );
}

export default CardSection;
