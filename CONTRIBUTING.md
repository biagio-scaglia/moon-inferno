# Contributing to Moon-Inferno

Thank you for your interest in contributing to Moon-Inferno!

Moon-Inferno is an accessible, responsive, and highly expressive UI framework. Before contributing, please review our architecture principles and guidelines below.

---

## Architecture Principles

### 1. Accessibility First
Every interactive component must be designed with accessibility from the beginning. Accessibility is a fundamental constraint, not an afterthought.

### 2. Semantic HTML
Prefer native HTML elements (`<button>`, `<dialog>`, `<nav>`, `<input>`) over generic `<div>` or `<span>` elements whenever possible.

### 3. Progressive Enhancement
Do not replace native browser behavior without a strong reason. Enhance native elements with styles and accessible interactions rather than reinventing them.

### 4. Responsive by Default
Components must work seamlessly across mobile, tablet, and desktop viewports without requiring manual breakpoint hacks.

### 5. Reduced Motion
All animations, transitions, and visual effects must respect:

```css
@media (prefers-reduced-motion: reduce) {
  /* Disable or simplify animations */
}
```

### 6. Theme Independence
Components should not hard-code the Moon-Inferno visual identity into their behavioral logic. Visual styles must be driven by CSS variables and design tokens.

### 7. Composition Over Configuration
Prefer small, composable components over monolithic components with dozens of configuration props.

### 8. No Unnecessary Dependencies
Keep the core lightweight. Avoid adding third-party dependencies unless absolutely necessary.

---

## Repository Structure

Moon-Inferno is organized as a pnpm monorepo:

```text
moon-inferno/
├── packages/
│   ├── core/       # @moon-inferno/core (Design tokens, CSS variables, a11y & responsive primitives)
│   ├── react/      # @moon-inferno/react (React component implementations)
│   ├── icons/      # @moon-inferno/icons (Iconography system)
│   └── themes/     # @moon-inferno/themes (Official theme definitions)
├── docs/           # Documentation site
├── examples/       # Usage examples
├── playground/     # Interactive testing sandbox
└── scripts/        # Build and release tooling
```

---

## Development Workflow

### Prerequisites
* Node.js (v18+)
* pnpm (v9+)

### Setup
```bash
git clone https://github.com/biagio-scaglia/moon-inferno.git
cd moon-inferno
pnpm install
```

### Useful Commands
```bash
pnpm typecheck   # Typecheck all packages
```

---

## Code & Naming Conventions

* **Files**: Use kebab-case for utility files (`focus-trap.ts`) and PascalCase for React component files (`Button.tsx`).
* **Exports**: Use named exports exclusively. Avoid default exports.
* **TypeScript**: Strict mode is enabled. Do not use `any`; use `unknown` or explicit generic constraints.
* **CSS Variables**: Prefix all tokens with `--mi-` (e.g., `--mi-color-bg`, `--mi-border-radius`).

---

## Commit Conventions

We follow Conventional Commits format:

```text
<type>(<scope>): <short description>
```

Types:
* `feat`: A new feature
* `fix`: A bug fix
* `docs`: Documentation changes
* `style`: Formatting or code style fixes
* `refactor`: Code change that neither fixes a bug nor adds a feature
* `test`: Adding or updating tests
* `chore`: Maintenance tasks, dependencies, or configuration

Example:
```text
feat(react): add accessible Button component
```

---

## Pull Request Guidelines

1. Ensure typechecking passes (`pnpm typecheck`).
2. Keep pull requests focused on a single responsibility.
3. Include tests or verification steps for changes.
4. Ensure accessibility expectations (keyboard navigation, focus indicators, ARIA attributes) are met.
