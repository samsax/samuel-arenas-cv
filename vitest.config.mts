import path from 'node:path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: { '@': path.resolve(import.meta.dirname, 'src') },
  },
  test: {
    // Data, lib and route tests run in Node. Component tests opt into jsdom with
    // `// @vitest-environment jsdom` at the top of the file.
    environment: 'node',
    include: ['src/**/*.test.{ts,tsx}'],
    restoreMocks: true,
    server: {
      deps: {
        // next-intl's ESM build imports `next/navigation` without an extension,
        // which Node cannot resolve; let Vite process it.
        inline: ['next-intl'],
      },
    },
  },
});
