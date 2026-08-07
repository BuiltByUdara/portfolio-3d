import { Suspense } from "react";
import { motion } from "framer-motion";
import profile from "../data/profile";
import SchematicCore from "./SchematicCore";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen blueprint-grid overflow-hidden"
    >
      {/* 3D signature element */}
      <div className="absolute inset-0 md:right-[-8%] pointer-events-none">
        <Suspense fallback={null}>
          <SchematicCore className="w-full h-full opacity-90" />
        </Suspense>
      </div>

      {/* vignette to keep text legible over the 3D scene */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/10 md:to-ink/0" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 min-h-screen flex flex-col justify-center pt-24 pb-16">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow mb-6"
        >
          § 00 — {profile.role} / {profile.location}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-[13vw] leading-[0.95] md:text-7xl lg:text-8xl text-paper max-w-3xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22 }}
          className="mt-8 max-w-xl text-lg md:text-xl text-slate leading-relaxed"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.34 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#work"
            className="eyebrow bg-paper text-slate px-6 py-3 hover:bg-paper transition-colors"
          >
            View the work
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="eyebrow border border-line px-6 py-3 text-paper hover:border-brass hover:text-brass transition-colors"
          >
            {profile.email}
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-6 md:left-10 eyebrow text-slate-dim hidden sm:block">
        scroll ↓
      </div>
    </section>
  );
}
