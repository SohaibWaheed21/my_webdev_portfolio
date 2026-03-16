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

        <div className="flex items-start justify-between gap-8">
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tight mb-8">
            <span className="inline-block opacity-0 animate-name-reveal">Sohaib</span>
            <br />
            <span className="inline-block opacity-0 animate-name-reveal text-primary" style={{ animationDelay: "0.15s" }}>
              Waheed
            </span>
          </h1>

          <div className="hidden md:block flex-shrink-0 w-48 h-48 lg:w-64 lg:h-64 border border-border overflow-hidden mt-2">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

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
