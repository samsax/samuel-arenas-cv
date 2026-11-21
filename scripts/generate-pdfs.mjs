// Prints /en and /es from the built site to public/Samuel_Arenas_CV_{EN,ES}.pdf.
// Works on Windows, macOS and Linux using Node built-ins and an installed Chrome or Edge.
//
//   pnpm pdf
//
// Set CHROME_PATH to use a specific browser binary. Set PORT to change the local port.

import { spawn, spawnSync } from 'node:child_process';
import { existsSync, mkdtempSync, rmSync } from 'node:fs';
import { createRequire } from 'node:module';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const port = process.env.PORT ?? '3457';
const baseUrl = `http://localhost:${port}`;
const locales = ['en', 'es'];

function findBrowser() {
  if (process.env.CHROME_PATH) {
    if (!existsSync(process.env.CHROME_PATH)) {
      throw new Error(`CHROME_PATH does not exist: ${process.env.CHROME_PATH}`);
    }
    return process.env.CHROME_PATH;
  }

  const env = process.env;
  const candidates = {
    win32: [
      ...['PROGRAMFILES', 'PROGRAMFILES(X86)', 'LOCALAPPDATA'].flatMap((key) =>
        env[key]
          ? [
              path.join(env[key], 'Google', 'Chrome', 'Application', 'chrome.exe'),
              path.join(env[key], 'Microsoft', 'Edge', 'Application', 'msedge.exe'),
            ]
          : [],
      ),
    ],
    darwin: [
      '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
      '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
      '/Applications/Chromium.app/Contents/MacOS/Chromium',
    ],
    linux: [
      '/usr/bin/google-chrome',
      '/usr/bin/google-chrome-stable',
      '/usr/bin/chromium',
      '/usr/bin/chromium-browser',
      '/usr/bin/microsoft-edge',
    ],
  }[process.platform] ?? [];

  const found = candidates.find((candidate) => existsSync(candidate));
  if (!found) {
    throw new Error('Chrome or Edge not found. Install one, or set CHROME_PATH to its executable.');
  }
  return found;
}

async function waitForServer(url, attempts = 60) {
  for (let i = 0; i < attempts; i += 1) {
    try {
      const response = await fetch(url);
      if (response.ok) return;
    } catch {
      // Server is not listening yet.
    }
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
  throw new Error(`Server did not respond at ${url}`);
}

const nextBin = createRequire(import.meta.url).resolve('next/dist/bin/next');
const browser = findBrowser();
const profileDir = mkdtempSync(path.join(tmpdir(), 'cv-pdf-'));
let server;

try {
  console.log('Building the site...');
  const build = spawnSync(process.execPath, [nextBin, 'build', '--webpack'], {
    cwd: root,
    stdio: 'inherit',
  });
  if (build.status !== 0) throw new Error('next build failed');

  console.log(`Starting the site on ${baseUrl}...`);
  server = spawn(process.execPath, [nextBin, 'start', '-p', port], { cwd: root, stdio: 'ignore' });
  await waitForServer(`${baseUrl}/en`);

  for (const locale of locales) {
    const output = path.join(root, 'public', `Samuel_Arenas_CV_${locale.toUpperCase()}.pdf`);
    const result = spawnSync(
      browser,
      [
        '--headless=new',
        '--disable-gpu',
        '--no-pdf-header-footer',
        '--virtual-time-budget=5000',
        `--user-data-dir=${profileDir}`,
        `--print-to-pdf=${output}`,
        `${baseUrl}/${locale}`,
      ],
      { stdio: 'ignore' },
    );
    if (result.status !== 0 || !existsSync(output)) {
      throw new Error(`Failed to print ${locale.toUpperCase()} PDF with ${browser}`);
    }
    console.log(`Wrote ${path.relative(root, output)}`);
  }
} finally {
  server?.kill();
  rmSync(profileDir, { recursive: true, force: true });
}
