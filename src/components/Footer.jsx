import profile from "../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="eyebrow text-slate-dim">
          © {new Date().getFullYear()} {profile.name} — built with React, Vite &amp; Three.js
        </p>
        <a href="#top" className="eyebrow text-slate hover:text-brass transition-colors">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
