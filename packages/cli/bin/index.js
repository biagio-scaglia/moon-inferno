#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const command = args[0];
const component = args[1];

const pkgJson = require('../package.json');
const version = pkgJson.version || '0.4.8';

console.log(`\n🔥 MOON-INFERNO ACCESSIBLE UI CLI v${version} 🔥\n`);

const AVAILABLE_COMPONENTS = [
  'Accordion',
  'Avatar',
  'Badge',
  'Breadcrumbs',
  'Button',
  'CRTEffect',
  'Card',
  'Checkbox',
  'CodeBlock',
  'ColorPicker',
  'CommandPalette',
  'Container',
  'CyberCanvas',
  'DatePicker',
  'Dialog',
  'Dropdown',
  'Gallery',
  'GlitchText',
  'Grid',
  'HoloCard',
  'Input',
  'Loader',
  'Marquee',
  'MatrixRain',
  'MoonConsoleLogger',
  'MoonHealthMeter',
  'MoonHtmlVisualizer',
  'MoonProvider',
  'MoonRPGGrid',
  'MoonSafeGlitch',
  'MoonTypewriterDialogue',
  'Navbar',
  'NeonText',
  'PieChart',
  'PixelContainer',
  'PixelText',
  'Progress',
  'Radio',
  'SearchBar',
  'Select',
  'SheetEditor',
  'SignalLight',
  'Slider',
  'Stack',
  'Switch',
  'Table',
  'Tabs',
  'Terminal',
  'Toast',
  'Tooltip',
  'TypingText',
];

if (!command || command === 'help' || command === '--help' || command === '-h') {
  console.log('Usage:');
  console.log('  npx @moon-inferno/cli add <component-name> [--dir <target-directory>]');
  console.log('  npx @moon-inferno/cli list\n');
  console.log('Available Signature Components:');
  console.log('  - MoonTypewriterDialogue (RPG Dialogue Box + ARIA live)');
  console.log('  - MoonRPGGrid (Pixel Art Inventory + Keyboard Arrows)');
  console.log('  - MoonHealthMeter (Semantic Meter/Progress Bars)');
  console.log('  - MoonSafeGlitch (Photosensitive-Safe Glitch)');
  console.log('  - MoonConsoleLogger (CRT Stream Terminal Logger)');
  console.log('  - CyberCanvas (HTML5 Drawing + Grid + Export PNG)');
  console.log('  - SheetEditor (CRT Notepad + Markdown Preview)');
  console.log('  - Table (Cyberpunk WAI-ARIA Data Table)');
  console.log('\nRun "npx @moon-inferno/cli list" to see all 50+ components.\n');
  process.exit(0);
}

if (command === 'list') {
  console.log('Available Accessible Primitives in @moon-inferno/react:\n');
  AVAILABLE_COMPONENTS.forEach((comp) => {
    console.log(`  - ${comp}`);
  });
  console.log(`\nTotal: ${AVAILABLE_COMPONENTS.length} accessible primitives.\n`);
  process.exit(0);
}

if (command === 'add') {
  if (!component) {
    console.error('❌ Error: Please specify a component name.');
    console.log('Example: npx @moon-inferno/cli add MoonTypewriterDialogue\n');
    process.exit(1);
  }

  const matchedName = AVAILABLE_COMPONENTS.find(
    (c) => c.toLowerCase() === component.toLowerCase()
  );

  if (!matchedName) {
    console.error(`❌ Error: Component "${component}" not found.`);
    console.log('Run "npx @moon-inferno/cli list" to see all available components.\n');
    process.exit(1);
  }

  // Determine source directories
  const possibleSourceDirs = [
    path.resolve(__dirname, '../../react/src', matchedName),
    path.resolve(__dirname, '../node_modules/@moon-inferno/react/src', matchedName),
    path.resolve(process.cwd(), 'node_modules/@moon-inferno/react/src', matchedName),
    path.resolve(__dirname, '../../../packages/react/src', matchedName),
  ];

  let srcDir = possibleSourceDirs.find((dir) => fs.existsSync(dir));

  // Determine target directory
  let targetDirBase = './src/components/moon-inferno';
  const dirFlagIndex = args.indexOf('--dir');
  if (dirFlagIndex !== -1 && args[dirFlagIndex + 1]) {
    targetDirBase = args[dirFlagIndex + 1];
  } else if (!fs.existsSync(path.resolve(process.cwd(), 'src'))) {
    targetDirBase = './components/moon-inferno';
  }

  const destDir = path.resolve(process.cwd(), targetDirBase, matchedName);

  if (srcDir && fs.existsSync(srcDir)) {
    try {
      fs.mkdirSync(destDir, { recursive: true });
      const files = fs.readdirSync(srcDir);
      let copiedCount = 0;

      for (const file of files) {
        if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.css')) {
          const srcFile = path.join(srcDir, file);
          const destFile = path.join(destDir, file);
          fs.copyFileSync(srcFile, destFile);
          copiedCount++;
        }
      }

      console.log(`✅ Successfully added [${matchedName}] to: ${path.relative(process.cwd(), destDir)} (${copiedCount} files copied)`);
      console.log(`\n💡 Ensure required peer packages are installed:`);
      console.log(`   npm install @moon-inferno/core @moon-inferno/icons @moon-inferno/themes\n`);
      process.exit(0);
    } catch (err) {
      console.error(`❌ Failed to copy component files:`, err.message);
      process.exit(1);
    }
  } else {
    console.error(`❌ Could not locate source files for [${matchedName}]. Please install @moon-inferno/react package.`);
    process.exit(1);
  }
}

console.log(`Unknown command: "${command}". Use "npx @moon-inferno/cli help" for available commands.`);
process.exit(1);
