const skills = {
  Languages: ["Python", "JavaScript", "Java", "C", "SQL"],
  Frontend: ["React.js", "HTML", "Tailwind CSS"],
  Backend: ["Node.js", "FastAPI", "Flask", "Django"],
  Databases: ["PostgreSQL", "MongoDB", "SQL"],
  Tools: ["JavaFX", "Git", "Figma", "Excel"],
};

const SkillsSection = () => {
  return (
    <section id="skills" className="border-b border-border px-6 py-20 md:py-32">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground">
              02 — Skills
            </p>
          </div>

          <div className="md:col-span-8">
            <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight mb-12">
              Technical Arsenal
            </h2>

            <div className="space-y-0">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="border-t border-border py-6 grid grid-cols-1 md:grid-cols-4 gap-4">
                  <p className="font-body text-xs uppercase tracking-widest text-muted-foreground pt-1">
                    {category}
                  </p>
                  <div className="md:col-span-3 flex flex-wrap gap-3">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="font-body text-sm border border-border px-4 py-2 hover-fill cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
