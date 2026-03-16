import { motion } from "framer-motion";

const skills = {
  Languages: ["Python", "JavaScript", "TypeScript", "Java", "C", "SQL"],
  Frontend: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Sass"],
  Backend: ["Node.js", "Express.js", "FastAPI", "Flask", "Django", "REST APIs"],
  Databases: ["PostgreSQL", "MongoDB", "MySQL", "Firebase"],
  "Design & UI": ["Figma", "Adobe XD", "Responsive Design", "Wireframing", "Prototyping"],
  "DevOps & Tools": ["Git", "GitHub", "Docker", "VS Code", "Postman", "Vercel", "Netlify"],
};

const SkillsSection = () => {
  return (
    <section id="skills" className="border-b border-border px-6 py-20 md:py-32">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <motion.div
            className="md:col-span-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground">
              02 — Skills
            </p>
          </motion.div>

          <div className="md:col-span-8">
            <motion.h2
              className="font-display text-3xl md:text-5xl font-bold leading-tight mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              Technical Arsenal
            </motion.h2>

            <div className="space-y-0">
              {Object.entries(skills).map(([category, items], catIndex) => (
                <motion.div
                  key={category}
<<<<<<< HEAD
                  className="group border-t border-border/80 py-6 grid grid-cols-1 md:grid-cols-4 gap-4 transition-colors duration-300 hover:border-white/20"
=======
                  className="border-t border-border py-6 grid grid-cols-1 md:grid-cols-4 gap-4"
>>>>>>> e4bb60752072ec142cce04758404c217137c2289
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: catIndex * 0.08 }}
                >
                  <p className="font-body text-xs uppercase tracking-widest text-muted-foreground pt-1">
                    {category}
                  </p>
                  <div className="md:col-span-3 flex flex-wrap gap-3">
                    {items.map((skill, i) => (
                      <motion.span
                        key={skill}
<<<<<<< HEAD
                        className="skill-pill font-body text-sm px-4 py-2 cursor-default"
=======
                        className="font-body text-sm border border-border px-4 py-2 hover-fill cursor-default"
>>>>>>> e4bb60752072ec142cce04758404c217137c2289
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: catIndex * 0.08 + i * 0.03 }}
<<<<<<< HEAD
                        whileHover={{ y: -4, scale: 1.03 }}
=======
                        whileHover={{ y: -2 }}
>>>>>>> e4bb60752072ec142cce04758404c217137c2289
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
