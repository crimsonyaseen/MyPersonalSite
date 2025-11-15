import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiImage, FiMail, FiUser } from "react-icons/fi";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Link } from "wouter";

interface SocialLink {
  icon: JSX.Element;
  href: string;
  label: string;
}

const socialLinks: SocialLink[] = [
  {
    icon: <FiGithub className="w-6 h-6" />,
    href: "https://github.com/crimsonyaseen",
    label: "GitHub",
  },
  {
    icon: <FiLinkedin className="w-6 h-6" />,
    href: "https://linkedin.com/in/-yaseenmohamed/",
    label: "LinkedIn",
  },
  {
    icon: <FiUser className="w-6 h-6" />,
    href: "/about",
    label: "About",
  },
  {
    icon: <FiImage className="w-6 h-6" />,
    href: "/gallery",
    label: "Gallery",
  },
  {
    icon: <FiMail className="w-6 h-6" />,
    href: "mailto:yaseenmohamed33@gmail.com",
    label: "Email",
  },
];

const containerVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 1,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
};

export default function FloatingNav() {
  return (
    <TooltipProvider>
      <motion.div
        className="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 mt-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="flex flex-col gap-6">
          {socialLinks.map((link) => (
            <Tooltip key={link.label}>
              <TooltipTrigger asChild>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.2,
                    filter: "drop-shadow(0 0 12px rgba(59, 130, 246, 0.7))",
                    y: -2
                  }}
                  whileTap={{ 
                    scale: 0.95,
                    filter: "drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))"
                  }}
                >
                  {link.href.startsWith("http") ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/60 hover:text-foreground transition-colors duration-200"
                      aria-label={link.label}
                    >
                      {link.icon}
                    </a>
                  ) : link.href.startsWith("mailto") ? (
                    <a
                      href={link.href}
                      className="text-foreground/60 hover:text-foreground transition-colors duration-200"
                      aria-label={link.label}
                    >
                      {link.icon}
                    </a>
                  ) : (
                    <Link href={link.href}>
                      <a
                        className="text-foreground/60 hover:text-foreground transition-colors duration-200 cursor-pointer"
                        aria-label={link.label}
                      >
                        {link.icon}
                      </a>
                    </Link>
                  )}
                </motion.div>
              </TooltipTrigger>
              <TooltipContent side="right" className="font-light">
                {link.label}
              </TooltipContent>
            </Tooltip>
          ))}
        </motion.div>
      </motion.div>
    </TooltipProvider>
  );
}