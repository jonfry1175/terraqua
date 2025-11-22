# Terraqua Project Instructions

## Tech Stack & Architecture

- **Framework**: React 19 + Vite (Rolldown).
- **Styling**: Tailwind CSS v4.
  - Configured via `@tailwindcss/vite` plugin in `vite.config.js`.
  - CSS entry: `src/index.css` with `@import "tailwindcss";`.
  - **Note**: Tailwind v4 uses `bg-linear-to-*` instead of `bg-gradient-to-*`.
- **Routing**: `react-router-dom` v7.
  - Routes defined in `src/App.jsx` wrapped in a `Layout` component.
- **Animation**: `framer-motion`.
  - Standard pattern for scroll reveals: `initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}`.
- **Icons**: `lucide-react`.

## Project Structure

- `src/components/`: Global shared components (e.g., `Navbar`, `Footer`, `Layout`).
- `src/pages/`: Full page components corresponding to routes.
- `src/assets/`: Static assets (images, SVGs).

## Development Conventions

- **Components**: Functional components with hooks.
- **Layout**: Use `src/components/Layout.jsx` to wrap page content for consistent Navbar/Footer.
- **Navigation**: Use `Link` from `react-router-dom` for internal navigation.
- **Responsive Design**: Mobile-first approach using Tailwind breakpoints (`md:`, `lg:`).
- **Theme**:
  - Primary: Blue-900 (Deep Ocean).
  - Accent: Cyan-400/500 (Water).
  - Backgrounds: Slate-50/100 for light sections.

## Common Workflows

- **Dev Server**: `npm run dev` (runs on port 5173).
- **Build**: `npm run build` (outputs to `dist/`).
- **Lint**: `npm run lint`.
