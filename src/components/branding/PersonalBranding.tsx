import { motion } from "framer-motion";
import BouncyText from "@/components/BouncyText";

export default function PersonalBranding() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center gap-6"
    >
      <BouncyText
        text="Yaseen Mohamed"
        className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extralight tracking-tight text-foreground px-2"
      />
      
      <div className="relative px-2">
        <BouncyText
          text="product engineer, curious individual"
          className="text-lg sm:text-2xl md:text-3xl font-light text-foreground/80 tracking-wide sm:tracking-wider"
        />
      </div>
    </motion.div>
  );
}