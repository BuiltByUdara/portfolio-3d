import { motion } from "framer-motion";
import profile from "../data/profile";

export default function Skills() {
  return (
    <section id="skills" className="relative border-t border-line bg-panel">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-24 md:py-32">
        <p className="eyebrow mb-4">§ 02 — Toolkit</p>
        <h2 className="font-display text-3xl md:text-4xl text-paper leading-tight mb-14 max-w-xl">
          The parts list.
        </h2>

        <div className="grid md:grid-cols-2 gap-px bg-line border border-line">
          {profile.skills.categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="bg-panel p-7 md:p-9"
            >
              <div className="flex items-baseline justify-between mb-5">
                <h3 className="font-display text-xl text-paper">{cat.label}</h3>
                <span className="eyebrow text-slate-dim">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <ul className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="eyebrow normal-case tracking-normal text-sm text-slate border border-line px-3 py-1.5 hover:border-brass hover:text-brass transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
