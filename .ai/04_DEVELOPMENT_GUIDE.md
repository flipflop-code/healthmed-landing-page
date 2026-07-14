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
├── styles/             # Stylesheet configuration, CSS modules, variables
└── utils/              # Independent formatting engines and clinical utility libraries
```

---

## 2. Component Architecture & Guidelines

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
      <div className="diagnostic-card" id={id}>
        {/* Component-specific layout and slots */}
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

## 4. Strict Tailwind CSS Constraints (CRITICAL)

The Healthmed frontend is styled using **semantic CSS stylesheets**. Tailwind utility classes are restricted to **Structural and Layout-only roles**.

```
                        STRICT WORKSPACE STYLING RULES
       ┌──────────────────────────────────────────────────────────────┐
       │   ALLOWED TAILWIND UTILITIES (Layout Engine Only)            │
       ├──────────────────────────────────────────────────────────────┤
       │  - flex, grid, gap, items-*, justify-*                       │
       │  - block, inline-block, hidden                               │
       │  - relative, absolute, sticky, fixed, inset-*                │
       │  - overflow-*, z-*                                           │
       └──────────────────────────────┬───────────────────────────────┘
                                      │
                                      ▼
       ┌──────────────────────────────────────────────────────────────┐
       │   STRICTLY FORBIDDEN TAILWIND UTILITIES (Must go in CSS)     │
       ├──────────────────────────────────────────────────────────────┤
       │  - Color classes: bg-[#...], text-[#...], border-[#...]       │
       │  - Typography details: font-serif, leading-*, tracking-*     │
       │    (Redirect to .ai/03_TYPOGRAPHY_SYSTEM.md for guidance)    │
       │  - Spacing blocks: p-*, m-*, px-*, py-*, pt-*                │
       │  - Corner styles & Shadow elements: rounded-*, shadow-*      │
       └──────────────────────────────────────────────────────────────┘
```

### Class Matching Example

* **❌ INCORRECT / FORBIDDEN JSX COMPOSITION:**
  ```tsx
  /* DO NOT use raw Tailwind styling utilities in JSX */
  <div className="bg-white border border-[#E5E7EB] rounded-[24px] p-8 md:p-14 shadow-[0_10px_45px_rgba(0,0,0,0.03)] flex flex-col space-y-6">
    <h3 className="font-serif text-3xl text-brand-charcoal leading-tight">
      Patient Care
    </h3>
  </div>
  ```

* **✅ CORRECT EXECUTABLE COMPOSITION:**
  ```tsx
  /* DO use descriptive class names and reference structural layouts */
  import './Modules.css';

  export default function HealthcareCard() {
    return (
      <div className="modules-card flex flex-col">
        {/* Typography is handled strictly via central tokens. See 03_TYPOGRAPHY_SYSTEM.md */}
        <h3 className="modules-card-title text-5xl">
          Patient Care
        </h3>
      </div>
    );
  }
  ```
  ```css
  /* (Modules.css) Define all layout styles inside the stylesheet */
  .modules-card {
    background-color: var(--color-brand-white);
    border: 1px solid var(--color-brand-gray-100);
    border-radius: var(--radius-3xl);
    padding: var(--spacing-lg);
    box-shadow: var(--shadow-stage);
  }

  .modules-card-title {
    color: var(--color-brand-charcoal);
  }

  @media (min-width: 768px) {
    .modules-card {
      padding: var(--spacing-xl);
    }
  }
  ```

---

## 5. CSS Organization Rules

* Every component or page section must maintain its own stylesheet inside its local workspace (e.g. `src/sections/home/Modules.css` for `src/sections/home/Modules.tsx`).
* Components must import their local stylesheet directly at the top of the file.
* Keep class structures modular and flat. Do not build overly deep nesting loops, as this complicates future code adjustments.

---

## 6. Performance & Lazy Loading Scaffolding

* **Code Splitting:** Dynamically import heavy below-the-fold modules using React's `lazy` and `Suspense`:
  ```tsx
  import React, { Suspense, lazy } from 'react';
  const Modules = lazy(() => import('../sections/home/Modules'));
  ```
* **Image Optimization:** Always set explicit aspect ratios, dimensions, and use lazy loading flags for below-the-fold assets:
  ```tsx
  <img src={assetUrl} loading="lazy" width="600" height="450" className="lazy-image" referrerPolicy="no-referrer" />
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
    className="modules-tab-underline absolute bottom-0 left-0 right-0 z-10" 
    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
  />
  ```
* **Subtle Fades for Backgrounds:** Use tween/ease curves for gradient background entries:
  ```tsx
  <motion.div
    layoutId="activeTabBackground"
    className="modules-tab-bg-gradient absolute inset-x-0 top-0 bottom-0"
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
│ [ ] Code uses semantic custom CSS classes, NOT raw utility Tailwind.         │
│ [ ] Stylesheet rules align with Design System (02_DESIGN_SYSTEM.md).         │
│ [ ] Typography utilizes central tokens (03_TYPOGRAPHY_SYSTEM.md) completely.  │
│ [ ] No typography properties (font-size, etc.) are declared in local CSS.    │
│ [ ] All heavy visual modules load lazily via Suspense.                       │
│ [ ] TypeScript declarations are strictly typed, avoiding the use of 'any'.    │
│ [ ] The application passes all linter and compilation checks successfully.   │
└──────────────────────────────────────────────────────────────────────────────┘
```
