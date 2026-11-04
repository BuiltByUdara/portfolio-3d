import { motion, useReducedMotion } from "framer-motion";
import profile from "../data/profile";

export default function Hero() {
  const reduced = useReducedMotion();
  return (
    <section id="top" className="cinema-hero">
      <div className="celestial-scene" aria-hidden="true">
        <div className="star-field" />
        <div className="eclipse-halo" />
        <div className="eclipse" />
        <div className="orbital-path" />
      </div>
      <div className="hero-content">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="hero-kicker">
            <span /> {profile.role} <span className="kicker-divider">/</span>{" "}
            Sri Lanka
          </p>
          <h1>
            Code with purpose.
            <br />
            <em>Build beyond.</em>
          </h1>
          <div className="hero-intro">
            <span className="intro-line" />
            <p>
              I’m {profile.name}.<br />
              <span>{profile.tagline}</span>
            </p>
          </div>
          <div className="hero-actions">
            <a className="primary-link" href="#work">
              Explore my work <span>↗</span>
            </a>
            <a className="secondary-link" href="#contact">
              Let’s talk <span>↗</span>
            </a>
          </div>
        </motion.div>
      </div>
      <div className="hero-bottom">
        <a href="#work">
          <span className="scroll-line" /> Scroll to explore
        </a>
        <span>CREATIVE THINKING. SOLID ENGINEERING.</span>
        <span>01 — 06</span>
      </div>
    </section>
  );
}
