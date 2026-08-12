# moon-inferno

<p align="center">
  <h1 align="center">moon-inferno</h1>
  <p align="center"><strong>All-in-One Package for Moon-Inferno: Expressive, Accessibility-First React UI Framework</strong></p>
  <p align="center"><em>Created by Biagio Scaglia</em></p>
</p>

[![NPM Version](https://img.shields.io/npm/v/moon-inferno?color=FF4D00)](https://www.npmjs.com/package/moon-inferno)
[![License](https://img.shields.io/badge/license-MIT-00FF66.svg)](https://opensource.org/licenses/MIT)

> Install everything with a single command: `npm install moon-inferno`

---

## ⚡ Quickstart

### Installation

```bash
npm install moon-inferno
# or
pnpm add moon-inferno
```

### Usage

```tsx
import 'moon-inferno/styles.css';
import {
  MoonProvider,
  MoonTypewriterDialogue,
  MoonHealthMeter,
  MoonRPGGrid,
  FlameIcon
} from 'moon-inferno';

export default function App() {
  return (
    <MoonProvider defaultTheme="moon-inferno">
      <MoonTypewriterDialogue
        speaker="COMMANDER"
        avatar={<FlameIcon size={20} color="#FF4D00" />}
        text="All-in-one moon-inferno bundle active!"
      />
      <MoonHealthMeter type="health" value={95} max={100} label="HP" />
      <MoonRPGGrid columns={5} totalSlots={10} />
    </MoonProvider>
  );
}
```

---

## 📖 Official Documentation

- **Live Playground & Website**: [https://biagio-scaglia.github.io/moon-inferno/](https://biagio-scaglia.github.io/moon-inferno/)
- **GitHub Repository**: [https://github.com/biagio-scaglia/moon-inferno](https://github.com/biagio-scaglia/moon-inferno)

Distributed under the MIT License. Created by [Biagio Scaglia](https://github.com/biagio-scaglia).
