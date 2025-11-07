# Personal Website

A minimalist personal website built with React, TypeScript, and Framer Motion. Features include:
- Elegant animations and transitions
- Dark/light theme support
- Responsive design
- Image gallery
- Parallax scrolling effects

## Features

- **Modern Stack**: React 18 with TypeScript
- **Styling**: TailwindCSS with custom animations
- **Animations**: Framer Motion for smooth transitions
- **Routing**: Wouter for lightweight client-side routing
- **Theming**: Light/Dark mode with system preference detection

## Development

To run the site locally:

```bash
npm install
npm run dev
```

## Building

To create a production build:

```bash
npm run build
```

## Deployment

This site is automatically deployed to GitHub Pages using GitHub Actions. Any push to the `main` branch triggers a new deployment.

**View the live site at:** https://crimsonyaseen.github.io/MyPersonalSite/

### GitHub Pages Configuration

1. The site is built with Vite and configured with `base: "/MyPersonalSite/"`
2. GitHub Actions workflow in `.github/workflows/deploy.yml` handles automatic deployments
3. Built files are automatically deployed to the gh-pages branch

## Project Structure

```
/
├── public/          # Static assets
├── src/
│   ├── components/  # React components
│   ├── lib/        # Utilities and hooks
│   ├── pages/      # Page components
│   └── main.tsx    # Application entry
├── index.html
└── vite.config.ts  # Build configuration
```
