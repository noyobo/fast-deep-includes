import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    exclude: ['**/lib/**', '**/esm/**', '**/node_modules/**'],
    coverage: {
      exclude: ['**/node_modules/**', '**/lib/**', '**/esm/**', '**/__tests__/**', 'vitest.config.ts'],
    },
  },
});
