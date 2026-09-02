---
marp: true
theme: default
paginate: true
size: 16:9
style: |
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700;900&family=Space+Grotesk:wght@400;600;700&family=JetBrains+Mono:wght@400;600&display=swap');

  :root {
    --bg-dark: #0A0B10;
    --card-bg: rgba(18, 22, 34, 0.85);
    --card-border: rgba(255, 77, 0, 0.35);
    --accent-orange: #FF4D00;
    --accent-cyan: #00E5FF;
    --accent-green: #00FF66;
    --text-primary: #F0F4FC;
    --text-secondary: #94A3B8;
  }

  section {
    background-color: var(--bg-dark);
    background-image: 
      radial-gradient(circle at 90% 10%, rgba(255, 77, 0, 0.12) 0%, transparent 40%),
      radial-gradient(circle at 10% 90%, rgba(0, 229, 255, 0.08) 0%, transparent 40%),
      linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
    background-size: 100% 100%, 100% 100%, 40px 40px, 40px 40px;
    color: var(--text-primary);
    font-family: 'Space Grotesk', sans-serif;
    padding: 40px 60px;
    font-size: 20px;
  }

  h1, h2, h3 {
    font-family: 'Orbitron', sans-serif;
    letter-spacing: 1px;
  }

  h1 {
    color: #FFFFFF;
    text-shadow: 0 0 20px rgba(255, 77, 0, 0.6);
  }

  h2 {
    color: var(--accent-cyan);
    font-size: 1.8rem;
    border-bottom: 2px solid var(--accent-orange);
    padding-bottom: 8px;
    margin-bottom: 24px;
    display: inline-block;
  }

  h3 {
    color: var(--accent-orange);
    font-size: 1.3rem;
    margin-top: 0;
  }

  p, li {
    color: var(--text-primary);
    line-height: 1.5;
  }

  strong {
    color: #FFFFFF;
  }

  code {
    font-family: 'JetBrains Mono', monospace;
    background: #161B26;
    color: var(--accent-cyan);
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 0.9em;
  }

  pre code {
    background: transparent;
    padding: 0;
  }

  pre {
    background: #0D1117 !important;
    border: 1px solid #30363D;
    border-left: 4px solid var(--accent-orange);
    border-radius: 8px;
    padding: 14px;
    font-size: 0.78rem;
  }

  .grid-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  .grid-3 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 18px;
  }

  .card {
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    border-radius: 10px;
    padding: 16px 20px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
  }

  .card.cyan {
    border-color: rgba(0, 229, 255, 0.4);
  }

  .card.green {
    border-color: rgba(0, 255, 102, 0.4);
  }

  .badge {
    display: inline-block;
    padding: 4px 10px;
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 700;
    font-family: 'Orbitron', sans-serif;
    letter-spacing: 0.5px;
    margin-right: 8px;
  }

  .badge-orange { background: rgba(255, 77, 0, 0.2); color: #FF4D00; border: 1px solid #FF4D00; }
  .badge-cyan { background: rgba(0, 229, 255, 0.2); color: #00E5FF; border: 1px solid #00E5FF; }
  .badge-green { background: rgba(0, 255, 102, 0.2); color: #00FF66; border: 1px solid #00FF66; }

  footer {
    font-size: 0.75rem;
    color: var(--text-secondary);
    font-family: 'Space Grotesk', sans-serif;
  }

  section.cover {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
---

<!-- _class: cover -->
<!-- _paginate: false -->

# 🌘 MOON INFERNO 🔥

### Expressive Web UI Framework & Design System

<div style="margin-top: 15px; margin-bottom: 25px;">
  <span class="badge badge-orange">REACT 18+</span>
  <span class="badge badge-cyan">WCAG 2.1 AA ACCESSIBLE</span>
  <span class="badge badge-green">OPEN SOURCE MIT</span>
</div>

<p style="font-size: 1.15rem; max-width: 800px; color: #E2E8F0; margin: 0 auto;">
Un framework UI nato per unire estetica retro, gaming e cyberpunk con standard rigorosi di accessibilità web e architettura moderna.
</p>

<div style="margin-top: 40px; font-size: 0.95rem; color: #94A3B8;">
  <strong>Candidato:</strong> Biagio Scaglia &nbsp;│&nbsp; <strong>Progetto:</strong> Esame Finale
</div>

---

## 01. Cos'è Moon Inferno?

<div class="grid-3" style="margin-top: 15px;">
  <div class="card">
    <h3>⚡ UI Framework</h3>
    <p>Libreria completa di componenti <strong>React</strong> e design system modulare a token CSS per interfacce ad alto impatto visivo.</p>
  </div>

  <div class="card cyan">
    <h3>🎮 Gaming & Web3</h3>
    <p>Primitive native per <strong>inventari RPG 2D</strong>, barre salute, console CRT fosfori e dialoghi animati da videogioco.</p>
  </div>

  <div class="card green">
    <h3>♿ Accessibilità Totale</h3>
    <p>Piena conformità <strong>WCAG 2.1 AA</strong> e WAI-ARIA nativa su tutti i componenti sperimentali.</p>
  </div>
</div>

<div class="card" style="margin-top: 18px; border-left: 4px solid var(--accent-orange);">
  <p style="margin: 0; font-size: 0.95rem;">
    🎯 <strong>Obiettivo:</strong> Dimostrare che il web non deve per forza ridursi a template aziendali piatti: è possibile creare interfacce scenografiche senza escludere alcun utente.
  </p>
</div>

---

## 02. Il Problema & L'Opportunità

<div class="grid-3" style="margin-top: 20px;">
  <div class="card">
    <h3 style="color: #FF5555;">⚠️ IL PROBLEMA</h3>
    <p><strong>Omologazione Estetica</strong></p>
    <p style="font-size: 0.9rem; color: var(--text-secondary);">La maggior parte delle librerie UI produce interfacce SaaS identiche e prive di personalità.</p>
  </div>

  <div class="card cyan">
    <h3 style="color: #FFAA00;">🚧 LA LIMITAZIONE</h3>
    <p><strong>Effetti Creativi Inaccessibili</strong></p>
    <p style="font-size: 0.9rem; color: var(--text-secondary);">I siti cyberpunk/retro spesso rompono screen reader, contrasto cromatico e focus da tastiera.</p>
  </div>

  <div class="card green">
    <h3 style="color: var(--accent-green);">🚀 L'OPPORTUNITÀ</h3>
    <p><strong>Moon Inferno Engine</strong></p>
    <p style="font-size: 0.9rem; color: var(--text-secondary);">Unire estetica estrema, Developer Experience di alto livello e conformità a11y certificata.</p>
  </div>
</div>

---

## 03. Visione & Scelte Progettuali

<div class="grid-2" style="margin-top: 15px;">
  <div class="card">
    <h3>🎨 Design Non Convenzionale</h3>
    <p style="font-size: 0.9rem;">Ispirato a CRT retro, estetica Y2K, neon cyberpunk e pixel art, mantenendo coerenza cromatico-strutturale.</p>
    <h3>🛡️ Safety & Inclusion First</h3>
    <p style="font-size: 0.9rem;">Gestione nativa di <code>prefers-reduced-motion</code> per prevenire crisi fotosensibili da effetti glitch o flicker.</p>
  </div>

  <div class="card cyan">
    <h3>📦 Modularità Assoluta</h3>
    <p style="font-size: 0.9rem;">Nessun lock-in: utilizzabile come suite React, tramite CLI a singoli file o persino via <strong>CDN CSS Vanilla</strong>.</p>
    <h3>✨ Developer Experience (DX)</h3>
    <p style="font-size: 0.9rem;">Tipizzazione rigorosa in TypeScript, playground interattivo con copia immediata del codice e zero setup gravoso.</p>
  </div>
</div>

---

## 04. Architettura del Sistema

<div class="grid-2" style="margin-top: 10px;">
  <div class="card">
    <h3>Struttura Monorepo (PNPM)</h3>
    <ul style="font-size: 0.88rem; padding-left: 18px; margin: 8px 0;">
      <li><code>@moon-inferno/core</code> — Design tokens e utility di base</li>
      <li><code>@moon-inferno/react</code> — Componenti UI e hook logici</li>
      <li><code>@moon-inferno/themes</code> — Temi (Inferno, Terminal, Y2K)</li>
      <li><code>@moon-inferno/icons</code> — Set di icone vettoriali dedicate</li>
      <li><code>@moon-inferno/cli</code> — Installer component-by-component</li>
    </ul>
  </div>

  <div class="card cyan">
    <h3>Pipeline di Distribuzione</h3>
    <ul style="font-size: 0.88rem; padding-left: 18px; margin: 8px 0;">
      <li><strong>NPM Registry:</strong> Pacchetti indipendenti e bundle completo</li>
      <li><strong>jsDelivr / UNPKG:</strong> CDN CSS drop-in per HTML statico</li>
      <li><strong>Interactive Playground:</strong> Web app Vite per test live</li>
    </ul>
  </div>
</div>

---

## 05. Stack Tecnologico

<div class="grid-2" style="margin-top: 15px;">
  <div class="card">
    <div style="margin-bottom: 12px;">
      <span class="badge badge-orange">LINGUAGGI</span>
      <strong>TypeScript, Modern JavaScript (ESM), CSS3</strong>
    </div>
    <div style="margin-bottom: 12px;">
      <span class="badge badge-cyan">FRAMEWORK</span>
      <strong>React 18+, React DOM, Vite</strong>
    </div>
    <div>
      <span class="badge badge-green">STANDARDS</span>
      <strong>W3C WAI-ARIA 1.2, WCAG 2.1 AA</strong>
    </div>
  </div>

  <div class="card green">
    <div style="margin-bottom: 12px;">
      <span class="badge badge-orange">BUILD & TOOLING</span>
      <strong>PNPM Workspaces, Rollup / TSUP, Biome</strong>
    </div>
    <div style="margin-bottom: 12px;">
      <span class="badge badge-cyan">DISTRIBUZIONE</span>
      <strong>NPM, GitHub Actions CI/CD, GitHub Pages</strong>
    </div>
    <div>
      <span class="badge badge-green">VERSION CONTROL</span>
      <strong>Git, SemVer, Open Source Monorepo</strong>
    </div>
  </div>
</div>

---

## 06. Come Funziona: Il Flusso Dati

<div class="card" style="margin-top: 15px; padding: 22px;">
  <div style="display: flex; justify-content: space-between; align-items: center; text-align: center;">
    <div style="flex: 1; background: rgba(0, 229, 255, 0.1); border: 1px solid var(--accent-cyan); padding: 12px; border-radius: 8px;">
      <strong style="color: var(--accent-cyan);">1. CONFIGURAZIONE</strong><br>
      <span style="font-size: 0.8rem; color: #CBD5E1;"><code>&lt;MoonProvider&gt;</code> inietta token e preferenze utente</span>
    </div>
    <div style="color: var(--accent-orange); font-size: 1.5rem; padding: 0 10px;">➔</div>
    <div style="flex: 1; background: rgba(255, 77, 0, 0.1); border: 1px solid var(--accent-orange); padding: 12px; border-radius: 8px;">
      <strong style="color: var(--accent-orange);">2. PROCESSING ENGINE</strong><br>
      <span style="font-size: 0.8rem; color: #CBD5E1;">Risoluzione contrasti, WAI-ARIA matrix, motion safe-mode</span>
    </div>
    <div style="color: var(--accent-orange); font-size: 1.5rem; padding: 0 10px;">➔</div>
    <div style="flex: 1; background: rgba(0, 255, 102, 0.1); border: 1px solid var(--accent-green); padding: 12px; border-radius: 8px;">
      <strong style="color: var(--accent-green);">3. OUTPUT ADATTIVO</strong><br>
      <span style="font-size: 0.8rem; color: #CBD5E1;">UI Cyberpunk + Annunci Live per Screen Reader</span>
    </div>
  </div>
</div>

<div class="card cyan" style="margin-top: 16px;">
  <p style="margin: 0; font-size: 0.9rem;">
    💡 <strong>Theme Cascade:</strong> I componenti reagiscono dinamicamente al cambio tema tramite attributo HTML <code>data-theme</code> e variabili CSS native senza ricalcoli pesanti di React.
  </p>
</div>

---

## 07. Implementazioni: Signature Components

<div class="grid-2" style="margin-top: 10px;">
  <div class="card">
    <h3>💬 MoonTypewriterDialogue</h3>
    <p style="font-size: 0.85rem;">Testo con digitazione a reveal graduale tipico degli RPG, con canale invisibile immediato per non rallentare chi usa screen reader.</p>
    
    <h3>⚔️ MoonRPGGrid</h3>
    <p style="font-size: 0.85rem;">Griglia inventario 2D per item con navigazione completa tramite frecce direzionali e scambio oggetti con <code>Space/Enter</code>.</p>
  </div>

  <div class="card cyan">
    <h3>❤️ MoonHealthMeter</h3>
    <p style="font-size: 0.85rem;">Indicatori di salute, mana e scudo basati su tag semantici HTML5 <code>&lt;meter&gt;</code> e reporting percentuale real-time.</p>

    <h3>⚡ MoonSafeGlitch</h3>
    <p style="font-size: 0.85rem;">Distorsione RGB split personalizzabile che disattiva autonomamente le animazioni se il sistema richiede moto ridotto.</p>
  </div>
</div>

---

## 08. Focus: Accessibilità & WAI-ARIA

<div class="grid-3" style="margin-top: 15px;">
  <div class="card">
    <h3>🔊 Screen Reader Sync</h3>
    <p style="font-size: 0.85rem;">Uso di <code>aria-live="polite"</code> per stream di log e dialoghi, evitando di interrompere il focus dell'utente.</p>
  </div>

  <div class="card cyan">
    <h3>⌨️ Tastiera First</h3>
    <p style="font-size: 0.85rem;">Mappatura WAI-ARIA <code>role="grid"</code> per inventari 2D con focus ring neon ad alto contrasto visivo.</p>
  </div>

  <div class="card green">
    <h3>👁️ Contrasto & Vista</h3>
    <p style="font-size: 0.85rem;">Tutti i colori e i testi rispettano il rapporto di contrasto minimo <strong>4.5:1</strong> imposto dalle linee guida WCAG.</p>
  </div>
</div>

<div class="card" style="margin-top: 14px; text-align: center; border-color: var(--accent-cyan);">
  <strong style="color: var(--accent-cyan); font-size: 0.95rem;">L'accessibilità non è un'aggiunta finale, ma il vincolo architetturale di partenza.</strong>
</div>

---

## 09. Tooling: La CLI di Moon Inferno

<div class="grid-2" style="margin-top: 15px;">
  <div class="card">
    <h3>Installazione Flessibile (shadcn-style)</h3>
    <p style="font-size: 0.88rem;">Gli sviluppatori possono scegliere se installare l'intero pacchetto o copiare solo il codice che serve.</p>
    <pre><code># Aggiunge un singolo componente nel progetto
npx @moon-inferno/cli add MoonTypewriterDialogue

# Lista tutti i componenti disponibili
npx @moon-inferno/cli list</code></pre>
  </div>

  <div class="card cyan">
    <h3>Vantaggi dell'Approccio CLI</h3>
    <ul style="font-size: 0.88rem; padding-left: 18px; margin: 8px 0;">
      <li><strong>Zero Dipendenze Nascoste:</strong> Il codice sorgente risiede nella codebase dell'utente.</li>
      <li><strong>Personalizzazione Totale:</strong> Modificabile senza dover fare fork di librerie.</li>
      <li><strong>Bundle Size Ottimizzato:</strong> Zero codice inutilizzato (tree-shaking perfetto).</li>
    </ul>
  </div>
</div>

---

## 10. Live Playground & Test Visivo

<div class="grid-2" style="margin-top: 15px;">
  <div class="card">
    <h3>Documentazione Interattiva</h3>
    <ul style="font-size: 0.88rem; padding-left: 18px; margin: 8px 0;">
      <li><strong>Playground Web:</strong> Test live di ogni componente e switcher di temi in tempo reale.</li>
      <li><strong>One-Click Code Copy:</strong> Snippet pronti all'uso con feedback visivo istantaneo.</li>
      <li><strong>Visualizzatore HTML/CSS:</strong> Preview del markup generato.</li>
    </ul>
  </div>

  <div class="card green">
    <h3>Verifica & Qualità</h3>
    <ul style="font-size: 0.88rem; padding-left: 18px; margin: 8px 0;">
      <li>Test di contrasto su schermi a diversa risoluzione.</li>
      <li>Validazione WAI-ARIA su diversi screen reader (NVDA, VoiceOver).</li>
      <li>Verifica rendering con e senza JavaScript attivo (versione CDN).</li>
    </ul>
  </div>
</div>

---

## 11. Il Codice: Ergonomia & Semplicità

```tsx
import '@moon-inferno/react/styles.css';
import { MoonProvider, MoonTypewriterDialogue, MoonHealthMeter, MoonRPGGrid } from '@moon-inferno/react';

export default function GameHUD() {
  return (
    <MoonProvider defaultTheme="moon-inferno">
      {/* Dialogo RPG con digitazione graduale e lettura vocale accessibile */}
      <MoonTypewriterDialogue
        speaker="OPERATOR"
        text="Sistema operativo online. Conformità WCAG 2.1 AA attiva."
      />
      
      {/* Barra salute basata su semantic tag HTML5 */}
      <MoonHealthMeter type="health" value={88} max={100} label="HP PLAYER" />
    </MoonProvider>
  );
}
```

<div style="margin-top: 8px; font-size: 0.85rem; color: var(--text-secondary);">
  💡 <em>API dichiarativa, pulita e completamente integrata con il lifecycle di React e i CSS tokens.</em>
</div>

---

## 12. Stato del Progetto & Risultati

<div class="grid-3" style="margin-top: 15px;">
  <div class="card">
    <h3 style="color: var(--accent-orange);">📦 30+ Componenti</h3>
    <p style="font-size: 0.85rem;">Dalle form classiche ai moduli gaming, tabelle cyber, terminali e canvas grafici.</p>
  </div>

  <div class="card cyan">
    <h3 style="color: var(--accent-cyan);">🎨 4 Temi Integrati</h3>
    <p style="font-size: 0.85rem;">Moon Inferno (Cyber-Flame), Terminal Green CRT, Retro Y2K e Dark Neon.</p>
  </div>

  <div class="card green">
    <h3 style="color: var(--accent-green);">🚀 Monorepo Pubblico</h3>
    <p style="font-size: 0.85rem;">Pacchetti su NPM, documentazione tecnica completa e repository GitHub attivo.</p>
  </div>
</div>

<div class="card" style="margin-top: 16px; border-left: 4px solid var(--accent-green);">
  <p style="margin: 0; font-size: 0.9rem;">
    ✅ <strong>Traguardo Raggiunto:</strong> Progetto software completo e funzionante, pronto all'uso sia in progetti amatoriali che in applicazioni web di produzione.
  </p>
</div>

---

## 13. Roadmap & Sviluppi Futuri

<div class="grid-3" style="margin-top: 20px;">
  <div class="card">
    <h3 style="color: var(--accent-orange);">📍 NOW</h3>
    <ul style="font-size: 0.82rem; padding-left: 16px;">
      <li>Ottimizzazione tool CLI</li>
      <li>Template Web3 & RPG pronti</li>
      <li>Espansione documentazione</li>
    </ul>
  </div>

  <div class="card cyan">
    <h3 style="color: var(--accent-cyan);">🔮 NEXT</h3>
    <ul style="font-size: 0.82rem; padding-left: 16px;">
      <li>Hook headless indipendenti</li>
      <li>Theme Generator interattivo</li>
      <li>Supporto SSR / Next.js ottimizzato</li>
    </ul>
  </div>

  <div class="card green">
    <h3 style="color: var(--accent-green);">🚀 FUTURE</h3>
    <ul style="font-size: 0.82rem; padding-left: 16px;">
      <li>Layer effetti sonori WebAudio</li>
      <li>Adattatori Vue & Web Components</li>
      <li>Ecosistema di plugin community</li>
    </ul>
  </div>
</div>

---

<!-- _class: cover -->
<!-- _paginate: false -->

# 🌘 MOON INFERNO 🔥

### "Built to experiment. Designed to evolve."

<div style="margin: 25px 0;">
  <span class="badge badge-cyan">GITHUB.COM/BIAGIO-SCAGLIA/MOON-INFERNO</span>
</div>

<p style="font-size: 1.1rem; color: #E2E8F0;">
Grazie per l'attenzione! Spazio per domande e approfondimenti tecnici.
</p>

<div style="margin-top: 35px; font-size: 0.9rem; color: #94A3B8;">
  <strong>Biagio Scaglia</strong> &nbsp;│&nbsp; Progetto Open Source
</div>
