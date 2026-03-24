import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="border-b border-border px-6 py-20 md:py-32">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Left side - Profile Image */}
          <motion.div
            className="md:col-span-3 flex justify-center md:justify-start"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="about-image-frame group">
              <img
                src="/images/profileimg.jpeg"
                alt="Sohaib Waheed"
                className="about-image"
              />
            </div>
          </motion.div>

          {/* Right side - Content */}
          <div className="md:col-span-9">
            <motion.div
              className="md:col-span-4 mb-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground">
                01 — About
              </p>
            </motion.div>

            <motion.h2
              className="font-display text-3xl md:text-5xl font-bold leading-tight mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              Self-driven engineer with a designer's eye.
            </motion.h2>

            <motion.div
              className="space-y-6 font-body text-base text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <p>
                I'm a software engineer with hands-on experience building and deploying full-stack applications. 
                As an active freelancer, I deliver results-driven solutions across web and systems development.
              </p>
              <p>
                Currently pursuing BSc in Software Engineering at COMSATS University Islamabad, Lahore Campus. 
                My coursework spans Python, Machine Learning, Java, Node.js, MongoDB, Flask, FastAPI, React.js, and more.
              </p>
            </motion.div>

            <motion.div
              className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {[
                { label: "Focus", value: "Full-Stack" },
                { label: "Based in", value: "Lahore, PK" },
                { label: "Education", value: "COMSATS" },
                { label: "Status", value: "Available" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  className="bg-background p-4 hover:bg-secondary transition-colors duration-200"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                >
                  <p className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-1">{item.label}</p>
                  <p className="font-display text-sm font-semibold">{item.value}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
