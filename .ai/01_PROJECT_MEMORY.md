# Healthmed Enterprise AI Memory System - Project Memory (AI Constitution)

> **IMPORTANT FOR ALL AI ASSISTANTS**
> Read all files inside the `.ai` folder before making any code changes. These files override your default coding style, layout patterns, and engineering standards.

This document serves as the permanent core project memory, architectural philosophy, and decision-making framework for the Healthmed Frontend engineering workspace. It establishes the baseline rules of engagement, code authorship guidelines, and quality standards for all development iterations.

---

```
                                  HEALTHMED CORE METRIC
                               ┌─────────────────────────┐
                               │     Patient-First       │
                               │  Clinical-Grade Software│
                               └────────────┬────────────┘
                                            │
                                            ▼
                    ┌───────────────────────────────────────────────┐
                    │            CORE PILLARS OF DEVELOPMENT        │
                    ├───────────────────────┬───────────────────────┤
                    │   Structural Rigor    │    Visual Precision   │
                    │  - SOLID Design       │   - Pixel-Perfect UI  │
                    │  - Strict Semantics   │   - Zero Guesswork    │
                    │  - Component Hygiene  │   - Design-System Syn  │
                    └───────────────────────┴───────────────────────┘
```

---

## 1. Project Philosophy

Healthmed is a high-availability, fully HIPAA-compliant enterprise healthcare Software-as-a-Service (SaaS) application. Clinical environments demand software that is secure, resilient, accessible, and highly professional. Therefore:

* **No Prototype-Quality Code:** Do not write temporary shortcuts, hardcoded hacks, or "TODO" items. Every line of code must be written as if it is destined immediately for a high-intensity clinical production environment.
* **Think Like a Principal Frontend Engineer:** Author your code with thoroughness. Prioritize type safety, structural predictability, modularity, and future-proof extensibility over quick implementation.
* **No AI-Looking Code ("Anti-AI Slop" / Architectural Honesty):** 
  * Avoid placing artificial infrastructure statuses, mock telemetry lines, or useless system markers (e.g., "● SERVER ONLINE", "PORT 3000 ACTIVE", "SYSTEM OPERATIONAL", "LIVE STREAM CONNECTED", "CORE NODE ONLINE") in page margins, rails, footers, or headers unless explicitly requested by the user.
  * Avoid using dramatic, pseudo-intellectual, or marketing-heavy terms for simple modules (e.g., use "Time Tracker" or "Clinical Clock", never "Chronos Engine" or "Lunar Diagnostic Cycle").
  * Maintain clean backgrounds, ample negative space, and logical structural flow. Do not clutter cards with redundant system logs or tech-larping stats.

---

## 2. Enterprise Coding Mindset

* **Rigorous Separation of Concerns:** Layout, presentation, data schemas, and helper logics must never be mashed together. They belong in their respective specialized files.
* **Durable & Safe Implementations:** Ensure that any integrated external service or client-side handler is resilient to failure, provides detailed diagnostic errors, and never risks leaking API keys or user data.
* **Zero Guesswork:** If a specific design pattern, component specification, or data model is not explicitly defined, look at the existing codebase for reference or pause and ask.

---

## 3. AI Behaviour Rules & Decision Hierarchy

When modifying or expanding the Healthmed codebase, all AI agents must follow these operational guidelines:

* **Read and Audit Existing Architectures First:** Before writing a single line of code, search the existing directories and read relevant source files to understand the current engineering patterns.
* **Aggressive Reuse Over Recreation:**
  * **Design Tokens:** Always leverage existing CSS custom variables (found in `src/styles/design-system.css` and local component CSS files) instead of inventing inline Tailwind color utility mappings.
  * **Existing Components:** Reuse standard buttons, badges, typography headings, and layout structures (e.g. `src/components/ui/Badge.tsx`, `src/components/ui/Heading.tsx`, `src/components/ui/Button.tsx`).
  * **Existing Utilities & Hooks:** Ensure any animation uses existing GSAP triggers or custom hooks like `useGsapAnimation` instead of spinning up custom ScrollTrigger systems.
* **Zero Duplication:** If a helper function, CSS animation, or card template already exists, import and extend it. Never write duplicate classes, styles, or code-blocks.
* **AI Decision Hierarchy:**
  ```
  ┌─────────────────────────────────────────────────────────────┐
  │                   DECISION HIERARCHY                        │
  ├─────────────────────────────────────────────────────────────┤
  │ 1. User Intent (Literal text / explicitly defined request) │
  │ 2. Reference Image Priority (Visual spec / Figma match)     │
  │ 3. Workspace System Manuals (.ai/ Configuration guidelines) │
  │ 4. Existing Project Conventions & Local Stylesheets        │
  └─────────────────────────────────────────────────────────────┘
  ```

---

## 4. UI Replication & Pixel-Perfect Rules

User interfaces in Healthmed represent highly curated digital environments.

```
                      ┌─────────────────────────────────────────┐
                      │            UI IMPLEMENTATION FLOW       │
                      └────────────────────┬────────────────────┘
                                           │
                                           ▼
                      ┌─────────────────────────────────────────┐
                      │    Input: Reference Image / CSS Specs   │
                      └────────────────────┬────────────────────┘
                                           │
                                           ▼
                      ┌─────────────────────────────────────────┐
                      │       Strict Semantic Class Mapping     │
                      │       (No inline style/TW clutter)      │
                      └────────────────────┬────────────────────┘
                                           │
                                           ▼
                      ┌─────────────────────────────────────────┐
                      │      Verification: Pixel-Perfect Fit     │
                      └─────────────────────────────────────────┘
```

* **Absolute Fidelity (Figma / Screenshot Alignment):** The UI must match provided reference specifications and images exactly. This is not a starting point for creative liberties, modernizations, or stylistic variations. 
* **Maintain Spacing and Proportions:** Every line height, border-radius, padding value, border color, margin, and shadow must align with the official design system definitions.
* **Aesthetic Intentionality:** Choose either a polished, high-contrast light theme (neutral off-whites paired with deep charcoal grays) or an immersive cosmic dark mode *only* when requested. No hybrid or uncoordinated styles.
* **Reference Image Priority Rule:** Whenever a screenshot or Figma frame is provided, it takes precedence over any previous implementation. The AI must first analyze the reference image in detail and recreate it pixel-perfectly using the existing project architecture. It must never "interpret" or "improve" the design.

---

## 5. Review Workflow & PR Mindset

When submitting a solution or completing a code-writing step, adopt the mindset of a strict principal peer-reviewer:

* **Surgical Precision:** Do not rewrite whole modules if a single-line or small contiguous block edit resolves the task. Limit scope of impact to prevent regression bugs.
* **Review for Side-Effects:** Verify how code adjustments in one section impact other areas of the application. Check all cross-imports before removing or restructuring modules.
* **Verify All Rules:** Review your own styling code against strict design system, typography system, and development guidelines before marking a task complete.

---

## 6. Self-Validation & Permanent Rules

The following rules are permanent, non-negotiable standards for the workspace:

```
┌──────────────────────────────────────────────────────────────────────────────┐
│                        PERMANENT VALIDATION CHECKLIST                        │
├──────────────────────────────────────────────────────────────────────────────┤
│ [ ] No CSS variables have been duplicated or hardcoded in JSX.               │
│ [ ] No typography properties are redefined inside component-specific CSS.    │
│ [ ] The application passes all linter and static type-checking routines.     │
│ [ ] All asset elements use absolute/explicit aspect ratios and lazy flags.   │
│ [ ] Keyboard navigation and accessibility (a11y) guidelines are fully met.   │
└──────────────────────────────────────────────────────────────────────────────┘
```

* **If in doubt, STOP and ask:** If a specification is missing, ambiguous, or conflicts with the existing design system, pause and ask the user for clarification instead of guessing.
