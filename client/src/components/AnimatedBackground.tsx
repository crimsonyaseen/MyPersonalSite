import { motion } from "framer-motion";
import { useTheme } from "../lib/theme-provider";

export default function AnimatedBackground() {
  const { theme } = useTheme();
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Main gradient sphere */}
      <motion.div
        className="absolute w-[1200px] h-[1200px] rounded-full blur-[120px] opacity-20"
        style={{
          background: theme === 'dark' 
            ? "radial-gradient(circle, rgba(147, 197, 253, 0.15) 0%, rgba(139, 92, 246, 0.1) 45%, transparent 70%)"
            : "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(139, 92, 246, 0.2) 45%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.25, 0.2],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Secondary accent gradients */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full blur-[100px] opacity-10"
        style={{
          background: theme === 'dark'
            ? "radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, transparent 70%)",
          top: "20%",
          right: "-10%",
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-[90px] opacity-10"
        style={{
          background: theme === 'dark'
            ? "radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%)",
          bottom: "10%",
          left: "-5%",
        }}
        animate={{
          scale: [1, 1.15, 1],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Subtle gradient overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: theme === 'dark'
            ? "radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.2) 100%)"
            : "radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.05) 100%)",
        }}
      />
    </div>
  );
}
