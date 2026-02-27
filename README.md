# Next.js Portfolio Website

A modern portfolio starter built with **Next.js App Router**, **TypeScript**, and **Tailwind CSS**.

## Features

- Multi-page portfolio routes for projects, experience, photography, blog, and more
- Shared layout with responsive navbar + footer
- Active navigation link highlighting and mobile hamburger menu
- Reusable UI components (`SectionHeader`, `Card`, `Badge`, `GalleryGrid`)
- Data-driven page content via TypeScript files in `data/`
- Basic SEO metadata on every route

## Run locally

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
npm run start
```

## Deploy

### Vercel (recommended)

1. Push this repository to GitHub.
2. Import the repo into [Vercel](https://vercel.com).
3. Vercel auto-detects Next.js and deploys with default settings.

### Optional: Netlify

1. Connect your GitHub repository to Netlify.
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Use Netlify Next.js runtime/plugin as prompted.
