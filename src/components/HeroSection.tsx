import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center border-b border-border px-6 pt-20">
      <div className="max-w-[1400px] mx-auto w-full">
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-muted-foreground mb-8">
            Software Engineer — Lahore, PK
          </p>
        </motion.div>

        <div className="flex items-start justify-between gap-8">
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tight mb-8">
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              Sohaib
            </motion.span>
            <br />
            <motion.span
              className="inline-block text-primary"
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              Waheed
            </motion.span>
          </h1>

          <motion.div
            className="hidden md:block flex-shrink-0 w-44 h-44 lg:w-56 lg:h-56 rounded-2xl overflow-hidden border-2 border-border"
            initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.03, rotate: 1 }}
          >
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
              alt="Sohaib Waheed"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 md:mt-20">
          <motion.p
            className="font-body text-base md:text-lg text-muted-foreground leading-relaxed max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Full-stack developer & UI/UX designer building results-driven solutions across web and systems development. Proficient in Python, JavaScript, Java, and SQL.
          </motion.p>

          <motion.div
            className="flex items-end justify-start md:justify-end"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="font-display text-sm uppercase tracking-widest border border-border px-8 py-4 hover-fill flex items-center gap-3 transition-transform hover:translate-x-1"
            >
              View Projects
              <ArrowDown size={16} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
