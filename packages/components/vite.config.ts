import { resolve } from 'path';
import { defineConfig } from 'vite';
import DTS from 'vite-plugin-dts';
import VueJsx from '@vitejs/plugin-vue-jsx';

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

  plugins: [VueJsx(), DTS({ include: ['src/'] })],
});
