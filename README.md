# HealthMed

## Overview

HealthMed is a comprehensive and integrated healthcare management platform designed for modern medical operations. It unifies clinical workflows, hospital administration, patient records, diagnostic laboratory operations, and scheduling into a highly responsive, single-page application. Powered by advanced animations and an intuitive editorial layout, HealthMed optimizes daily coordination and reduces workload for healthcare professionals.

## Tech Stack

* React 19
* Vite 6 (with modern native plugins)
* Tailwind CSS 4
* GSAP (GreenSock Animation Platform)
* React Router 7
* Lucide React (for scalable iconography)
* Motion (for fluid modern layout transitions)

## Prerequisites

Before starting, ensure you have the following installed on your machine:

* Node.js (v18.0.0 or higher recommended)
* npm (v9.0.0 or higher) or yarn

## Installation

To set up the project locally, run the following commands in your terminal:

```bash
git clone <repository-url>
cd <project-folder>
npm install
```

## Development

To spin up the local development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Once running, the application will be accessible at [http://localhost:3000](http://localhost:3000).

## Production Build

To compile and optimize the application's assets for production deployment:

```bash
npm run build
```

This will output a minified, pre-bundled static build in the `dist/` directory.

## Preview Build

To test and preview the production build locally before actual deployment:

```bash
npm run preview
```

## Project Structure

The project directory is structured as follows:

```text
src/
├── assets/     - Static media assets, vectors, and illustrations
├── components/ - Modular reusable UI controls, forms, and buttons
├── data/       - Static databases, blog collections, and mock information
├── hooks/      - Custom React hooks for animations, triggers, and sizing
├── pages/      - Main page-level route views (Insights, BlogDetails)
├── sections/   - Page divisions and modular components (Home, Products)
├── styles/     - Specific custom style rules and design system layout classes
├── App.tsx     - Core routing configuration and primary application shell
└── index.css   - Global styling script and Tailwind integrations
```

## Available Scripts

In the project directory, you can run the following npm commands:

```bash
# Starts development server on port 3000
npm run dev

# Builds the app for production
npm run build

# Previews the production build locally
npm run preview

# Clears the previous build artifacts
npm run clean

# Runs typechecks on TypeScript codebase
npm run lint
```

## Notes

* **Production Builds**: All React and CSS assets are bundled and optimized via Vite. No extraneous runtime server configurations are required to serve the frontend; the build results in standard static assets.
* **Environment Variables**: For any custom APIs or key management, create and define environment values in a local `.env` file based on `.env.example`.
* **Deployment Readiness**: The built output inside `/dist` is fully static, self-contained, and optimized for instant deployment onto modern cloud providers (including Cloud Run, Vercel, or Netlify).
