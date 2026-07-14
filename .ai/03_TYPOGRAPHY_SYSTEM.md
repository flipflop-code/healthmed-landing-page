# Healthmed Enterprise AI Memory System - Typography System

> **IMPORTANT FOR ALL AI ASSISTANTS**
> This document is the absolute, non-negotiable single source of truth for typography. You must never redefine, override, or duplicate typographic styling rules inside component CSS, Tailwind classes, or inline styles.

This guide defines the unified typography tokens, core philosophy, usage models, and compliance workflows to ensure absolute text layout consistency across the Healthmed application.

---

```
                       TYPOGRAPHY ARCHITECTURE PIPELINE
      
                 GLOBAL DESIGN SYSTEM [design-system.css]
                 ├── Central Typography Token Presets 
                 │   ├── text-xl (Font, size, weight, line-height, spacing)
                 │   ├── text-2xl (Font, size, weight, line-height, spacing)
                 │   └── ... up to text-9xl
                 └── Global Standard Fallbacks
                                     │
                                     ▼
                SEMANTIC CLASSES AND CUSTOM JSX IMPLEMENTATION
                 ├── ✅ CORRECT: className="text-4xl"
                 ├── ✅ CORRECT: className="modules-header text-6xl" (Layout only in CSS)
                 └── ❌ FORBIDDEN: className="font-serif text-3xl font-medium leading-tight"
```

---

## 1. Typography Philosophy

Typography forms the emotional and structural foundation of the Healthmed visual experience. Visual balance is achieved through highly disciplined, pre-compiled typographic tokens rather than arbitrary sizing and font configurations.

### Key Commandments
1. **One Text Element = One Typography Token:** Each distinct piece of text must be styled using exactly one central token class.
2. **Never Recombine Styles:** Never combine a typography token with extra inline font overrides. For example, `className="text-7xl font-serif font-medium leading-tight tracking-tight"` is highly incorrect because the `text-7xl` token already encapsulates its exact font-family, font-weight, line-height, and tracking values.
3. **No Local Typographic Layout Recalculation:** Do not define properties like `font-size` or `font-family` inside component stylesheets or local React components. Doing so violates token boundaries and introduces design entropy.

---

## 2. Typography Token System

Every preset typography class in Healthmed has been engineered to group all relevant typographical specifications into a single, cohesive token.

### Standard Token Map
Each token encapsulates a specific grouping of variables:

* **`text-9xl`** / Ultra Display Headline
  * Font Family: Serif
  * Font Weight: Light / Regular (400)
  * Line Height: 1.05
  * Letter Spacing: `-0.03em`
* **`text-8xl`** / Large Section Header
  * Font Family: Serif
  * Font Weight: Regular (400)
  * Line Height: 1.10
  * Letter Spacing: `-0.025em`
* **`text-7xl`** / Main Section Title
  * Font Family: Serif
  * Font Weight: Regular (400)
  * Line Height: 1.15
  * Letter Spacing: `-0.02em`
* **`text-6xl`** / Secondary Section Title
  * Font Family: Serif
  * Font Weight: Regular / Medium
  * Line Height: 1.20
  * Letter Spacing: `-0.015em`
* **`text-5xl`** / Feature Block Title
  * Font Family: Serif / Sans
  * Font Weight: Medium (500)
  * Line Height: 1.25
  * Letter Spacing: `-0.012em`
* **`text-4xl`** / Standard Subtitle
  * Font Family: Sans
  * Font Weight: Medium (500)
  * Line Height: 1.30
  * Letter Spacing: `-0.01em`
* **`text-3xl`** / Large Interactive Labels
  * Font Family: Sans
  * Font Weight: Medium (500)
  * Line Height: 1.35
  * Letter Spacing: `-0.008em`
* **`text-2xl`** / Standard Body Headline
  * Font Family: Sans
  * Font Weight: Regular (400)
  * Line Height: 1.45
  * Letter Spacing: `-0.005em`
* **`text-xl`** / Primary Reading Body / Micro Metadata
  * Font Family: Sans
  * Font Weight: Regular (400)
  * Line Height: 1.50
  * Letter Spacing: `0`

---

## 3. Absolutely Forbidden Visual Styles

To maintain pristine token architecture, the following CSS rules are **STRICTLY FORBIDDEN** inside any component-specific CSS, SCSS, CSS Modules, styled components, or JSX definitions:

* ❌ `font-size`
* ❌ `font-family`
* ❌ `font-weight`
* ❌ `line-height`
* ❌ `letter-spacing`
* ❌ `font-style`
* ❌ `text-transform`
* ❌ `text-decoration`

Unless explicitly requested by the user, these properties must be handled exclusively by the central typography tokens.

---

## 4. Wrong vs. Correct Examples

### Component CSS Examples

* **❌ WRONG:** Redefining typographic properties inside custom CSS classes
  ```css
  /* (Modules.css) */
  .modules-card-title {
    font-family: var(--font-serif);
    font-size: 32px;
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: -0.015em;
    color: var(--color-brand-charcoal);
  }
  ```

* **✅ CORRECT:** Applying layout constraints in CSS, and delegating typography strictly to a token in JSX
  ```css
  /* (Modules.css) */
  .modules-card-title {
    color: var(--color-brand-charcoal);
    margin-bottom: var(--spacing-sm);
  }
  ```
  ```tsx
  /* (Modules.tsx) */
  <h3 className="modules-card-title text-5xl">
    Patient Care
  </h3>
  ```

* **✅ CORRECT (Using CSS @apply with tokens):**
  ```css
  /* (Modules.css) */
  .modules-card-title {
    @apply text-5xl;
    color: var(--color-brand-charcoal);
  }
  ```

### JSX Styling Examples

* **❌ WRONG:** Combining tokens with individual Tailwind inline typography utilities
  ```tsx
  <h2 className="text-7xl font-serif font-medium leading-tight tracking-tight text-[#111]">
    Trusted Care
  </h2>
  ```

* **✅ CORRECT:** Letting the token handle the complete visual characteristics
  ```tsx
  <h2 className="text-7xl text-brand-charcoal">
    Trusted Care
  </h2>
  ```

---

## 5. Common AI Mistakes & Regression Prevention

* **Over-recreation & Redundancy:** A common AI trap is trying to make text responsive by writing `className="text-2xl md:text-3xl lg:text-4xl"`. This breaks tokens. Use a responsive token mapped via the system instead, or use a single token that natively responds inside the global css.
* **Adding Manual Fonts in CSS:** Adding `font-family: var(--font-sans)` to everything. In Healthmed, the base font is configured at the HTML body level. Components inherit this automatically.
* **Capitalization overrides:** Avoid adding `uppercase tracking-widest` to headings. Use the designated typography tokens or pre-defined components like `<Heading>` or `<Badge>` to maintain consistency.

---

## 6. AI Self-Validation Checklist

Before outputting or committing any styling edits, perform this automated code scan:

```
┌──────────────────────────────────────────────────────────────────────────────┐
│                    TYPOGRAPHY SYSTEM SCANNER CHECKLIST                       │
├──────────────────────────────────────────────────────────────────────────────┤
│ [ ] No instances of 'font-size' are written in local component CSS.          │
│ [ ] No instances of 'font-family' are written in local component CSS.        │
│ [ ] No instances of 'font-weight' are written in local component CSS.        │
│ [ ] No instances of 'line-height' are written in local component CSS.        │
│ [ ] No instances of 'letter-spacing' are written in local component CSS.     │
│ [ ] Standard typography token classes are applied on every text wrapper.      │
└──────────────────────────────────────────────────────────────────────────────┘
```

If any violation of these guidelines is found, refactor and align it immediately before finalizing the task.
