import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

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
  'playground/src/App.tsx',
  'playground/src/components/DocSidebarNav.tsx',
  'playground/src/components/tabs/TerminalTab.tsx',
  'playground/src/main.tsx',
  'packages/react/src/MoonHtmlVisualizer/MoonHtmlVisualizer.tsx',
];

function getNextVersion(currentVersion, bumpType) {
  if (/^\d+\.\d+\.\d+(-[a-zA-Z0-9.]+)?$/.test(bumpType)) {
    return bumpType;
  }

  const cleanVersion = currentVersion.replace(/^v/, '');
  const parts = cleanVersion.split('.').map((n) => parseInt(n, 10));
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

function run(cmd, desc) {
  console.log(`\n⏳ [${desc}] -> ${cmd}`);
  try {
    execSync(cmd, { cwd: rootDir, stdio: 'inherit' });
    console.log(`✅ [${desc}] completed.`);
  } catch (err) {
    console.error(`❌ [${desc}] failed: ${err.message}`);
    throw err;
  }
}

function main() {
  const args = process.argv.slice(2);
  const shouldPublish = !args.includes('--no-publish');
  const shouldPushGit = !args.includes('--no-git');
  const shouldDeployDocs = !args.includes('--no-deploy');
  const isDryRun = args.includes('--dry-run');
  const targetArg = args.find((arg) => !arg.startsWith('--')) || 'patch';

  const refPkgPath = path.join(rootDir, packageJsonPaths[0]);
  const refPkgData = JSON.parse(fs.readFileSync(refPkgPath, 'utf8'));
  const currentVersion = refPkgData.version || '0.1.0';

  const newVersion = getNextVersion(currentVersion, targetArg);

  console.log(`\n🔥 MOON-INFERNO SIMULTANEOUS RELEASE PIPELINE 🔥`);
  console.log(`================================================================`);
  console.log(`Current version: v${currentVersion}`);
  console.log(`New version:     v${newVersion}`);
  console.log(`Dry Run:         ${isDryRun ? 'YES (No changes will be pushed)' : 'NO'}`);
  console.log(`NPM Publish:     ${shouldPublish && !isDryRun ? 'ENABLED' : 'DISABLED'}`);
  console.log(`Git Push & Tag:  ${shouldPushGit && !isDryRun ? 'ENABLED' : 'DISABLED'}`);
  console.log(`GitHub Pages:    ${shouldDeployDocs && !isDryRun ? 'ENABLED' : 'DISABLED'}`);
  console.log(`================================================================\n`);

  // Step 1: Pre-flight Verification (Typecheck & Tests)
  console.log(`🧪 Running pre-flight verification checks...`);
  run('pnpm run typecheck', 'Typecheck All Packages');
  run('pnpm run test', 'Run Vitest Test Suite');

  // Step 2: Update package.json files
  console.log(`\n📦 Updating package.json manifests...`);
  for (const relPath of packageJsonPaths) {
    const fullPath = path.join(rootDir, relPath);
    if (fs.existsSync(fullPath)) {
      const content = fs.readFileSync(fullPath, 'utf8');
      const json = JSON.parse(content);
      json.version = newVersion;
      if (!isDryRun) {
        fs.writeFileSync(fullPath, JSON.stringify(json, null, 2) + '\n', 'utf8');
      }
      console.log(`  ✓ Updated ${relPath} -> v${newVersion}`);
    }
  }

  // Step 3: Update documentation & UI strings
  console.log(`\n📝 Updating documentation & badge version strings...`);
  const versionRegex = new RegExp(`v${currentVersion.replace(/\./g, '\\.')}`, 'g');
  const cdnRegex = new RegExp(`moon-inferno@${currentVersion.replace(/\./g, '\\.')}`, 'g');

  for (const relPath of docPaths) {
    const fullPath = path.join(rootDir, relPath);
    if (fs.existsSync(fullPath)) {
      let content = fs.readFileSync(fullPath, 'utf8');
      const updated = content
        .replace(versionRegex, `v${newVersion}`)
        .replace(cdnRegex, `moon-inferno@${newVersion}`);
      if (updated !== content) {
        if (!isDryRun) {
          fs.writeFileSync(fullPath, updated, 'utf8');
        }
        console.log(`  ✓ Updated version strings in ${relPath}`);
      }
    }
  }

  // Step 4: Build Monorepo & Playground
  run('pnpm run build', 'Build Monorepo Packages & Playground');

  if (isDryRun) {
    console.log(`\n✨ DRY-RUN COMPLETED! All checks, manifests, and builds succeeded without pushing.\n`);
    return;
  }

  // Step 5: Publish all packages to NPM registry
  if (shouldPublish) {
    console.log(`\n🚀 Publishing all monorepo packages to NPM registry...`);
    try {
      run('pnpm publish -r --access public --no-git-checks', 'Publish Packages to NPM');
      console.log(`\n✨ ALL PACKAGES SUCCESSFULLY PUBLISHED TO NPM AS v${newVersion}! ✨\n`);
    } catch (err) {
      console.error(`\n⚠️ NPM Publish encountered an issue (check credentials / npm login):`, err.message);
    }
  }

  // Step 6: Git Commit, Tag & Push to GitHub
  if (shouldPushGit) {
    console.log(`\n🐙 Committing, tagging, and pushing release v${newVersion} to Git...`);
    try {
      run('git add .', 'Stage Modified Files');
      run(`git commit -m "release: v${newVersion} [automated bump & sync]"`, 'Create Release Commit');
      run(`git tag -a v${newVersion} -m "Release v${newVersion}"`, 'Create Git Tag');
      run('git push --follow-tags origin main', 'Push Main Branch and Tags to GitHub');
      console.log(`\n✨ GIT COMMIT & TAG v${newVersion} PUSHED TO GITHUB REPOSITORY! ✨\n`);
    } catch (err) {
      console.error(`\n⚠️ Git commit/tag/push encountered an issue:`, err.message);
    }
  }

  // Step 7: Deploy live Playground to GitHub Pages
  if (shouldDeployDocs) {
    console.log(`\n🌐 Deploying live Playground to GitHub Pages...`);
    try {
      run('npx -y gh-pages -d playground/dist', 'Deploy to GitHub Pages');
      console.log(`\n✨ LIVE PLAYGROUND DEPLOYED TO GITHUB PAGES! ✨\n`);
    } catch (err) {
      console.error(`\n⚠️ GitHub Pages deployment encountered an issue:`, err.message);
    }
  }

  console.log(`\n🎉 RELEASE v${newVersion} COMPLETED SUCCESSFULLY! 🔥\n`);
}

main();
