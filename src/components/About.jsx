import { motion } from "framer-motion";
import profile from "../data/profile";

export default function About() {
  return (
    <section id="about" className="relative border-t border-line">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-24 md:py-32 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <p className="eyebrow mb-4">§ 01 — About</p>
          <h2 className="font-display text-3xl md:text-4xl text-paper leading-tight">
            Engineering with a builder's patience.
          </h2>
        </div>

        <div className="md:col-span-8 flex flex-col gap-6">
          {profile.about.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-base md:text-lg text-slate leading-relaxed max-w-2xl"
            >
              {p}
            </motion.p>
          ))}

          <div className="mt-6 grid grid-cols-3 border-t border-l border-line">
            {profile.about.stats.map((s) => (
              <div key={s.label} className="border-r border-b border-line p-5 md:p-6">
                <div className="font-display text-3xl md:text-4xl text-brass">{s.value}</div>
                <div className="mt-2 eyebrow text-slate normal-case tracking-normal text-xs">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
