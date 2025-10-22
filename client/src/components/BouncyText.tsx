import { motion } from "framer-motion";
import { useState } from "react";

interface BouncyTextProps {
  text: string;
  className?: string;
}

export default function BouncyText({ text, className = "" }: BouncyTextProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const letters = text.split("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.2,
      },
    },
  };

  const letterVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.div
      className={`flex flex-wrap justify-center ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          animate={{
            y: hoveredIndex === index ? -12 : 0,
          }}
          transition={{
            type: "spring",
            damping: 10,
            stiffness: 300,
            mass: 0.5,
          }}
          className="inline-block cursor-default"
          style={{
            textShadow:
              hoveredIndex === index
                ? "0 0 20px hsl(210 100% 60% / 0.6), 0 0 40px hsl(210 100% 60% / 0.3)"
                : "none",
            transition: "text-shadow 0.3s ease",
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
}
