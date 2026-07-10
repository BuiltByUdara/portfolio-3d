import { motion } from "framer-motion";
import profile from "../data/profile";

export default function Projects() {
  return (
    <section id="work" className="relative border-t border-line">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-24 md:py-32">
        <p className="eyebrow mb-4">§ 03 — Selected work</p>
        <h2 className="font-display text-3xl md:text-4xl text-paper leading-tight mb-14 max-w-xl">
          Things I've shipped and stand behind.
        </h2>

        <div className="flex flex-col border-t border-line">
          {profile.projects.map((project, i) => (
            <motion.a
              key={project.id}
              href={project.href}
              target="_blank"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group grid md:grid-cols-12 items-start md:items-center gap-4 md:gap-6 border-b border-line py-8 hover:bg-panel/60 transition-colors px-2 -mx-2"
            >
              <span className="md:col-span-1 eyebrow text-brass">
                {project.id}
              </span>

              <div className="md:col-span-4">
                <h3 className="font-display text-2xl text-paper group-hover:text-brass transition-colors">
                  {project.name}
                </h3>
              </div>

              <p className="md:col-span-5 text-slate leading-relaxed text-[15px]">
                {project.summary}
              </p>

              <div className="md:col-span-2 flex flex-col items-start md:items-end gap-2">
                <span className="eyebrow text-slate-dim text-[11px]">
                  {project.metric}
                </span>
                {project.isViewVisible && (
                  <span className="eyebrow text-paper group-hover:text-brass transition-colors">
                    View ↗
                  </span>
                )}
              </div>

              <div className="md:col-span-12 flex flex-wrap gap-2 mt-1">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="eyebrow normal-case tracking-normal text-xs text-slate-dim border border-line px-2 py-1"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
