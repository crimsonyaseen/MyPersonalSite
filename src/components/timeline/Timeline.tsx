import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TimelineItem {
  year: string;
  title: string;
  organization: string;
  description: string;
  type: "education" | "career";
}

const timelineData: TimelineItem[] = [
  {
    year: "2023 - Current",
    title: "Product Manager",
    organization: "Microsoft AI",
    description: "Delivering high-quality data to power Microsoft AI Copilot, Search, & Maps.",
    type: "career"
  },
  {
    year: "2022",
    title: "Product Manager Intern",
    organization: "Microsoft",
    description: "Delivered new UX Features for Bing Search.",
    type: "career"
  },
  {
    year: "2023",
    title: "Bachelor's Degree in Computer Science",
    organization: "University of Notre Dame",
    description: "Deans List Recipient 2x",
    type: "education"
  },
  {
    year: "2020",
    title: "Software Engineering Intern",
    organization: "Tech Corp",
    description: "Developed features for web applications and learned industry best practices.",
    type: "career"
  },
  {
    year: "2019",
    title: "Started Coding Journey",
    organization: "Self-taught",
    description: "Began learning web development through online courses and personal projects.",
    type: "education"
  },
  {
    year: "2018",
    title: "High School Graduation",
    organization: "High School Name",
    description: "Discovered passion for technology and problem-solving.",
    type: "education"
  }
];

function TimelineItemComponent({ item, index }: { item: TimelineItem; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -50 : 50 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`flex ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 mb-12`}
    >
      {/* Content Card */}
      <div className={`flex-1 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-card border border-border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
              item.type === 'education' 
                ? 'bg-blue-500/10 text-blue-500' 
                : 'bg-green-500/10 text-green-500'
            }`}>
              {item.type === 'education' ? '🎓 Education' : '💼 Career'}
            </span>
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-1">{item.title}</h3>
          <p className="text-sm text-foreground/60 font-medium mb-2">{item.organization}</p>
          <p className="text-sm text-foreground/70">{item.description}</p>
        </motion.div>
      </div>

      {/* Timeline Dot */}
      <div className="relative flex items-center justify-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="w-6 h-6 rounded-full bg-primary border-4 border-background shadow-lg z-10"
        />
      </div>

      {/* Year */}
      <div className={`flex-1 ${isLeft ? 'md:text-left' : 'md:text-right'}`}>
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-3xl font-bold text-primary"
        >
          {item.year}
        </motion.span>
      </div>
    </motion.div>
  );
}

export default function Timeline() {
  return (
    <section className="relative py-20 px-4 md:px-8 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mb-16 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-light text-foreground mb-4">
          My Journey
        </h2>
        <p className="text-foreground/60 text-lg">
          A timeline of my educational and professional milestones
        </p>
      </motion.div>

      <div className="relative max-w-6xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
        
        {/* Timeline Items */}
        <div className="space-y-0">
          {timelineData.map((item, index) => (
            <TimelineItemComponent key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
