import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import { useState, useEffect } from "react";

export default function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide indicator after user scrolls more than 50px
      if (window.scrollY > 50) {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTimeline = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 20
      }}
      transition={{ duration: 0.8, delay: isVisible ? 1.5 : 0 }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-30 cursor-pointer pointer-events-auto"
      onClick={scrollToTimeline}
      style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
    >
      <div className="flex flex-col items-center gap-2">
        <span className="text-sm text-foreground/60 font-light">Scroll to explore</span>
        <motion.div
          animate={{ 
            y: [0, 8, 0],
          }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="text-foreground/40 hover:text-foreground/80 transition-colors"
        >
          <FiChevronDown size={32} />
        </motion.div>
      </div>
    </motion.div>
  );
}
