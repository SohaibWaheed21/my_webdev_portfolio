import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center border-b border-border px-6 pt-20">
      <div className="max-w-[1400px] mx-auto w-full">
        <motion.div
          className="mb-10 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[11px] uppercase tracking-[0.32em] text-muted-foreground shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur-sm"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          Available for freelance and product work
        </motion.div>
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

        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          <div className="max-w-4xl">
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
              className="hero-line h-px w-32 md:w-48"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.75 }}
              style={{ transformOrigin: "left" }}
            />
          </div>

          <motion.div
            className="hero-portrait hidden md:flex shrink-0 self-start lg:mt-6"
            initial={{ opacity: 0, scale: 0.92, rotate: -3, x: 16 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.03, rotate: 0.8, y: -6 }}
          >
            <div className="hero-portrait-frame">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=760&fit=crop&crop=face"
                alt="Sohaib Waheed"
                className="hero-portrait-image"
              />
            </div>
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
              className="premium-button font-display text-sm uppercase tracking-widest px-8 py-4 flex items-center gap-3"
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
