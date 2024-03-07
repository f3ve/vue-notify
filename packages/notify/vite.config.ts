import { resolve } from 'path';
import { defineConfig } from 'vite';
import DTS from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
    },
    rollupOptions: {
      external: ['vue', 'pinia'],
    },
  },
  resolve: {
    alias: {
      '@': resolve('src/'),
    },
  },
  plugins: [DTS({ include: ['src/'] })],
});
