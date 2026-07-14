# Healthmed Enterprise AI Memory System - Design System Manual

> **IMPORTANT FOR ALL AI ASSISTANTS**
> Read all files inside the `.ai` folder before making any code changes. This file specifies colors, borders, shadows, spacing, visual standard architectures, and layouts. Typography rules are in `.ai/03_TYPOGRAPHY_SYSTEM.md`.

This manual documents the design token architecture, layout rules, and semantic component styles of the Healthmed application.

---

```
                        DESIGN SYSTEM TOKENS SYNCHRONIZATION
      
               CSS VARIABLES [design-system.css] 
               ├── Colors (--color-brand-blue, --color-brand-charcoal, etc.)
               ├── Layout Elements (--radius-xl, --shadow-sm, etc.)
               └── Spacing/Sizing (--spacing-md, --spacing-lg, etc.)
                                     │
                                     ▼
               SEMANTIC CUSTOM CSS CLASSES [e.g. Modules.css, index.css]
               ├── .modules-section   <-- Maps layout and padding
               ├── .modules-card      <-- Maps cards and backgrounds
               └── .modules-tab-button <-- Maps tab triggers and states
                                     │
                                     ▼
               CLEAN DECLARATIVE JSX [Modules.tsx]
               ├── className="modules-section"
               └── className="modules-card"
```

---

## 1. Color System & Semantic Variables

Healthmed's visual language relies on a robust hierarchy of CSS custom variables. **Raw HEX, RGB, or HSL strings are strictly forbidden inside any React components or tailwind attributes.**

### Core Brand Colors (Palette)
```css
:root {
  /* Brand Specifics */
  --color-brand-blue: #2271e8;
  --color-brand-blue-hover: #1b5cbd;
  --color-brand-charcoal: #12151a;
  --color-brand-bg: #fbfbfc;
  --color-brand-white: #ffffff;

  /* Grays Palette */
  --color-brand-gray-50: #f8f9fa;
  --color-brand-gray-100: #eef1f4;
  --color-brand-gray-200: #e1e4e8;
  --color-brand-gray-500: #7b8491;
  --color-brand-gray-600: #555d6b;
  --color-brand-gray-900: #1a1e24;
}
```

### Mapping to Components (Alias Mapping)
Component CSS files must target semantic custom properties, preserving variable linking.

* **❌ INCORRECT / FORBIDDEN EXAMPLE:**
  ```css
  .modules-section {
    background-color: #fbfbfc; /* Hardcoded hex colors are FORBIDDEN */
    border-bottom: 1px solid #eef1f4;
  }
  ```

* **✅ CORRECT EXAMPLE (Modules.css):**
  ```css
  .modules-section {
    background-color: var(--color-brand-bg);
    border-bottom: 1px solid var(--color-brand-gray-100);
  }

  .modules-tab-underline {
    background-color: var(--color-brand-blue);
  }
  ```

---

## 2. Layout Spacing & Section Boundaries

All spacing (padding, margin, gap) must align with the global spacing standards, mapped via semantic class attributes in CSS stylesheets:

| Variable / Value | Standard Name | Clinical Application / Layout Role |
| :--- | :--- | :--- |
| `0.25rem` / `4px` | `--spacing-xxs` | Tight badge labels, focus rings, minor borders |
| `0.5rem` / `8px` | `--spacing-xs` | Component metadata spacing, small grid gaps |
| `1rem` / `16px` | `--spacing-sm` | Card body margins, medium element gutters |
| `1.5rem` / `24px` | `--spacing-md` | Subsystem dividers, general mobile paddings |
| `2rem` / `32px` | `--spacing-lg` | Standard card component paddings, large grid gaps |
| `3rem` / `48px` | `--spacing-xl` | Desktop component containers, segment separators |
| `5rem` / `80px` | `--spacing-xxl` | Mobile section top/bottom padding offsets |
| `7rem` / `112px` | `--spacing-xxxl` | Desktop section boundaries and structural ends |

### Responsive Container Widths & Alignment
* Container standard size: `max-w-7xl` or `80rem` (approx. 1200px max layout container).
* Outer page content margin should use responsive centering padding: `px-4 md:px-8 mx-auto`.

---

## 3. Radii System (Borders)

Use specified CSS custom radius tokens to maintain a consistent rounding style across all component families:

```css
:root {
  --radius-sm: 4px;      /* Sharp tags, badges, input states */
  --radius-md: 6px;      /* Small buttons, checkbox indicators */
  --radius-lg: 8px;      /* Standard controls, dropdown menus */
  --radius-xl: 12px;     /* Action button bars, medium list frames */
  --radius-2xl: 16px;    /* Large sub-images, secondary graphics */
  --radius-3xl: 24px;    /* Main containers, modals, primary cards */
}
```

---

## 4. Shadow System

Card elevations and panel depth states must be styled with established shadow variables. **Never compile custom hex shadows inside components or CSS stylesheets.**

```css
:root {
  /* Soft, micro-elevations for high-contrast environments */
  --shadow-sm: 0 1px 2px rgba(18, 21, 26, 0.05);
  --shadow-md: 0 4px 12px -2px rgba(18, 21, 26, 0.08), 0 2px 4px -1px rgba(18, 21, 26, 0.04);
  --shadow-lg: 0 12px 24px -4px rgba(18, 21, 26, 0.12), 0 4px 8px -2px rgba(18, 21, 26, 0.06);
  
  /* Stage Cards (Used for modules, content tabs, bento structures) */
  --shadow-stage: 0 10px 45px -5px rgba(0, 0, 0, 0.03), 0 4px 16px rgba(0, 0, 0, 0.02);
}
```

---

## 5. Visual Standards for Component Families

### Card System
```
                   ┌────────────────────────────────────────┐
                   │               CARD WRAPPER             │
                   │  - White bg, 1px Gray-200 border       │
                   │  - 24px rounded borders, Soft shadow   │
                   └───────────────────┬────────────────────┘
                                       │
                                       ▼
                   ┌────────────────────────────────────────┐
                   │             INTERNALS GRID             │
                   │  - 42px or 48px padding (lg/xl size)   │
                   │  - 2-column horizontal split structure │
                   └────────────────────────────────────────┘
```

Every information card follows this layout rule:
* **Background:** Clean solid white (`var(--color-brand-white)`) or very soft gray.
* **Borders:** Constant `1px solid var(--color-brand-gray-100)` (or `#E5E7EB`).
* **Radius:** `rounded-[24px]` (uses `var(--radius-3xl)` token equivalent).
* **Elevation:** Custom light drop shadow mapping `var(--shadow-stage)`.

### Button System & Interactive Controls
Always structure interactive states cleanly, applying unified transition properties (`transition-all duration-200`):

```css
/* ✅ CORRECT EXAMPLE */
.modules-action-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-brand-gray-50);
  border: 1px solid var(--color-brand-gray-100);
  border-radius: var(--radius-xl);
  color: var(--color-brand-charcoal);
  transition-property: all;
  transition-duration: 200ms;
}

.modules-action-link:hover {
  background-color: #F1F3F5;
  border-color: #DEE2E6;
}
```

### Grids & Columns Layouts
* Use CSS grids with explicit layout constraints rather than arbitrary offsets:
  ```css
  .grid-layout-3col {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: var(--spacing-lg);
  }
  @media (min-width: 1024px) {
    .grid-layout-3col {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
  ```

---

## 6. Icons & Graphic Elements

* **Consistent Library Choice:** Always use `lucide-react` for system icons.
* **Consistent Sizing Frameworks:**
  * Inline tags & small links: `h-4 w-4` (or `16px`)
  * Action button labels & standard cards: `h-5 w-5` (or `20px`)
  * Section intros & diagnostic indicators: `h-6 w-6` (or `24px`)
* **Stroke Consistency:** Maintain standard default line weights (`stroke-width: 2` or default Lucide weight).

---

## 7. Images & Graphics Rules

* **Fixed / Explicit Aspect Ratios:** Always explicitly constrain media containers using aspect ratios (`aspect-video`, `aspect-square`, `aspect-[4/3]`) to prevent layout shifts.
* **Referrer Policy & Optimization:** Explicitly include `referrerPolicy="no-referrer"` on images to comply with workspace policies.
* **Rounded Framing:** Apply standard rounding elements (`rounded-2xl` or `rounded-xl`) and overlay a subtle border to establish boundary contrast against light off-white environments.

---

## 8. Animation & Hover Transition Rules

* **GPU Acceleratable Animations:** Animations must only transform CSS properties that do not cause layout recalculation: `opacity` and `transform` (`scale`, `translate`, `rotate`).
* **Interactive Hover Scaling:** Interactive card components may lift slightly on hover. Use a clean, subtle transition:
  ```css
  .hover-card-interaction {
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
  }
  .hover-card-interaction:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
  }
  ```

---

## 9. AI Self-Validation & Wrong vs. Correct Styling

```
┌──────────────────────────────────────────────────────────────────────────────┐
│                    DESIGN SYSTEM COMPLIANCE CHECKLIST                        │
├──────────────────────────────────────────────────────────────────────────────┤
│ [ ] No raw HEX colors are present in stylesheet or React code files.        │
│ [ ] Margins and paddings strictly map to standard spacing variables.        │
│ [ ] Rounded values are mapped to exact radii tokens (--radius-xs to -3xl).   │
│ [ ] Grid systems are clean and responsive.                                   │
│ [ ] Zero custom typography definitions are written in this document.         │
└──────────────────────────────────────────────────────────────────────────────┘
```
