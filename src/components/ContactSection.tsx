import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="px-6 py-20 md:py-32">
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
              04 — Contact
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
              Let's work
              <br />
              <span className="text-primary">together.</span>
            </motion.h2>

            <div className="space-y-0">
              {[
                { href: "mailto:sohaibwaheed06@gmail.com", icon: Mail, label: "sohaibwaheed06@gmail.com", external: false },
                { href: "tel:+923035445689", icon: Phone, label: "+92 303 5445689", external: false },
                { href: "https://linkedin.com/in/sohaibwaheed-650343369", icon: MapPin, label: "LinkedIn Profile", external: true },
              ].map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
<<<<<<< HEAD
                  className="project-row border-t border-border/80 py-5 flex items-center justify-between group px-4 -mx-4"
=======
                  className="border-t border-border py-5 flex items-center justify-between group hover-fill px-4 -mx-4"
>>>>>>> e4bb60752072ec142cce04758404c217137c2289
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
<<<<<<< HEAD
                  whileHover={{ x: 6 }}
                >
                  <div className="flex items-center gap-4">
                    <item.icon size={16} className="text-muted-foreground transition-colors duration-300 group-hover:text-foreground" />
                    <span className="font-body text-sm">{item.label}</span>
                  </div>
                  <ArrowUpRight size={16} className="opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
=======
                >
                  <div className="flex items-center gap-4">
                    <item.icon size={16} className="text-muted-foreground group-hover:text-primary-foreground" />
                    <span className="font-body text-sm">{item.label}</span>
                  </div>
                  <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
>>>>>>> e4bb60752072ec142cce04758404c217137c2289
                </motion.a>
              ))}

              <motion.div
                className="border-t border-border py-5 flex items-center gap-4 px-4 -mx-4"
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <MapPin size={16} className="text-muted-foreground" />
                <span className="font-body text-sm text-muted-foreground">Lahore, Pakistan</span>
              </motion.div>
            </div>
          </div>
        </div>

        <motion.div
          className="mt-32 border-t border-border pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-body text-xs text-muted-foreground">
            © 2026 Sohaib Waheed. All rights reserved.
          </p>
          <p className="font-body text-xs text-muted-foreground">
            Built with React + Vite + TypeScript + Tailwind CSS
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
