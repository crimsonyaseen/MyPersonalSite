import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaDocker, FaAws, FaGitAlt } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiPostgresql, SiMongodb, SiGraphql, SiNextdotjs } from "react-icons/si";

interface Skill {
  name: string;
  icon: JSX.Element;
  color: string;
}

const skills: Skill[] = [
  { name: "React", icon: <FaReact />, color: "text-[#61DAFB]" },
  { name: "TypeScript", icon: <SiTypescript />, color: "text-[#3178C6]" },
  { name: "Node.js", icon: <FaNodeJs />, color: "text-[#339933]" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "text-foreground" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "text-[#06B6D4]" },
  { name: "Python", icon: <FaPython />, color: "text-[#3776AB]" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-[#4169E1]" },
  { name: "MongoDB", icon: <SiMongodb />, color: "text-[#47A248]" },
  { name: "GraphQL", icon: <SiGraphql />, color: "text-[#E10098]" },
  { name: "Docker", icon: <FaDocker />, color: "text-[#2496ED]" },
  { name: "AWS", icon: <FaAws />, color: "text-[#FF9900]" },
  { name: "Git", icon: <FaGitAlt />, color: "text-[#F05032]" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
};

export default function Skills() {
  return (
    <section className="relative py-20 px-4 md:px-8 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mb-12 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-light text-foreground mb-4">
          Skills & Technologies
        </h2>
        <p className="text-foreground/60 text-lg">
          Tools and technologies I work with
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.1,
              y: -5,
              transition: { duration: 0.2 }
            }}
            className="flex flex-col items-center gap-3 p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors cursor-pointer"
          >
            <div className={`text-4xl ${skill.color}`}>
              {skill.icon}
            </div>
            <span className="text-sm font-medium text-foreground/80">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
