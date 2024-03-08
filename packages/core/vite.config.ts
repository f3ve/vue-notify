import { resolve } from 'path';
import { defineConfig } from 'vite';
import DTS from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      fileName: 'vue-notify',
      formats: ['es', 'cjs'],
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

  plugins: [DTS({ rollupTypes: true })],
});
