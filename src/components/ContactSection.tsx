import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="px-6 py-20 md:py-32">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground">
              04 — Contact
            </p>
          </div>

          <div className="md:col-span-8">
            <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight mb-12">
              Let's work
              <br />
              <span className="text-primary">together.</span>
            </h2>

            <div className="space-y-0">
              <a
                href="mailto:sohaibwaheed06@gmail.com"
                className="border-t border-border py-5 flex items-center justify-between group hover-fill px-4 -mx-4"
              >
                <div className="flex items-center gap-4">
                  <Mail size={16} className="text-muted-foreground group-hover:text-primary-foreground" />
                  <span className="font-body text-sm">sohaibwaheed06@gmail.com</span>
                </div>
                <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity duration-75" />
              </a>

              <a
                href="tel:+923035445689"
                className="border-t border-border py-5 flex items-center justify-between group hover-fill px-4 -mx-4"
              >
                <div className="flex items-center gap-4">
                  <Phone size={16} className="text-muted-foreground group-hover:text-primary-foreground" />
                  <span className="font-body text-sm">+92 303 5445689</span>
                </div>
                <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity duration-75" />
              </a>

              <a
                href="https://linkedin.com/in/sohaibwaheed-650343369"
                target="_blank"
                rel="noopener noreferrer"
                className="border-t border-border py-5 flex items-center justify-between group hover-fill px-4 -mx-4"
              >
                <div className="flex items-center gap-4">
                  <MapPin size={16} className="text-muted-foreground group-hover:text-background" />
                  <span className="font-body text-sm">LinkedIn Profile</span>
                </div>
                <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity duration-75" />
              </a>

              <div className="border-t border-border py-5 flex items-center gap-4 px-4 -mx-4">
                <MapPin size={16} className="text-muted-foreground" />
                <span className="font-body text-sm text-muted-foreground">Lahore, Pakistan</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32 border-t border-border pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-body text-xs text-muted-foreground">
            © 2026 Sohaib Waheed. All rights reserved.
          </p>
          <p className="font-body text-xs text-muted-foreground">
            Built with React + Vite + TypeScript + Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
