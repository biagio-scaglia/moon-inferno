# Moon-Inferno

> The web doesn't need another SaaS dashboard.

Moon-Inferno is an accessibility-first UI framework designed for developers who want to build expressive websites without sacrificing usability or performance. Built for interfaces with distinct personality—retro web, Y2K, cyberpunk, CRT, pixel art, anime-inspired, and experimental aesthetics—it provides accessible, responsive, and composable primitives that feel like a forgotten futuristic corner of the early internet.

---

## Why Moon-Inferno?

Modern UI libraries have converged on uniform, sterile enterprise dashboards. While functional, they strip websites of individuality, character, and visual experimentation.

Moon-Inferno exists to reclaim expressive web design without reverting to inaccessible practices. It combines radical visual aesthetics with rock-solid semantic foundations, screen reader support, keyboard navigation, and responsive behavior.

* **Expressive Interfaces**: Retro, Y2K, cyberpunk, CRT, and pixel art aesthetics built as configurable design tokens and CSS variables.
* **Boringly Reliable Foundation**: Strict semantic HTML, full keyboard navigation, ARIA attributes, and WCAG accessibility standards.
* **True Themeability**: Decouples component behavior from visual styling, making custom themes effortless to create and swap.
* **Composable Architecture**: Prefers flexible primitive composition over massive components with dozens of rigid props.

---

## Features

* **Accessibility-first**: WCAG guidelines, screen reader support, and robust keyboard navigation baked in from day one.
* **Responsive by default**: Adapts gracefully across mobile, tablet, and desktop viewports.
* **Themeable**: CSS variable tokens allow instant switching between retro, futuristic, and custom styles.
* **Composable**: Modular building blocks engineered for effortless composition.
* **Expressive visual language**: Unique aesthetics that break away from standard SaaS templates.
* **Lightweight**: Zero unnecessary dependencies to keep bundle sizes lean.
* **TypeScript-first**: Strict type safety and complete auto-completion support across all packages.

---

## Planned Ecosystem

Moon-Inferno is organized as a monorepo containing specialized packages:

| Package | Description |
| --- | --- |
| `@moon-inferno/core` | Framework-independent design tokens, CSS variables, responsive primitives, and accessibility utilities. |
| `@moon-inferno/react` | React component implementations (Button, Input, Dialog, Cards, Tabs, etc.). |
| `@moon-inferno/icons` | Iconography system featuring UI icons, pixel art icons, and retro/experimental symbols. |
| `@moon-inferno/themes` | Official theme definitions (`moon-inferno`, `terminal`, `y2k`). |

---

## Components Roadmap

| Component | Status | Description |
| --- | --- | --- |
| **Button** | ✅ Ready (Phase 1) | Interactive button with tactile focus, loading states, and authentic stepped pixel borders |
| **Input** | ✅ Ready (Phase 1) | Accessible form controls with label, helper text, and error states |
| **Card** | ✅ Ready (Phase 1) | Content container with customizable borders (`CardHeader`, `CardBody`, `CardFooter`) |
| **Dialog** | ✅ Ready (Phase 2) | Accessible modal dialog with focus trap, backdrop blur, and Esc key dismissal |
| **Tabs** | ✅ Ready (Phase 2) | Accessible tabbed interfaces with ARIA pattern and keyboard arrow navigation |
| **Terminal** | ✅ Ready (Phase 2) | Interactive CRT terminal emulator component |
| **CRT Effects** | ✅ Ready (Phase 2) | Scanlines and flickering CRT overlay component |
| **Icons** | ✅ Ready (Phase 2) | 34+ vector SVG iconography system (`@moon-inferno/icons`) |
| **GlitchText** | ✅ Ready (Phase 2) | Retro RGB-split animated glitch text component |
| **PixelContainer** | ✅ Ready (Phase 2) | Retro arcade/OS window container with pixel borders and titlebar controls |
| **Badge** | ✅ Ready (Phase 2) | Expressive status badges (`inferno`, `pixel`, `success`, `error`) |
| **Container / Stack / Grid** | ✅ Ready (Phase 3) | Responsive max-width container, flexbox stack, and CSS grid primitives |
| **Tooltip** | ✅ Ready (Phase 3) | Accessible popover with ARIA `role="tooltip"` and focus/hover triggers |
| **Toast** | ✅ Ready (Phase 3) | Non-modal status notifications using ARIA live regions (`aria-live="polite"`) |
| **Loader** | ✅ Ready (Phase 3) | Retro animated spinners and pulse loading indicators (`inferno`, `pixel`, `pulse`) |
| **Checkbox** | ✅ Ready (Phase 3) | Accessible custom checkbox with ARIA focus rings, label, and description |
| **Radio & RadioGroup** | ✅ Ready (Phase 3) | Accessible radio button group with ARIA keyboard navigation |
| **Switch** | ✅ Ready (Phase 3) | Accessible toggle switch control (`role="switch"`) |
| **Accordion** | ✅ Ready (Phase 4) | Accessible collapsible disclosure panel group (`Accordion`, `AccordionItem`) |
| **MatrixRain** | ✅ Ready (Phase 4) | Cyberpunk ASCII digital rain animation overlay |
| **SignalLight** | ✅ Ready (Phase 4) | Glowing retro status beacon light (`online`, `warning`, `busy`, `offline`) |
| **CodeBlock** | ✅ Ready (Phase 4) | Expressive code snippet viewer with one-click copy button |
| **Gallery & Lightbox** | ✅ Ready (Phase 4) | Responsive media card grid with accessible Modal Lightbox and arrow key navigation |

---

## Interactive Playground & Testing

To see and interact with all implemented components in real time:

```bash
pnpm dev
```

This launches the interactive Vite dev server at `http://localhost:5173`.

* **Sandbox File**: You can view and experiment with component code directly in [`playground/src/App.tsx`](file:///c:/Users/biagio.scaglia/Desktop/moon-inferno/playground/src/App.tsx).
* **Theme Testing**: Toggle live between `moon-inferno`, `terminal`, and `y2k` themes.

---

## Installation

Moon-Inferno is currently in early development (Phase 1 complete).
Installation instructions will be published with the first usable release.

---

## Roadmap

```text
Phase 1 — Foundation (Repository setup, design tokens, core utilities)
Phase 2 — Core components (Button, Input, Card, Typography)
Phase 3 — Interaction components (Dialog, Tabs, Menu, Tooltip, Toast)
Phase 4 — Layout system (Grid, Flex, Container, Stack)
Phase 5 — Moon-Inferno visual effects (CRT overlays, scanlines, retro shaders)
Phase 6 — Documentation (Interactive docs, playground, theme builder)
Phase 7 — First stable release (v1.0.0)
```

---

## Contributing

Contributions will be welcome once the initial core architecture stabilizes. Please refer to [CONTRIBUTING.md](CONTRIBUTING.md) for development guidelines, architecture principles, and code conventions.

---

## License

Distributed under the MIT License. See [LICENSE](LICENSE) for details.
