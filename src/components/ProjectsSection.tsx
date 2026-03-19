import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    id: "01",
    title: "GetFitGYM",
    tech: "Next.js, MongoDB",
    description: "Fully automated gym website managing customer information, payment history, and trainer availability.",
    preview: "dashboard",
    label: "Member dashboard",
  },
  {
    id: "02",
    title: "Schedule Monitor",
    tech: "Node.js, React, MongoDB",
    description: "Full-stack web app for visualizing, adding, and editing weekly schedules with a responsive UI.",
    preview: "schedule",
    label: "Weekly planner",
  },
  {
    id: "03",
    title: "Sudoku Solver",
    tech: "Python, CSP Algorithms",
    description: "Real-time solver implementing Constraint Satisfaction Problem algorithms.",
    preview: "grid",
    label: "Constraint board",
  },
  {
    id: "04",
    title: "Expense Tracker",
    tech: "Python, Matplotlib, Pandas",
    description: "Dynamic expense tracker with bar and pie chart data visualizations.",
    preview: "analytics",
    label: "Analytics view",
  },
  {
    id: "05",
    title: "Shortest Path Finder",
    tech: "Java, Graph Algorithms",
    description: "Implemented Dijkstra's algorithm for computing optimal paths in weighted graphs.",
    preview: "graph",
    label: "Path map",
  },
  {
    id: "06",
    title: "AI Chat Bot",
    tech: "Python, NLP, Regex",
    description: "Conversational chatbot using regex pattern matching and NLP modules.",
    preview: "chat",
    label: "Conversation flow",
  },
];

const ProjectPreview = ({ preview, label }: { preview: string; label: string }) => {
  if (preview === "dashboard") {
    return (
      <div className="project-showcase-inner">
        <div className="project-showcase-header">
          <div className="project-showcase-dots">
            <span />
            <span />
            <span />
          </div>
          <span className="project-showcase-label">{label}</span>
        </div>
        <div className="project-dashboard-grid">
          <div className="project-dashboard-hero" />
          <div className="project-dashboard-card" />
          <div className="project-dashboard-card project-delay-1" />
          <div className="project-dashboard-card project-delay-2" />
        </div>
      </div>
    );
  }

  if (preview === "schedule") {
    return (
      <div className="project-showcase-inner">
        <div className="project-showcase-header">
          <div className="project-showcase-dots">
            <span />
            <span />
            <span />
          </div>
          <span className="project-showcase-label">{label}</span>
        </div>
        <div className="project-schedule-grid">
          {Array.from({ length: 10 }).map((_, index) => (
            <span
              key={index}
              className="project-schedule-block"
              style={{ opacity: 0.45 + (index % 4) * 0.12 }}
            />
          ))}
        </div>
      </div>
    );
  }

  if (preview === "grid") {
    return (
      <div className="project-showcase-inner">
        <div className="project-showcase-header">
          <div className="project-showcase-dots">
            <span />
            <span />
            <span />
          </div>
          <span className="project-showcase-label">{label}</span>
        </div>
        <div className="project-sudoku-grid">
          {Array.from({ length: 9 }).map((_, index) => (
            <span key={index} className={`project-sudoku-cell ${index === 1 || index === 4 || index === 8 ? "is-active" : ""}`} />
          ))}
        </div>
      </div>
    );
  }

  if (preview === "analytics") {
    return (
      <div className="project-showcase-inner">
        <div className="project-showcase-header">
          <div className="project-showcase-dots">
            <span />
            <span />
            <span />
          </div>
          <span className="project-showcase-label">{label}</span>
        </div>
        <div className="project-analytics-wrap">
          <div className="project-bars">
            {[55, 88, 64, 92, 72].map((height, index) => (
              <span key={index} style={{ height: `${height}%` }} />
            ))}
          </div>
          <div className="project-ring">
            <div className="project-ring-core" />
          </div>
        </div>
      </div>
    );
  }

  if (preview === "graph") {
    return (
      <div className="project-showcase-inner">
        <div className="project-showcase-header">
          <div className="project-showcase-dots">
            <span />
            <span />
            <span />
          </div>
          <span className="project-showcase-label">{label}</span>
        </div>
        <div className="project-graph-wrap">
          <span className="project-graph-line line-a" />
          <span className="project-graph-line line-b" />
          <span className="project-graph-line line-c" />
          <span className="project-graph-node node-a" />
          <span className="project-graph-node node-b" />
          <span className="project-graph-node node-c" />
          <span className="project-graph-node node-d" />
        </div>
      </div>
    );
  }

  return (
    <div className="project-showcase-inner">
      <div className="project-showcase-header">
        <div className="project-showcase-dots">
          <span />
          <span />
          <span />
        </div>
        <span className="project-showcase-label">{label}</span>
      </div>
      <div className="project-chat-wrap">
        <span className="project-chat-bubble bubble-left" />
        <span className="project-chat-bubble bubble-right" />
        <span className="project-chat-bubble bubble-left short" />
        <span className="project-chat-bubble bubble-right long" />
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="border-b border-border px-6 py-20 md:py-32">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          <motion.div
            className="md:col-span-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground">
              03 — Projects
            </p>
          </motion.div>
          <motion.div
            className="md:col-span-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">
              Selected Work
            </h2>
          </motion.div>
        </div>

        <div className="space-y-0">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              className="project-row border-t border-border/80 py-8 grid grid-cols-1 md:grid-cols-12 gap-6 group cursor-pointer px-4 -mx-4 items-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ x: 6 }}
            >
              <div className="md:col-span-7 grid grid-cols-1 md:grid-cols-8 gap-4 md:gap-5 items-start">
                <div className="md:col-span-1">
                  <span className="font-display text-xs text-muted-foreground transition-colors duration-300 group-hover:text-foreground/65">
                    {project.id}
                  </span>
                </div>
                <div className="md:col-span-7 space-y-4">
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="font-display text-xl font-semibold flex items-center gap-2 transition-transform duration-300 group-hover:translate-x-1">
                        {project.title}
                        <ArrowUpRight size={16} className="opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                      </h3>
                      <p className="mt-2 font-body text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground/85">
                        {project.description}
                      </p>
                    </div>
                    <p className="project-tech-chip font-body text-[11px] uppercase tracking-[0.24em] text-muted-foreground transition-colors duration-300 group-hover:text-foreground/70">
                      {project.tech}
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:col-span-5">
                <motion.div
                  className="project-showcase"
                  initial={{ opacity: 0.75, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 + 0.1 }}
                  whileHover={{ y: -4, scale: 1.01 }}
                >
                  <ProjectPreview preview={project.preview} label={project.label} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
