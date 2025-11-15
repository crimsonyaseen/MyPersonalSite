import { motion } from "framer-motion";
import BackButton from "@/components/navigation/BackButton";

export default function About() {
  return (
    <div className="relative min-h-screen bg-background p-8 pt-24">
      <BackButton />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-light text-foreground mb-8">
          About Me
        </h1>

        <div className="space-y-6 text-foreground/80 leading-relaxed">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-border rounded-lg p-8"
          >
            <h2 className="text-2xl font-semibold text-foreground mb-4">Who I Am</h2>
            <p className="mb-4">
              Hi! I'm Yaseen Mohamed, a product engineer / PM with a love for creating 
              beautiful and functional experiences. I specialize product development and have a deep interest in Finance & Trading as well.
              (Check out my automated trading bot - YMO)
              
            </p>
            <p>
              My journey in tech started with curiosity and has grown into a career where 
              I get to solve problems and build things that make a difference - Currently at{" "}
              <span className="inline-flex items-center gap-1.5 font-semibold text-[#00A4EF]">
                <svg className="inline w-3 h-3" viewBox="0 0 23 23" fill="currentColor">
                  <path d="M0 0h11v11H0z" />
                  <path d="M12 0h11v11H12z" />
                  <path d="M0 12h11v11H0z" />
                  <path d="M12 12h11v11H12z" />
                </svg>
                Microsoft AI
              </span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-card border border-border rounded-lg p-8"
          >
            <h2 className="text-2xl font-semibold text-foreground mb-4">What I Do</h2>
            <p className="mb-4">
              A bunch of random stuff to be honest. I built this website with React, 
              TypeScript, and Node.js. I'm passionate about great user experiences, 
              continuous learning, and new projects that excite me.
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground/70">
              <li>Full-stack web development</li>
              <li>Frontend architecture and design systems</li>
              <li>API design and backend development</li>
              <li>Cloud infrastructure and DevOps</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-card border border-border rounded-lg p-8"
          >
            <h2 className="text-2xl font-semibold text-foreground mb-4">Beyond PM'ing</h2>
            <p>
              When I'm not managing projects, you can find me exploring new places, capturing moments
              through photography, or diving into the latest tech trends. I believe in
              continuous growth, both personally and professionally.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
