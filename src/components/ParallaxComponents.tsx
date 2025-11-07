import { motion } from 'framer-motion';
import { useParallax, useParallaxSection } from '../lib/parallax';
import { useTheme } from '../lib/theme-provider';

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
}

export function ParallaxSection({ children, className = '' }: ParallaxSectionProps) {
  const { ref, progress } = useParallaxSection();
  const { theme } = useTheme();

  return (
    <motion.section
      ref={ref}
      className={`relative min-h-screen w-full overflow-hidden ${
        theme === 'dark' ? 'bg-slate-900' : 'bg-white'
      } ${className}`}
      style={{
        perspective: '1000px'
      }}
    >
      {children}
    </motion.section>
  );
}

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function ParallaxImage({ src, alt, className = '' }: ParallaxImageProps) {
  const { ref, y, scale } = useParallax({ offset: 100 });

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      style={{ y, scale }}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </motion.div>
  );
}

interface ParallaxTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function ParallaxText({ children, className = '', delay = 0 }: ParallaxTextProps) {
  const { ref, y } = useParallax({ offset: 30 });
  const { theme } = useTheme();

  return (
    <motion.div
      ref={ref}
      className={`${theme === 'dark' ? 'text-white' : 'text-slate-900'} ${className}`}
      style={{ y }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8, 
        delay,
        type: 'spring',
        stiffness: 100
      }}
    >
      {children}
    </motion.div>
  );
}