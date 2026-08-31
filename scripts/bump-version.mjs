import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const packageJsonPaths = [
  'packages/core/package.json',
  'packages/themes/package.json',
  'packages/icons/package.json',
  'packages/react/package.json',
  'packages/moon-inferno/package.json',
  'packages/cli/package.json',
];

const docPaths = [
  'docs/MANUAL.md',
  'README.md',
];

function getNextVersion(currentVersion, bumpType) {
  if (/^\d+\.\d+\.\d+(-[a-zA-Z0-9.]+)?$/.test(bumpType)) {
    return bumpType;
  }

  const parts = currentVersion.split('.').map((n) => parseInt(n, 10));
  let [major = 0, minor = 0, patch = 0] = parts;

  switch (bumpType) {
    case 'major':
      major += 1;
      minor = 0;
      patch = 0;
      break;
    case 'minor':
      minor += 1;
      patch = 0;
      break;
    case 'patch':
    default:
      patch += 1;
      break;
  }

  return `${major}.${minor}.${patch}`;
}

function main() {
  const targetArg = process.argv[2] || 'patch';

  const refPkgPath = path.join(rootDir, packageJsonPaths[0]);
  const refPkgData = JSON.parse(fs.readFileSync(refPkgPath, 'utf8'));
  const currentVersion = refPkgData.version || '0.1.0';

  const newVersion = getNextVersion(currentVersion, targetArg);

  console.log(`\n🌙 Moon-Inferno Automated Version Bumper`);
  console.log(`========================================`);
  console.log(`Current version: v${currentVersion}`);
  console.log(`New version:     v${newVersion}\n`);

  // 1. Update package.json files
  for (const relPath of packageJsonPaths) {
    const fullPath = path.join(rootDir, relPath);
    if (fs.existsSync(fullPath)) {
      const content = fs.readFileSync(fullPath, 'utf8');
      const json = JSON.parse(content);
      json.version = newVersion;
      fs.writeFileSync(fullPath, JSON.stringify(json, null, 2) + '\n', 'utf8');
      console.log(`  ✓ Updated ${relPath} -> v${newVersion}`);
    }
  }

  // 2. Update doc files
  const versionRegex = new RegExp(`v${currentVersion.replace(/\./g, '\\.')}`, 'g');
  for (const relPath of docPaths) {
    const fullPath = path.join(rootDir, relPath);
    if (fs.existsSync(fullPath)) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes(`v${currentVersion}`)) {
        content = content.replace(versionRegex, `v${newVersion}`);
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`  ✓ Updated version strings in ${relPath}`);
      }
    }
  }

  console.log(`\n🎉 Successfully bumped all packages to v${newVersion}!\n`);
}

main();
