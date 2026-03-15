import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center border-b border-border px-6 pt-20">
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="mb-6">
          <p className="font-body text-sm uppercase tracking-[0.3em] text-muted-foreground mb-8">
            Software Engineer — Lahore, PK
          </p>
        </div>

        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tight mb-8">
          Sohaib
          <br />
          <span className="text-primary">Waheed</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 md:mt-20">
          <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed max-w-md">
            Full-stack developer & UI/UX designer building results-driven solutions across web and systems development. Proficient in Python, JavaScript, Java, and SQL.
          </p>

          <div className="flex items-end justify-start md:justify-end">
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="font-display text-sm uppercase tracking-widest border border-border px-8 py-4 hover-fill flex items-center gap-3"
            >
              View Projects
              <ArrowDown size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
