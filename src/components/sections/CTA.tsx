import { motion } from "framer-motion";
import { FiMail, FiFileText } from "react-icons/fi";

export default function CTA() {
  return (
    <section className="relative py-20 px-4 md:px-8 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
          Let's Work Together
        </h2>
        <p className="text-lg text-foreground/60 mb-12 max-w-2xl mx-auto">
          I'm always interested in hearing about new projects and opportunities.
          Whether you have a question or just want to say hi, feel free to reach out!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.a
            href="mailto:yaseenmohamed33@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
          >
            <FiMail className="w-5 h-5" />
            Get In Touch
          </motion.a>

          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-card border-2 border-border text-foreground rounded-lg font-medium hover:border-primary transition-colors"
          >
            <FiFileText className="w-5 h-5" />
            Download Resume
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-border"
        >
          <p className="text-sm text-foreground/40">
            Alright you scrolled too far down, nothing else to see here
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
