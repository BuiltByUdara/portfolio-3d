# Portfolio — Blueprint Atelier

A 3D personal portfolio for a software engineer, built with React + Vite and react-three-fiber.

## Stack
- React 19 + Vite
- @react-three/fiber + @react-three/drei + three.js (the rotating wireframe "core" in the hero)
- Tailwind CSS v4
- Framer Motion (scroll/entrance animation)

## Getting started
```bash
npm install
npm run dev       # http://localhost:5173
npm run build      # production build -> dist/
npm run preview    # serve the production build locally
```

## Personalize it
Everything text-based (name, role, bio, skills, projects, experience, contact links)
lives in **`src/data/profile.js`**. Edit that one file to make the site yours —
every component reads from it, nothing else needs to change.

To swap the 3D signature element, edit **`src/components/SchematicCore.jsx`**.

## Deploying
This is a static site after `npm run build` — drop the `dist/` folder on
Vercel, Netlify, GitHub Pages, or serve it from your MERN app's Express
static middleware (`app.use(express.static('dist'))`) if you want it under
the same server as your API.

## Structure
```
src/
  components/   Navbar, Hero, About, Skills, Projects, Experience, Contact, Footer, SchematicCore
  data/         profile.js — single source of truth for content
  index.css     design tokens (Tailwind v4 @theme) + base styles
  App.jsx       page assembly
```
