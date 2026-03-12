# Varun Sahukar – Developer Portfolio

Modern developer portfolio built with React and Vite.  
Focus: clean grid-based layout, smooth motion, and a professional dark theme.

## Features
- Dynamic island-style navbar with blurred glass background
- 3D hover hero image card with cropped portrait
- Projects section with notebook-style cards
- Tech stack loop and skills sections
- Contact page with animated social links and mail shortcut
- Sticker interactions with modal details (GDG role), blurred backdrop
- Yellow accent theme (#e8b72e) with elevated grid background
- Accessible smooth scrolling between sections
- Mobile menu with animated open/close

## Tech Stack
- React + Vite
- Tailwind CSS
- Framer Motion
- GSAP
- OGL
- Lucide React
- React Icons

## Getting Started
Requires Node.js 18+. Clone the repository and install dependencies:

```bash
git clone https://github.com/varunsahukar/portfoilo.git
cd portfolio
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure
- `src/pages` – top-level pages (Home, About, Projects, Tech Stack, Contact)
- `src/components/layout` – layout elements like the navbar
- `src/components/ui` – reusable UI pieces (project cards, scroll columns, etc.)
- `src/components/animations` – scroll and reveal animations
- `src/data` – project and skills data
- `src/hooks` – reusable hooks (e.g., scroll)
- `src/lib` – utility helpers
- `src/utils` – constants and helpers
- `src/assets` – static assets such as your profile image

## Recent Updates
- Recolored blue accents to yellow (#e8b72e)
- Elevated grid lines for better visibility
- Added sticker modal with GDG role details and blurred backdrop
- Reordered navbar: Skills second, Work third
- Cropped and slightly zoomed About page profile image

## Deployment
Build and preview locally:
```bash
npm run build
npm run preview
```
Deploy the contents of `dist/` to any static host (Netlify, Vercel, GitHub Pages).

## Contact

- Email: `varunsahukar9798@gmail.com`
