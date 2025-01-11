import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

// https://vitest.dev/guide/#configuring-vitest
// Using mergeConfig method to merge Vite config with Vitest config,
// to avoid a build error configuring test in the Vite config,
// and to prevent the Vitest config from overriding the Vite config.
export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['./src/tests/setupTests.ts'],
    },
  })
);
