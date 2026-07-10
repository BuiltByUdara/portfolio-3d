import { motion } from "framer-motion";
import profile from "../data/profile";

export default function Experience() {
  return (
    <section id="experience" className="relative border-t border-line bg-panel">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-24 md:py-32">
        <p className="eyebrow mb-4">§ 04 — Path</p>
        <h2 className="font-display text-3xl md:text-4xl text-paper leading-tight mb-14 max-w-xl">
          Where the last few years went.
        </h2>

        <div className="relative pl-8 md:pl-10">
          <div className="absolute left-0 top-2 bottom-2 w-px bg-line" />
          <div className="flex flex-col gap-14">
            {profile.experience.map((role, i) => (
              <motion.div
                key={role.org}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="relative"
              >
                <span className="absolute -left-8 md:-left-10 top-1.5 w-2.5 h-2.5 rounded-full bg-brass" />
                <span className="eyebrow text-slate-dim">{role.period}</span>
                <h3 className="font-display text-2xl text-paper mt-2">
                  {role.role} · <span className="text-brass">{role.org}</span>
                </h3>
                <p className="mt-2 text-slate max-w-2xl leading-relaxed">{role.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
