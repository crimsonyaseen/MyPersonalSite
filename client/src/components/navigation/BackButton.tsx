import { motion } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";
import { useLocation } from "wouter";

export default function BackButton() {
  const [_, setLocation] = useLocation();

  return (
    <motion.button
      onClick={() => setLocation("/")}
      className="fixed top-8 left-8 z-50 flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{ x: -4 }}
      whileTap={{ scale: 0.95 }}
    >
      <FiArrowLeft className="w-5 h-5" />
      <span className="text-sm font-light">Back</span>
    </motion.button>
  );
}