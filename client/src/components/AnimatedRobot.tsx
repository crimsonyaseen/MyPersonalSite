import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedRobot() {
  const controls = useAnimationControls();
  const [isWalking, setIsWalking] = useState(true);

  useEffect(() => {
    const sequence = async () => {
      setIsWalking(true);
      await controls.start({
        x: "45vw",
        transition: { 
          duration: 4, 
          ease: "linear",
        },
      });

      setIsWalking(false);
      await controls.start({
        rotate: [0, -10, 10, -10, 10, 0],
        y: [0, -5, 0, -5, 0, 0],
        transition: { 
          duration: 1.8, 
          times: [0, 0.2, 0.4, 0.6, 0.8, 1],
          type: "spring",
          damping: 8,
          stiffness: 200,
        },
      });

      await new Promise((resolve) => setTimeout(resolve, 600));

      setIsWalking(true);
      await controls.start({
        x: "120vw",
        transition: { 
          duration: 4, 
          ease: "linear",
        },
      });
    };

    sequence();
  }, [controls]);

  const springTransition = {
    type: "spring" as const,
    damping: 10,
    stiffness: 200,
    mass: 0.5,
  };

  return (
    <motion.div
      initial={{ x: "-15vw" }}
      animate={controls}
      className="fixed bottom-8 left-0 z-50 pointer-events-none"
      style={{ width: "100px", height: "140px" }}
    >
      <svg
        viewBox="0 0 80 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <g id="stick-robot">
          <motion.circle
            cx="40"
            cy="15"
            r="12"
            fill="hsl(0 0% 10%)"
            stroke="hsl(0 0% 100%)"
            strokeWidth="2"
            animate={
              isWalking
                ? {
                    y: [0, -2, 0],
                  }
                : {
                    scale: [1, 1.05, 1],
                  }
            }
            transition={{
              ...springTransition,
              duration: isWalking ? 0.4 : 1.5,
              repeat: Infinity,
            }}
          />
          
          <motion.circle
            cx="35"
            cy="13"
            r="2.5"
            fill="hsl(0 0% 100%)"
            animate={
              !isWalking && {
                scaleY: [1, 0.1, 1],
              }
            }
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 2,
            }}
          />
          <motion.circle
            cx="45"
            cy="13"
            r="2.5"
            fill="hsl(0 0% 100%)"
            animate={
              !isWalking && {
                scaleY: [1, 0.1, 1],
              }
            }
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 2,
            }}
          />
          
          <motion.line
            x1="40"
            y1="27"
            x2="40"
            y2="65"
            stroke="hsl(0 0% 10%)"
            strokeWidth="3.5"
            strokeLinecap="round"
            animate={
              isWalking
                ? {
                    y2: [65, 63, 65],
                  }
                : {}
            }
            transition={{
              ...springTransition,
              duration: 0.4,
              repeat: Infinity,
            }}
          />
          
          <motion.line
            x1="40"
            y1="35"
            x2="20"
            y2="55"
            stroke="hsl(0 0% 10%)"
            strokeWidth="3"
            strokeLinecap="round"
            animate={
              isWalking
                ? {
                    rotate: [-35, 35, -35],
                  }
                : {
                    y2: [55, 50, 55],
                  }
            }
            transition={{
              ...springTransition,
              duration: isWalking ? 0.4 : 1.5,
              repeat: Infinity,
            }}
            style={{ originX: "40px", originY: "35px" }}
          />
          
          <motion.line
            x1="40"
            y1="35"
            x2="60"
            y2="55"
            stroke="hsl(0 0% 10%)"
            strokeWidth="3"
            strokeLinecap="round"
            animate={
              isWalking
                ? {
                    rotate: [35, -35, 35],
                  }
                : {
                    y2: [55, 50, 55],
                  }
            }
            transition={{
              ...springTransition,
              duration: isWalking ? 0.4 : 1.5,
              repeat: Infinity,
            }}
            style={{ originX: "40px", originY: "35px" }}
          />
          
          <motion.g>
            <motion.line
              x1="40"
              y1="65"
              x2="30"
              y2="95"
              stroke="hsl(0 0% 10%)"
              strokeWidth="3.5"
              strokeLinecap="round"
              animate={
                isWalking
                  ? {
                      rotate: [-20, 20, -20],
                    }
                  : {}
              }
              transition={{
                ...springTransition,
                duration: 0.4,
                repeat: Infinity,
              }}
              style={{ originX: "40px", originY: "65px" }}
            />
            <motion.line
              x1="30"
              y1="95"
              x2="28"
              y2="108"
              stroke="hsl(0 0% 10%)"
              strokeWidth="3.5"
              strokeLinecap="round"
              animate={
                isWalking
                  ? {
                      rotate: [-20, 20, -20],
                    }
                  : {}
              }
              transition={{
                ...springTransition,
                duration: 0.4,
                repeat: Infinity,
              }}
              style={{ originX: "40px", originY: "65px" }}
            />
          </motion.g>
          
          <motion.g>
            <motion.line
              x1="40"
              y1="65"
              x2="50"
              y2="95"
              stroke="hsl(0 0% 10%)"
              strokeWidth="3.5"
              strokeLinecap="round"
              animate={
                isWalking
                  ? {
                      rotate: [20, -20, 20],
                    }
                  : {}
              }
              transition={{
                ...springTransition,
                duration: 0.4,
                repeat: Infinity,
              }}
              style={{ originX: "40px", originY: "65px" }}
            />
            <motion.line
              x1="50"
              y1="95"
              x2="52"
              y2="108"
              stroke="hsl(0 0% 10%)"
              strokeWidth="3.5"
              strokeLinecap="round"
              animate={
                isWalking
                  ? {
                      rotate: [20, -20, 20],
                    }
                  : {}
              }
              transition={{
                ...springTransition,
                duration: 0.4,
                repeat: Infinity,
              }}
              style={{ originX: "40px", originY: "65px" }}
            />
          </motion.g>
        </g>
      </svg>
    </motion.div>
  );
}
