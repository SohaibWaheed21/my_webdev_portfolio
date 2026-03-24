import { ArrowUpRight, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    id: "01",
    title: "GetFitGYM",
    tech: "Next.js, MongoDB",
    description: "Fully automated gym website managing customer information, payment history, and trainer availability.",
    details: "Built a comprehensive gym management platform with real-time membership tracking, automated payment processing via Stripe integration, trainer scheduling with calendar sync, and a member dashboard displaying workout history and progress analytics. Features role-based access for admins, trainers, and members.",
    preview: "image",
    imageSrc: "/images/GetFitGym.png",
    imageAlt: "GetFitGYM dashboard preview",
    label: "Dashboard",
    url: "https://getfitgym.site/",
  },
  {
    id: "02",
    title: "The Bali Hai Golf Club",
    techBatch: ["WordPress", "Google Analytics", "Elementor", "Figma"],
    description: "Redesigned Bali Hai Golf Club's website to improve UX and drive online bookings.",
    details: "Developed a responsive, visually striking website that integrates high-quality visuals, booking systems, and testimonials, reflecting the club's award-winning status and increasing online traffic and bookings by 30%.",
    preview: "image",
    imageSrc: "/images/GolfClub.png",
    imageAlt: "Bali Hai Golf Club website preview",
    label: "Website",
    url: "https://balihaigolfclub.com/",
  },
  {
    id: "03",
    title: "BizCard",
    tech: "Typescript, React, Tailwind CSS",
    description: "A free tool that lets local businesses generate a professional profile page instantly. Built as a portfolio project targeting businesses without websites",
    details: "A business owner visits the site, fills in a simple form — name, category, phone, services, location — and instantly sees a professional profile card update in real time on the right side of the screen. The generated card is optimized for sharing on social media and can be downloaded as an image or PDF, providing a quick and easy way for local businesses to establish an online presence without needing a full website.",
    preview: "image",
    imageSrc: "/images/Bizcard.png",
    imageAlt: "BizCard profile page preview",
    label: "Profile card generator",
    url: "https://biz-card-eta.vercel.app/",
  },
  {
    id: "06",
    title: "Weather Chatbot",
    tech: "Python, HTML, JQuery",
    description: "AI-powered Weather Chatbot that provides real-time weather updates for any city in the world",
    details: "This chatbot combines AI-style conversational UX with LiveWeather.orgs real-time API, allowing users to simply type a city name and instantly receive current weather conditions, forecasts, and alerts. The interface mimics a chat conversation, making it intuitive and engaging for users seeking quick weather information.",
    preview: "image",
    imageSrc: "/images/WeatherChatbot.png",
    imageAlt: "Weather chatbot conversation preview",
    label: "Conversation flow",
    url: "https://live-weather-forecast.onrender.com/",
  },
];

const ProjectPreview = ({ preview, label, imageSrc, imageAlt }: { preview: string; label: string; imageSrc?: string; imageAlt?: string }) => {
  if (preview === "dashboard") {
    return (
      <div className="project-showcase-inner">
        <div className="project-showcase-header">
          <div className="project-showcase-dots"><span /><span /><span /></div>
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
  if (preview === "image") {
    return (
      <div className="project-showcase-inner">
        <div className="project-showcase-header">
          <div className="project-showcase-dots"><span /><span /><span /></div>
          <span className="project-showcase-label">{label}</span>
        </div>
        <div className="project-image-wrap">
          <img src={imageSrc || "/images/bg-grid.png"} alt={imageAlt || `${label} preview`} loading="lazy" />
        </div>
      </div>
    );
  }
  if (preview === "schedule") {
    return (
      <div className="project-showcase-inner">
        <div className="project-showcase-header">
          <div className="project-showcase-dots"><span /><span /><span /></div>
          <span className="project-showcase-label">{label}</span>
        </div>
        <div className="project-schedule-grid">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="project-schedule-block" style={{ opacity: 0.45 + (i % 4) * 0.12 }} />
          ))}
        </div>
      </div>
    );
  }
  if (preview === "grid") {
    return (
      <div className="project-showcase-inner">
        <div className="project-showcase-header">
          <div className="project-showcase-dots"><span /><span /><span /></div>
          <span className="project-showcase-label">{label}</span>
        </div>
        <div className="project-sudoku-grid">
          {Array.from({ length: 9 }).map((_, i) => (
            <span key={i} className={`project-sudoku-cell ${i === 1 || i === 4 || i === 8 ? "is-active" : ""}`} />
          ))}
        </div>
      </div>
    );
  }
  if (preview === "analytics") {
    return (
      <div className="project-showcase-inner">
        <div className="project-showcase-header">
          <div className="project-showcase-dots"><span /><span /><span /></div>
          <span className="project-showcase-label">{label}</span>
        </div>
        <div className="project-analytics-wrap">
          <div className="project-bars">
            {[55, 88, 64, 92, 72].map((h, i) => (
              <span key={i} style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="project-ring"><div className="project-ring-core" /></div>
        </div>
      </div>
    );
  }
  if (preview === "graph") {
    return (
      <div className="project-showcase-inner">
        <div className="project-showcase-header">
          <div className="project-showcase-dots"><span /><span /><span /></div>
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
        <div className="project-showcase-dots"><span /><span /><span /></div>
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
  const [expandedId, setExpandedId] = useState<string | null>(null);

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
          {projects.map((project, i) => {
            const isExpanded = expandedId === project.id;
            return (
              <motion.div
                key={project.id}
                className="project-row border-t border-border/80 cursor-pointer px-4 -mx-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                onHoverStart={() => setExpandedId(project.id)}
                onHoverEnd={() => setExpandedId(null)}
              >
                <div className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 group items-center">
                  <div className="md:col-span-7 grid grid-cols-1 md:grid-cols-8 gap-4 md:gap-5 items-start">
                    <div className="md:col-span-1">
                      <span className="font-display text-xs text-muted-foreground transition-colors duration-200 group-hover:text-foreground/65">
                        {project.id}
                      </span>
                    </div>
                    <div className="md:col-span-7 space-y-4">
                      <div className="grid grid-cols-1 gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-start md:gap-5">
                        <div>
                          <h3 className="font-display text-xl font-semibold flex items-center gap-2 transition-transform duration-200 group-hover:translate-x-1">
                            {project.title}
                            <ArrowUpRight size={16} className="opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                          </h3>
                          <p className="project-description mt-1.5 max-w-[62ch] font-body text-sm leading-relaxed text-muted-foreground transition-colors duration-200 group-hover:text-foreground/85">
                            {project.description}
                          </p>
                        </div>
                        <div className="project-tech-chip font-body text-[11px] text-muted-foreground transition-colors duration-200 group-hover:text-foreground/70 md:items-end md:text-right">
                          {project.techBatch ? (
                            <div className="space-y-0.5">
                              <span className="block whitespace-nowrap uppercase tracking-[0.12em] leading-[1.6]">
                                {project.techBatch.slice(0, 2).join(", ")}
                              </span>
                              <span className="block whitespace-nowrap uppercase tracking-[0.12em] leading-[1.6]">
                                {project.techBatch.slice(2, 4).join(", ")}
                              </span>
                            </div>
                          ) : (
                            <span className="block whitespace-nowrap uppercase tracking-[0.12em] leading-[1.6]">{project.tech}</span>
                          )}
                        </div>
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
                      <ProjectPreview preview={project.preview} label={project.label} imageSrc={project.imageSrc} imageAlt={project.imageAlt} />
                    </motion.div>
                  </div>
                </div>

                {/* Expandable details */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 grid grid-cols-1 md:grid-cols-12 gap-6">
                        <div className="md:col-span-7 md:col-start-2">
                          <p className="font-body text-sm leading-relaxed text-foreground/75">
                            {project.details}
                          </p>
                        </div>
                        <div className="md:col-span-5 flex items-end justify-start md:justify-end">
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-5 py-2.5 font-body text-sm text-foreground transition-colors duration-200 hover:bg-primary hover:text-primary-foreground"
                          >
                            Visit Project
                            <ExternalLink size={14} />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
