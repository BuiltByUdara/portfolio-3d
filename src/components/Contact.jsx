import { motion } from "framer-motion";
import profile from "../data/profile";

export default function Contact() {
  return (
    <section id="contact" className="relative border-t border-line blueprint-grid">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-24 md:py-32">
        <p className="eyebrow mb-4">§ 05 — Contact</p>

        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="font-display text-4xl md:text-6xl text-paper leading-[1.05] max-w-2xl corner-ticks p-6 md:p-10 border border-line"
        >
          Have a system worth building?
          <br />
          <span className="text-brass">Let's talk it through.</span>
        </motion.h2>

        <div className="mt-12 flex flex-col md:flex-row md:items-end justify-between gap-10">
          <a
            href={`mailto:${profile.email}`}
            className="font-mono text-2xl md:text-3xl text-paper hover:text-brass transition-colors break-all"
          >
            {profile.email}
          </a>

          <div className="flex gap-6">
            {profile.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="eyebrow text-slate hover:text-brass transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
