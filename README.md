# Vulktek Frontend

Static launch page for Vulktek Cybersecurity. The site is plain HTML with Tailwind CSS compiled locally and deployed to Cloudflare Workers as static assets.

## Requirements

- Node.js 22 or newer
- npm

The expected Node version is pinned in `.nvmrc`.

## Setup

Install dependencies:

```sh
npm install
```

Build the static site:

```sh
npm run build
```

The build compiles Tailwind from `input.css` into `style.css`, then copies the deployable files into `dist/`.

## Scripts

- `npm run build:css` - compile Tailwind CSS
- `npm run build` - compile CSS and create `dist/`
- `npm run deploy` - build and deploy to Cloudflare Workers
- `npm run deploy:preview` - build and upload a preview Worker version

## Deployment

Cloudflare Workers uses `wrangler.json` to publish the static assets in `dist/`.

Recommended Workers Builds settings:

- Build command: leave empty
- Deploy command: `npm run deploy`
- Non-production deploy command: `npm run deploy:preview`
- Root directory: repository root

The `postinstall` hook runs the build automatically only when Cloudflare sets `WORKERS_CI=1`. This keeps the default Workers Builds deploy path from failing when `dist/` is absent in a fresh checkout, while keeping normal local installs quiet.

## Project Structure

- `index.html` - page markup
- `input.css` - Tailwind source CSS plus custom utilities
- `style.css` - compiled CSS checked in for direct static previews
- `tailwind.config.js` - Tailwind theme and plugin config
- `build.js` - creates a clean `dist/` directory
- `build-if-workers-ci.js` - Cloudflare-only build hook
- `wrangler.json` - Cloudflare Workers static asset config
- `images/` - tracked image assets used by the page

## Source Control Notes

Generated and installed files are intentionally ignored:

- `node_modules/`
- `dist/`

Use `package-lock.json` as the source of truth for dependency versions.
