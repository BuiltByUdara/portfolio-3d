import { motion } from "framer-motion";
import profile from "../data/profile";

export default function Projects() {
  return (
    <section id="work" className="relative border-t border-line">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="work-heading"><div><p className="eyebrow mb-4">01 / Selected work</p><h2 className="font-display text-4xl md:text-6xl">From idea.<br /><span className="text-brass">Into the world.</span></h2></div><p>A selection of platforms, experiences,<br />and things built to make a difference.</p></div>
        <div className="project-grid">
          {profile.projects.map((project, i) => (
            <motion.article key={project.id} className="project-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }}>
              <div className={`project-art art-${i % 4}`} aria-hidden="true"><span className="art-index">{project.id} / PROJECT</span><div className="art-orbit" /><div className="art-core" /><span className="art-title">{project.name}</span><span className="art-caption">{project.stack.slice(0, 2).join(' / ')}</span></div>
              <div className="project-body"><div className="project-title"><h3>{project.name}</h3>{project.isViewVisible && project.href !== '#' && <a href={project.href} target="_blank" rel="noreferrer" aria-label={`View ${project.name} (opens in a new tab)`}>↗</a>}</div><p>{project.summary}</p><div className="project-stack">{project.stack.map(s => <span key={s}>{s}</span>)}</div><div className="project-metric">{project.metric}</div></div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
