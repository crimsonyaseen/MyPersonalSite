import { motion } from "framer-motion";
import BouncyText from "@/components/BouncyText";

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-background">
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative flex items-start justify-center w-full h-full pt-24 md:pt-32"
      >
        <div className="px-4 md:px-8 max-w-4xl mx-auto text-center">
          <BouncyText
            text="coming soon..."
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight tracking-tight text-foreground"
          />
        </div>
      </motion.div>
    </div>
  );
}
