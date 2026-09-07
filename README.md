<h1 align="center">Juan José Martínez — Portfolio</h1>

<p align="center">
  <a href="https://jmartinezgr-portfolio.vercel.app/" target="_blank">Live demo</a>
</p>

One-page portfolio built with React, Vite and Tailwind CSS. Content lives in a
single data file so updates don't require touching markup.

## Stack

- [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/) via `@tailwindcss/vite`
- [Vercel Speed Insights](https://vercel.com/docs/speed-insights)

## Project structure

```
src/
  data/content.js       # All copy: profile, projects, stack, experience, about
  components/           # One component per section (Nav, Hero, Work, Stack, ...)
  App.jsx                # Assembles the sections in order
  index.css              # Tailwind import + design tokens (@theme)
public/
  cv.pdf                 # Downloadable CV, linked from the hero
```

## Updating content

Almost everything on the page is driven by `src/data/content.js`:

- `profile` — name, tagline, links (GitHub, LinkedIn, email, CV)
- `projects` — the "Selected work" cards, including the system-flow diagram steps
- `breadth` — the "Other things I've built" grid
- `stack` — the grouped tech list
- `experience` — the timeline
- `about` — the About paragraphs

Edit the arrays/objects there; the components re-render automatically. Only
touch the component files under `src/components/` when you need to change
layout or add a new section.

## Development

```bash
npm install
npm run dev       # local dev server (Vite)
npm run lint       # eslint
npm run build      # production build to dist/
npm run preview    # preview the production build locally
```

## Deployment

The repo is connected to Vercel (`vercel.json` handles the SPA rewrite).
Pushing to `main` updates the production deployment above. Pushing any other
branch creates a Vercel preview deployment for that branch — useful for
reviewing a redesign before merging.

Custom domain (`jmartinezgr.com`) is configured from the Vercel dashboard
under the project's Domains settings, once a version is ready to go live.

### Contact

Juan José Martínez — josemargri3@gmail.com
Project link: [https://github.com/jmartinezgr/portfolio](https://github.com/jmartinezgr/portfolio)
