import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "GetFitGYM",
    tech: "Next.js, MongoDB",
    description: "Fully automated gym website managing customer information, payment history, and trainer availability.",
  },
  {
    id: "02",
    title: "Schedule Monitor",
    tech: "Node.js, React, MongoDB",
    description: "Full-stack web app for visualizing, adding, and editing weekly schedules with a responsive UI.",
  },
  {
    id: "03",
    title: "Sudoku Solver",
    tech: "Python, CSP Algorithms",
    description: "Real-time solver implementing Constraint Satisfaction Problem algorithms.",
  },
  {
    id: "04",
    title: "Expense Tracker",
    tech: "Python, Matplotlib, Pandas",
    description: "Dynamic expense tracker with bar and pie chart data visualizations.",
  },
  {
    id: "05",
    title: "Shortest Path Finder",
    tech: "Java, Graph Algorithms",
    description: "Implemented Dijkstra's algorithm for computing optimal paths in weighted graphs.",
  },
  {
    id: "06",
    title: "AI Chat Bot",
    tech: "Python, NLP, Regex",
    description: "Conversational chatbot using regex pattern matching and NLP modules.",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="border-b border-border px-6 py-20 md:py-32">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          <div className="md:col-span-4">
            <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground">
              03 — Projects
            </p>
          </div>
          <div className="md:col-span-8">
            <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">
              Selected Work
            </h2>
          </div>
        </div>

        <div className="space-y-0">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border-t border-border py-8 grid grid-cols-1 md:grid-cols-12 gap-4 group cursor-pointer hover-fill px-4 -mx-4"
            >
              <div className="md:col-span-1">
                <span className="font-display text-xs text-muted-foreground group-hover:text-background/60">
                  {project.id}
                </span>
              </div>
              <div className="md:col-span-3">
                <h3 className="font-display text-xl font-semibold flex items-center gap-2">
                  {project.title}
                  <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity duration-75" />
                </h3>
              </div>
              <div className="md:col-span-2">
                <p className="font-body text-xs uppercase tracking-widest text-muted-foreground group-hover:text-background/60">
                  {project.tech}
                </p>
              </div>
              <div className="md:col-span-6">
                <p className="font-body text-sm text-muted-foreground group-hover:text-background/80">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
