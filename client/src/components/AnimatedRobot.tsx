import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedRobot() {
  const controls = useAnimationControls();
  const [animationPhase, setAnimationPhase] = useState<"walking" | "lookingAround" | "stopped">("walking");

  useEffect(() => {
    const sequence = async () => {
      setAnimationPhase("walking");
      await controls.start({
        x: "45vw",
        transition: { 
          duration: 5, 
          ease: "linear",
        },
      });

      setAnimationPhase("stopped");
      await new Promise((resolve) => setTimeout(resolve, 300));
      
      setAnimationPhase("lookingAround");
      await controls.start({
        rotate: [0, -8, 0, 8, 0, -5, 0],
        transition: { 
          duration: 2.5,
          times: [0, 0.15, 0.3, 0.5, 0.65, 0.85, 1],
          type: "spring",
          damping: 12,
          stiffness: 150,
        },
      });

      await new Promise((resolve) => setTimeout(resolve, 400));

      setAnimationPhase("walking");
      await controls.start({
        x: "120vw",
        transition: { 
          duration: 5, 
          ease: "linear",
        },
      });
    };

    sequence();
  }, [controls]);

  const springTransition = {
    type: "spring" as const,
    damping: 12,
    stiffness: 180,
    mass: 0.8,
  };

  return (
    <motion.div
      initial={{ x: "-15vw" }}
      animate={controls}
      className="fixed bottom-8 left-0 z-50 pointer-events-none"
      style={{ width: "100px", height: "140px" }}
    >
      <motion.svg
        viewBox="0 0 80 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        animate={
          animationPhase === "walking"
            ? {
                y: [0, -3, 0, -3, 0],
              }
            : {}
        }
        transition={{
          duration: 0.8,
          repeat: animationPhase === "walking" ? Infinity : 0,
          ease: "easeInOut",
        }}
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
              animationPhase === "lookingAround"
                ? {
                    x: [0, -2, 2, -1, 1, 0],
                  }
                : {}
            }
            transition={{
              duration: 2.5,
              times: [0, 0.2, 0.4, 0.6, 0.8, 1],
              type: "spring",
              damping: 12,
            }}
          />
          
          <motion.circle
            cx="35"
            cy="13"
            r="2.5"
            fill="hsl(0 0% 100%)"
            animate={
              animationPhase === "lookingAround"
                ? {
                    scaleY: [1, 0.1, 1],
                    x: [0, -1, 1, 0],
                  }
                : {}
            }
            transition={{
              duration: 2.5,
              times: [0, 0.4, 0.6, 1],
            }}
          />
          <motion.circle
            cx="45"
            cy="13"
            r="2.5"
            fill="hsl(0 0% 100%)"
            animate={
              animationPhase === "lookingAround"
                ? {
                    scaleY: [1, 0.1, 1],
                    x: [0, -1, 1, 0],
                  }
                : {}
            }
            transition={{
              duration: 2.5,
              times: [0, 0.4, 0.6, 1],
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
              animationPhase === "walking"
                ? {
                    rotate: [2, -2, 2],
                  }
                : animationPhase === "lookingAround"
                ? {
                    rotate: [0, -3, 3, -2, 0],
                  }
                : {}
            }
            transition={{
              ...springTransition,
              duration: animationPhase === "walking" ? 0.4 : 2.5,
              repeat: animationPhase === "walking" ? Infinity : 0,
            }}
            style={{ originX: "40px", originY: "27px" }}
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
              animationPhase === "walking"
                ? {
                    rotate: [-40, 30, -40],
                  }
                : animationPhase === "lookingAround"
                ? {
                    rotate: [0, -10, 10, -5, 0],
                  }
                : {}
            }
            transition={{
              ...springTransition,
              duration: animationPhase === "walking" ? 0.4 : 2,
              repeat: animationPhase === "walking" ? Infinity : 0,
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
              animationPhase === "walking"
                ? {
                    rotate: [30, -40, 30],
                  }
                : animationPhase === "lookingAround"
                ? {
                    rotate: [0, 10, -10, 5, 0],
                  }
                : {}
            }
            transition={{
              ...springTransition,
              duration: animationPhase === "walking" ? 0.4 : 2,
              repeat: animationPhase === "walking" ? Infinity : 0,
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
                animationPhase === "walking"
                  ? {
                      rotate: [-35, 25, -35],
                    }
                  : {}
              }
              transition={{
                ...springTransition,
                duration: 0.4,
                repeat: animationPhase === "walking" ? Infinity : 0,
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
                animationPhase === "walking"
                  ? {
                      rotate: [10, -15, 10],
                    }
                  : {}
              }
              transition={{
                ...springTransition,
                duration: 0.4,
                repeat: animationPhase === "walking" ? Infinity : 0,
              }}
              style={{ originX: "30px", originY: "95px" }}
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
                animationPhase === "walking"
                  ? {
                      rotate: [25, -35, 25],
                    }
                  : {}
              }
              transition={{
                ...springTransition,
                duration: 0.4,
                repeat: animationPhase === "walking" ? Infinity : 0,
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
                animationPhase === "walking"
                  ? {
                      rotate: [-15, 10, -15],
                    }
                  : {}
              }
              transition={{
                ...springTransition,
                duration: 0.4,
                repeat: animationPhase === "walking" ? Infinity : 0,
              }}
              style={{ originX: "50px", originY: "95px" }}
            />
          </motion.g>
        </g>
      </motion.svg>
    </motion.div>
  );
}
