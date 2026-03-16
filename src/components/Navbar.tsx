import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const Navbar = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/72 backdrop-blur-xl">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 py-4">
        <button onClick={() => scrollTo("hero")} className="font-display text-lg font-bold tracking-tight transition-transform duration-300 hover-accent hover:-translate-y-0.5">
          SW<span className="text-primary">.</span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {["about", "skills", "projects", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => scrollTo(section)}
              className="nav-link font-body text-sm uppercase tracking-widest text-muted-foreground"
            >
              {section}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="icon-link text-muted-foreground">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com/in/sohaibwaheed-650343369" target="_blank" rel="noopener noreferrer" className="icon-link text-muted-foreground">
            <Linkedin size={18} />
          </a>
          <a href="mailto:sohaibwaheed06@gmail.com" className="icon-link text-muted-foreground">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
