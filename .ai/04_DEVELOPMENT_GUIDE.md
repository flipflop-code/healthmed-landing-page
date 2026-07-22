# Healthmed Enterprise AI Memory System - Development Guide

> **IMPORTANT FOR ALL AI ASSISTANTS**
> Read all files inside the `.ai` folder before making any code changes. This guide outlines local project conventions, directory structures, component architectures, and coding standards. For typography rules, see `.ai/03_TYPOGRAPHY_SYSTEM.md`.

This guide provides the official software engineering rules, folder patterns, and style compilation rules for the Healthmed web platform.

---

## 1. Directory Structure Blueprint

All directories and core files are arranged within a logical, clean layout. Maintain this structure and do not introduce arbitrary top-level subfolders.

```text
src/
├── assets/             # Raw media assets, SVG logos, and mockup images
├── components/         # Shared, site-wide UI widgets and elements
│   ├── common/         # Standalone cross-cutting behaviors (e.g., ScrollToTop, WhatsApp)
│   ├── layout/         # Base framework scaffolding (e.g., Header, Footer)
│   └── ui/             # Atomic design components (Button, Badge, Heading)
├── data/               # Typed JSON collections and data records (avoid hardcoding lists in JSX)
├── hooks/              # Global custom React hooks (useGsapAnimation, useIntersectionObserver)
├── layouts/            # Page structures and container layouts
├── pages/              # High-level page routing files (Home, Product, Solutions)
├── sections/           # Modular page-specific sub-sections (organized by route)
│   └── home/           # Home-page specific blocks (Hero, Modules, Partners, WhyChooseUs)
├── styles/             # Global stylesheet configuration, CSS variables, typography classes
└── utils/              # Independent formatting engines and clinical utility libraries
```

---

## 2. Component Architecture & Guidelines

### Self-Contained Components
Every component in the project must be completely self-contained (`Component.tsx` only).
Do NOT create or generate individual CSS files such as:
- `Hero.css`
- `Features.css`
- `Modules.css`
- `Testimonials.css`
- `Footer.css`
- `Contact.css`

Do NOT import component CSS files. All styling lives directly inside the React component using Tailwind utility classes.

### When to Create Components
1. **Reusability:** The element or structure appears in 2 or more distinct pages or layout sections.
2. **Complexity Isolation:** A local chunk of code exceeds 60 lines of JSX, or handles self-contained user interactions (such as modals, drop-down systems, or tabs navigation).

### Component Authoring Guidelines
* Always declare components with explicit TypeScript interfaces for props:
  ```tsx
  interface CardProps {
    id: string;
    title: string;
    description: string;
    children?: React.ReactNode;
  }
  ```
* Prefer functional components using standard React arrow syntax with explicit return types:
  ```tsx
  export const DiagnosticCard: React.FC<CardProps> = ({ id, title, description, children }) => {
    return (
      <div className="bg-[var(--color-surface-primary)] border border-[var(--color-border-subtle)] rounded-[var(--radius-3xl)] p-[var(--spacing-lg)] shadow-[var(--shadow-stage)] flex flex-col" id={id}>
        {children}
      </div>
    );
  };
  ```

---

## 3. React Best Practices & Coding Standards

* **Single Responsibility Principle (SRP):** Components must do one thing well. A card displays data; it does not perform data fetching or heavy business analytics.
* **Separation of Concerns:** Keep your JSX files focused on component rendering. Extract complex static data structures to the `src/data/` folder and business helper utilities to `src/utils/`.
* **Hooks & Memoization Protocols:** Optimize rendering pipelines on heavy statistics blocks, data views, and mapping lists using `useMemo` and `useCallback`:
  ```tsx
  const sortedReports = useMemo(() => {
    return [...reports].sort((a, b) => b.timestamp - a.timestamp);
  }, [reports]);
  ```
* **Avoid Infinite Renders:** Never pass reference objects (arrays, inline functions, objects) as dependencies in standard `useEffect` hooks without stabilizing them or using primitive types.

---

## 4. Tailwind-First Architecture & Design Tokens (CRITICAL)

The Healthmed frontend is strictly **Tailwind-first**. Tailwind utility classes are used for all component styling (layout, colors, backgrounds, borders, radius, shadows, spacing, sizing, flexbox, grid, responsive design, transitions, hover effects, and animations).

```
                        TAILWIND-FIRST STYLING RULES
       ┌──────────────────────────────────────────────────────────────┐
       │   DESIGN TOKENS VIA CSS VARIABLES IN TAILWIND UTILITIES      │
       ├──────────────────────────────────────────────────────────────┤
       │  - Backgrounds:  bg-[var(--color-surface-primary)]           │
       │  - Text colors:  text-[var(--color-brand-charcoal)]          │
       │  - Borders:      border border-[var(--color-border-subtle)]  │
       │  - Radius:       rounded-[var(--radius-3xl)]                 │
       │  - Spacing:      p-[var(--spacing-lg)] gap-[var(--spacing-md)]│
       │  - Sizing:       max-w-[var(--container-xl)]                 │
       │  - Elevation:    shadow-[var(--shadow-stage)]                │
       └──────────────────────────────┬───────────────────────────────┘
                                      │
                                      ▼
       ┌──────────────────────────────────────────────────────────────┐
       │   TYPOGRAPHY SYSTEM COMPLIANCE (MUST USE CENTRAL TOKENS)     │
       ├──────────────────────────────────────────────────────────────┤
       │  - Typography MUST use utility tokens: brand-text-9xl,       │
       │    brand-text-7xl, brand-text-6xl, brand-text-3xl, etc.      │
       │  - STRICTLY FORBIDDEN: text-xl, text-2xl, font-bold,         │
       │    font-serif, leading-*, tracking-*                         │
       └──────────────────────────────────────────────────────────────┘
```

### Design Token Arbitrary Values

Never hardcode raw hex colors, pixel paddings, hardcoded radii, or arbitrary drop shadows in Tailwind classes. Always use CSS variables from the Design System with Tailwind arbitrary values:

* `bg-[var(--color-surface-primary)]`
* `text-[var(--color-text-primary)]`
* `border-[var(--color-border-subtle)]`
* `rounded-[var(--radius-xl)]`
* `p-[var(--spacing-lg)]` / `px-[var(--spacing-lg)]` / `py-[var(--spacing-xl)]`
* `shadow-[var(--shadow-card)]`
* `gap-[var(--spacing-grid-gap)]`
* `max-w-[var(--container-xl)]`

### Component Composition Example

* **❌ INCORRECT (Hardcoded values & CSS file imports):**
  ```tsx
  /* DO NOT import component CSS files or use hardcoded values */
  import './HealthcareCard.css';

  <div className="bg-white border border-[#E5E7EB] rounded-[24px] p-8 md:p-14 shadow-[0_10px_45px_rgba(0,0,0,0.03)] text-xl font-serif leading-tight">
    Patient Care
  </div>
  ```

* **✅ CORRECT EXECUTABLE COMPOSITION:**
  ```tsx
  /* All styling lives inside the React component using Tailwind & Design Tokens */
  export default function HealthcareCard() {
    return (
      <div className="bg-[var(--color-brand-white)] border border-[var(--color-brand-gray-100)] rounded-[var(--radius-3xl)] p-[var(--spacing-lg)] md:p-[var(--spacing-xl)] shadow-[var(--shadow-stage)] flex flex-col">
        {/* Typography comes strictly from the Typography System (.ai/03_TYPOGRAPHY_SYSTEM.md) */}
        <h3 className="brand-text-5xl text-[var(--color-brand-charcoal)]">
          Patient Care
        </h3>
      </div>
    );
  }
  ```

---

## 5. Component Architecture & File Rules

* **Self-Contained Files:** Every component consists of a single `Component.tsx` file.
* **No CSS Files:** Do NOT create `Component.css` files unless there is an exceptional, explicitly approved project-wide requirement.
* **No CSS Imports:** Do NOT write `import './Component.css'` inside component files.
* **Tailwind Utility Styling:** Utilize Tailwind CSS utility classes with Design Token CSS variables for layout, colors, borders, shadows, spacing, and animations.

---

## 6. Performance & Lazy Loading Scaffolding

* **Code Splitting:** Dynamically import heavy below-the-fold modules using React's `lazy` and `Suspense`:
  ```tsx
  import React, { Suspense, lazy } from 'react';
  const Modules = lazy(() => import('../sections/home/Modules'));
  ```
* **Image Optimization:** Always set explicit aspect ratios, dimensions, and use lazy loading flags for below-the-fold assets:
  ```tsx
  <img src={assetUrl} loading="lazy" width="600" height="450" className="w-full h-auto rounded-[var(--radius-2xl)]" referrerPolicy="no-referrer" />
  ```

---

## 7. Accessibility (a11y) & Interactive Navigation

Every component must satisfy WCAG 2.1 AA requirements:

* **Keyboard Navigation:** All interactive elements (tabs, accordions, dialogs, buttons) must be focusable using `Tab` and activatable via `Enter` or `Space`.
* **Focus States:** Never use outline-none without providing a visible focus indicator (e.g., `:focus-visible` with a custom ring or contrast shift).
* **ARIA Roles & Attributes:** Ensure custom widgets have correct roles:
  * Tab lists must have `role="tablist"`
  * Tabs must have `role="tab"`, `aria-selected={true/false}`, and `aria-controls="panel-id"`
  * Tab content containers must have `role="tabpanel"` and `aria-labelledby="tab-id"`
* **Semantic HTML:** Do not use `div` for buttons. Use the actual `button` element to preserve native screen-reader behaviors and click capabilities.
* **Reduced Motion Support:** Check for user preferences and skip animation transitions if active:
  ```ts
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (mediaQuery.matches) {
    // Render static state or instant values
  }
  ```

---

## 8. Motion & Framer Motion Guidelines

All structural transitions must run cleanly on GPU threads using **Framer Motion** or **GSAP**:

* **Spring Transitions for UI Elements:** Use spring dynamics for structural elements such as active underlines:
  ```tsx
  <motion.div 
    layoutId="activeTabUnderline" 
    className="absolute bottom-0 left-0 right-0 z-10 bg-[var(--color-brand-blue)] h-[2px]" 
    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
  />
  ```
* **Subtle Fades for Backgrounds:** Use tween/ease curves for gradient background entries:
  ```tsx
  <motion.div
    layoutId="activeTabBackground"
    className="absolute inset-x-0 top-0 bottom-0 bg-[var(--color-brand-gray-50)]"
    transition={{ type: 'tween', duration: 0.25 }}
  />
  ```
* **Always Clean Up Animation Events:** Ensure any GSAP or manual event handlers are correctly cleaned up on component unmount:
  ```ts
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create animations
    });
    return () => ctx.revert();
  }, []);
  ```

---

## 9. SEO & Metadata Scaffolding

* **Unified Metadata Handling:** Use the central SEO component (`src/components/ui/SEO.tsx`) inside page entry points.
* **Structured Data:** Use appropriate microdata tags and semantic structured layout models. Do not manually mutate page-level header documents in random JSX routines.

---

## 10. Development Verification Checklist

Before certifying any task as completed, verify that the following assertions hold true:

```
┌──────────────────────────────────────────────────────────────────────────────┐
│                    DEVELOPMENT COMPLIANCE CHECKLIST                         │
├──────────────────────────────────────────────────────────────────────────────┤
│ [ ] Component is completely self-contained in a single Component.tsx file.   │
│ [ ] No component-specific CSS files are generated or imported.               │
│ [ ] Styling uses Tailwind CSS utility classes with Design Tokens (vars).    │
│ [ ] Typography utilizes central tokens (03_TYPOGRAPHY_SYSTEM.md) completely.  │
│ [ ] No raw text sizing (text-xl) or font weight (font-bold) classes used.    │
│ [ ] All heavy visual modules load lazily via Suspense.                       │
│ [ ] TypeScript declarations are strictly typed, avoiding the use of 'any'.    │
│ [ ] The application passes all linter and compilation checks successfully.   │
└──────────────────────────────────────────────────────────────────────────────┘
```
