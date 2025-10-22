# About this repository

This repository is a personal portfolio website for Anup Tiwari built with Next.js (App Router). The site showcases projects, education, contact details and includes an API route to send contact emails. This `about.md` is designed to give an LLM (or a human) quick contextual knowledge about the project, folder structure, important files, how to run it, environment variables, known behaviors, and a ready-to-use prompt template for further automation or development requests.

## Quick facts

- Project: personal portfolio website
- Author: Anup Tiwari
- Framework: Next.js (App Router) — Next 15
- Language: JavaScript (React)
- Styling: Tailwind CSS
- Animations: Framer Motion
- Icons: Lucide React
- Themes: next-themes
- Email: nodemailer used in API route to forward contact messages

## Top-level scripts (from `package.json`)

- npm run dev — start dev server (next dev)
- npm run build — production build (next build)
- npm run start — start production server (next start)
- npm run lint — run linter (next lint)


## Folder structure (simplified)

/
- about.md                      (this file)
- package.json
- README.md
- next.config.js
- postcss.config.js
- tailwind.config.js
- public/                        (static assets: icons, images, profile-pic, project images)
- src/
  - app/
    - layout.js                 (root layout, imports ThemeProvider, Navbar, Footer)
    - page.js                   (home page assembling Hero, About, ProjectsPreview, Education, Contact)
    - api/
      - contact.js              (POST handler using nodemailer)
    - projects/
      - layout.js               (projects route layout — passthrough)
      - page.js                 (projects index — shows ProjectsPageSystem)
      - [id]/
        - page.js               (project detail page, reads data from `src/data/projects.js`)
  - components/
    - Navbar.js                 (site navigation & social links)
    - Hero.js                   (home hero section)
    - About.js                  (short about/skills/intro section)
    - ProjectsPreview.js        (featured projects list)
    - ProjectsPageSystem.js     (full projects listing)
    - ProjectCard.js            (card component used by projects lists)
    - Contact.js                (contact section with mailto and social links)
    - Education.js              (education section)
    - Footer.js                 (site footer)
    - ThemeProvider.js          (wrapper for next-themes)
    - ThemeTransition.js        (visual theme transition overlay)
  - data/
    - projects.js               (project metadata used by pages/components)
  - globals.css                 (tailwind base + custom styles)

## Key files and responsibilities

- `src/data/projects.js` — central data store for all showcased projects. Exports helper functions: `getFeaturedProjects()`, `getAllProjects()`, `getProjectById(id)`.
- `src/app/api/contact.js` — server-side POST route that expects JSON { name, email, message } and uses nodemailer with `EMAIL_USER` and `EMAIL_PASS` to send two emails (to owner and a confirmation to the sender).
- `src/app/layout.js` — root HTML layout, loads fonts, sets up theme provider, Navbar and Footer.
- `src/app/page.js` — home page composition. Imports and renders `Hero`, `About`, `ProjectsPreview`, `Education`, and `Contact`.
- `src/components/*` — the UI building blocks. Most components are client components (use 'use client') and use Framer Motion for entrance/hover animations.

## How the projects listing works

- Projects are defined in `src/data/projects.js`. Each project has fields like id, title, description, technologies, highlights, image, liveLink, githubLink, category, featured flag, and more.
- `ProjectsPreview` shows featured projects by using `getFeaturedProjects()`.
- The `/projects/[id]` page uses `getProjectById(id)` to render a detailed project page.

## Running locally

1. Install dependencies

   npm install

2. Create a `.env.local` (or set env vars) with at least:

   EMAIL_USER=youremail@example.com
   EMAIL_PASS=your-email-password-or-app-password

3. Run dev server

   npm run dev

4. Open http://localhost:3000
