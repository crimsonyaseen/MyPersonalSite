import { useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef } from 'react';

interface UseParallaxProps {
  offset?: number;
  targetScale?: number;
}

export function useParallax(props: UseParallaxProps = {}) {
  const { offset = 50, targetScale = 1.1 } = props;
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, offset]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return { ref, y, scale };
}

export function useParallaxSection() {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  return { ref, progress: scrollYProgress };
}

// Helper function to map scroll progress to a value range
export function mapProgressToRange(
  progress: MotionValue<number>,
  inputRange: [number, number],
  outputRange: [number, number]
) {
  return useTransform(progress, inputRange, outputRange);
}