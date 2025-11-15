import { motion } from "framer-motion";

export default function ProfileImage() {
  return (
    <motion.div
      className="absolute md:fixed top-8 left-8 z-10"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      whileHover={{ 
        scale: 1.1,
        transition: { duration: 0.3 }
      }}
    >
      <div className="relative w-20 h-20 md:w-24 md:h-24 overflow-hidden rounded-full shadow-lg cursor-pointer">
        <img
          src={`${import.meta.env.BASE_URL}profile.jpg`}
          alt="Yaseen Mohamed"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 ring-1 ring-foreground/10 rounded-full" />
      </div>
    </motion.div>
  );
}