import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

export default function AnimatedRobot() {
  const controls = useAnimationControls();

  useEffect(() => {
    const sequence = async () => {
      await controls.start({
        x: 0,
        transition: { duration: 2.5, ease: "easeOut" },
      });

      await controls.start({
        rotate: [0, -5, 5, -5, 5, 0],
        transition: { duration: 1.5, times: [0, 0.2, 0.4, 0.6, 0.8, 1] },
      });

      await new Promise((resolve) => setTimeout(resolve, 500));

      await controls.start({
        x: "100vw",
        transition: { duration: 2.5, ease: "easeIn" },
      });
    };

    sequence();
  }, [controls]);

  return (
    <motion.div
      initial={{ x: "-20vw" }}
      animate={controls}
      className="fixed bottom-4 left-0 z-50 pointer-events-none"
      style={{ width: "140px", height: "180px" }}
    >
      <svg
        viewBox="0 0 120 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-lg"
      >
        <defs>
          <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(0 0% 98%)" />
            <stop offset="100%" stopColor="hsl(0 0% 92%)" />
          </linearGradient>
        </defs>
        <g id="baymax-robot">
          <motion.ellipse
            cx="60"
            cy="35"
            rx="28"
            ry="30"
            fill="url(#bodyGradient)"
            stroke="hsl(0 0% 85%)"
            strokeWidth="2"
            animate={{
              ry: [30, 29, 30],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <rect
            x="42"
            y="30"
            width="8"
            height="3"
            rx="1.5"
            fill="hsl(0 0% 20%)"
          />
          <rect
            x="70"
            y="30"
            width="8"
            height="3"
            rx="1.5"
            fill="hsl(0 0% 20%)"
          />
          
          <motion.ellipse
            cx="60"
            cy="80"
            rx="35"
            ry="38"
            fill="url(#bodyGradient)"
            stroke="hsl(0 0% 85%)"
            strokeWidth="2"
            animate={{
              ry: [38, 37, 38],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <motion.g
            animate={{
              x: [-2, 2, -2],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ellipse
              cx="30"
              cy="75"
              rx="10"
              ry="25"
              fill="url(#bodyGradient)"
              stroke="hsl(0 0% 85%)"
              strokeWidth="2"
            />
          </motion.g>
          
          <motion.g
            animate={{
              x: [2, -2, 2],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ellipse
              cx="90"
              cy="75"
              rx="10"
              ry="25"
              fill="url(#bodyGradient)"
              stroke="hsl(0 0% 85%)"
              strokeWidth="2"
            />
          </motion.g>
          
          <motion.ellipse
            cx="45"
            cy="130"
            rx="12"
            ry="28"
            fill="url(#bodyGradient)"
            stroke="hsl(0 0% 85%)"
            strokeWidth="2"
            animate={{
              ry: [28, 26, 28],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.ellipse
            cx="75"
            cy="130"
            rx="12"
            ry="28"
            fill="url(#bodyGradient)"
            stroke="hsl(0 0% 85%)"
            strokeWidth="2"
            animate={{
              ry: [28, 26, 28],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </g>
      </svg>
    </motion.div>
  );
}
