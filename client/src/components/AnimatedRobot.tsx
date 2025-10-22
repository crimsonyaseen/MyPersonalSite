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
      initial={{ x: "-30vw" }}
      animate={controls}
      className="fixed bottom-8 left-0 z-50 pointer-events-none"
      style={{ width: "250px", height: "250px" }}
    >
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-lg"
      >
        <g id="robot">
          <motion.rect
            x="60"
            y="50"
            width="80"
            height="90"
            rx="8"
            fill="hsl(210 100% 60%)"
            stroke="hsl(210 100% 40%)"
            strokeWidth="3"
            animate={{
              y: [50, 48, 50],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <motion.circle
            cx="85"
            cy="80"
            r="8"
            fill="hsl(0 0% 100%)"
            animate={{
              scale: [1, 0.2, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 2,
            }}
          />
          <motion.circle
            cx="115"
            cy="80"
            r="8"
            fill="hsl(0 0% 100%)"
            animate={{
              scale: [1, 0.2, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 2,
            }}
          />
          
          <rect
            x="75"
            y="105"
            width="50"
            height="15"
            rx="7.5"
            fill="hsl(0 0% 100%)"
            opacity="0.8"
          />
          
          <motion.g
            animate={{
              rotate: [-5, 5, -5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ originX: "50px", originY: "80px" }}
          >
            <rect
              x="35"
              y="70"
              width="20"
              height="50"
              rx="5"
              fill="hsl(210 100% 60%)"
              stroke="hsl(210 100% 40%)"
              strokeWidth="2"
            />
          </motion.g>
          
          <motion.g
            animate={{
              rotate: [5, -5, 5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ originX: "150px", originY: "80px" }}
          >
            <rect
              x="145"
              y="70"
              width="20"
              height="50"
              rx="5"
              fill="hsl(210 100% 60%)"
              stroke="hsl(210 100% 40%)"
              strokeWidth="2"
            />
          </motion.g>
          
          <motion.rect
            x="70"
            y="145"
            width="25"
            height="40"
            rx="5"
            fill="hsl(210 100% 60%)"
            stroke="hsl(210 100% 40%)"
            strokeWidth="2"
            animate={{
              height: [40, 35, 40],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.rect
            x="105"
            y="145"
            width="25"
            height="40"
            rx="5"
            fill="hsl(210 100% 60%)"
            stroke="hsl(210 100% 40%)"
            strokeWidth="2"
            animate={{
              height: [40, 35, 40],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          
          <circle
            cx="100"
            cy="35"
            r="6"
            fill="hsl(30 95% 52%)"
          >
            <animate
              attributeName="opacity"
              values="1;0.3;1"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </svg>
    </motion.div>
  );
}
