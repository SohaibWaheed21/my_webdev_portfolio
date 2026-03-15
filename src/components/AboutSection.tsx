const AboutSection = () => {
  return (
    <section id="about" className="border-b border-border px-6 py-20 md:py-32">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground">
              01 — About
            </p>
          </div>

          <div className="md:col-span-8">
            <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight mb-8">
              Self-driven engineer with a designer's eye.
            </h2>

            <div className="space-y-6 font-body text-base text-muted-foreground leading-relaxed">
              <p>
                I'm a software engineer with hands-on experience building and deploying full-stack applications. 
                As an active freelancer, I deliver results-driven solutions across web and systems development.
              </p>
              <p>
                Currently pursuing BSc in Software Engineering at COMSATS University Islamabad, Lahore Campus. 
                My coursework spans Python, Machine Learning, Java, Node.js, MongoDB, Flask, FastAPI, React.js, and more.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
              {[
                { label: "Focus", value: "Full-Stack" },
                { label: "Based in", value: "Lahore, PK" },
                { label: "Education", value: "COMSATS" },
                { label: "Status", value: "Available" },
              ].map((item) => (
                <div key={item.label} className="bg-background p-4">
                  <p className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-1">{item.label}</p>
                  <p className="font-display text-sm font-semibold">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
