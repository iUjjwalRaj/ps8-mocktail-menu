# PS8 Mocktail Menu

A polished, responsive mocktail discovery website featuring non-alcoholic drinks, handcrafted recipes, and interactive ambient themes. Built with **React**, **Vite**, and **React Router** for IIT Guwahati's PS8 assignment.

- **GitHub Repository**: [https://github.com/iUjjwalRaj/ps8-mocktail-menu](https://github.com/iUjjwalRaj/ps8-mocktail-menu)
- **Live Deployment (Cloudflare Workers)**: [https://bar.feminismindia.com](https://bar.feminismindia.com)
- **Vercel Deployment**: [https://ps8-mocktail-menu-topaz.vercel.app](https://ps8-mocktail-menu-topaz.vercel.app)

---

## Overview

Mocktail Menu offers an artisanal, zero-proof beverage catalog powered by TheCocktailDB API. Designed with a dual aesthetic—a warm botanical café light theme and a luxury underground neon nightclub dark theme—the application allows users to explore, search, and inspect recipes complete with glassware specifications, exact measurements, and preparation instructions.

---

## Features

- **Hero Landing Page (`/`)**: Ambient visual presentation with an editorial mocktail showcase and an Explore Drinks call-to-action.
- **Curated Menu Catalogue (`/drinks`)**: Fetches non-alcoholic drinks from TheCocktailDB API, displaying responsive cards with imagery and titles.
- **Real-Time Controlled Search**: Instant client-side filtering by drink name as the user types.
- **Dynamic Recipe Details (`/drinks/:id`)**: Retrieves detailed specifications including glassware, category, an enumerated ingredient measurement list, and preparation instructions.
- **Resilient UI States**: Dedicated indicators for loading states, network errors, empty search results, and missing recipes.
- **Dual Aesthetic Themes**:
  - **Light Mode**: Botanical café aesthetic featuring forest green, emerald, warm ivory, muted sage, and champagne gold.
  - **Dark Mode**: 2 AM underground dance club atmosphere featuring ultraviolet, electric cyan, and hot magenta gradients, moving spotlight sweeps, and text shimmer.
- **Interactive Cursor Lighting**: Smooth cursor-following spotlight in dark mode managed via requestAnimationFrame and CSS variables.
- **404 Catch-All (`*`)**: Custom not-found view with seamless return navigation to the home page.
- **Single Page Application (SPA) Routing**: Configured with edge routing rules on Cloudflare Workers and rewrite rules on Vercel to guarantee that direct navigation and page refreshes work across all routes.

---

## Technology Stack

- **Frontend Library**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vite.dev/)
- **Client Routing**: [React Router v7](https://reactrouter.com/)
- **Styling**: Vanilla CSS (modular per-page and per-component stylesheets)
- **API**: [TheCocktailDB](https://www.thecocktaildb.com/api.php) (Non-alcoholic filter and recipe lookup)
- **Hosting & Edge Deployments**:
  - [Cloudflare Workers](https://workers.cloudflare.com/) (Custom Domain: `bar.feminismindia.com`)
  - [Vercel](https://vercel.com/) (Assignment submission)

---

## Project Structure

```text
ps8-mocktail-menu/
├── public/                 # Static public assets (favicon, icons)
├── src/
│   ├── assets/             # Local images and media (hero photography)
│   ├── components/         # Shared UI components
│   │   ├── NavBar.jsx      # Navigation links and light/dark theme switch
│   │   └── NavBar.css      # Header navigation styling
│   ├── css/                # Standalone visual effects
│   │   ├── CursorMovement.jsx  # Pointer tracking and spotlight overlay
│   │   └── CursorMovement.css  # Cursor spotlight styles and animations
│   ├── pages/              # Application route pages
│   │   ├── Home.jsx        # Landing hero view
│   │   ├── Home.css
│   │   ├── Drinks.jsx      # Non-alcoholic catalog and live search
│   │   ├── Drinks.css
│   │   ├── DrinkDetails.jsx# Dynamic recipe view with ingredients & instructions
│   │   ├── DrinkDetails.css
│   │   ├── NotFound.jsx    # 404 fallback page
│   │   └── NotFound.css
│   ├── App.jsx             # Root layout and React Router route configuration
│   ├── App.css             # Base application layout styles
│   ├── index.css           # Design tokens, color system, and dark mode animations
│   └── main.jsx            # Application entry point
├── dist/                   # Production build output
├── package.json            # Scripts, dependencies, and metadata
├── vite.config.js          # Vite build configuration
├── wrangler.jsonc          # Cloudflare Workers Static Assets & domain configuration
└── vercel.json             # Vercel SPA rewrite configuration
```

---

## Getting Started

### Prerequisites

- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/iUjjwalRaj/ps8-mocktail-menu.git
   cd ps8-mocktail-menu
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` (or the indicated port) in your browser.

4. **Run code linting**:
   ```bash
   npm run lint
   ```

5. **Build for production**:
   ```bash
   npm run build
   ```

6. **Preview the production build locally**:
   ```bash
   npm run preview
   ```

---

## Deployment

The application is architected to run portably across edge and serverless platforms without modifying application source code.

### 1. Cloudflare Workers (Custom Domain)

The project is deployed to Cloudflare Workers with custom domain mapping at **[https://bar.feminismindia.com](https://bar.feminismindia.com)** using Cloudflare Workers Static Assets.

- **Configuration File**: [`wrangler.jsonc`](./wrangler.jsonc)
- **SPA Routing**: Uses `"not_found_handling": "single-page-application"` so that direct route visits and refreshes are handled by `index.html`.
- **Deploying Updates**:
   ```bash
   npm run deploy:cf
   ```
   *(Runs `npm run build` followed by `npx wrangler deploy`)*

> **Note**: Automated GitHub deployments on Cloudflare are not configured yet; deployments currently use the Wrangler CLI workflow. To enable continuous deployments from GitHub, connect the repository in the Cloudflare Dashboard under **Workers & Pages > Settings > Build & Deploy > Git Integration**.

### 2. Vercel Deployment

For assignment evaluation on Vercel, the project uses [`vercel.json`](./vercel.json):
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/"
    }
  ]
}
```
This rewrite rule routes all navigation requests to `/index.html`, ensuring React Router handles all deep links.

---

## API Reference

The application interfaces with **TheCocktailDB** public API:

- **Filter Non-Alcoholic Drinks**:
  `GET https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`
- **Lookup Recipe Details**:
  `GET https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i={id}`
