import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

const {resolve} = require('path');

export default defineConfig({
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  },
  publicDir: 'assets',
  resolve: {
    preserveSymlinks: true,
  },
  build: {
    outDir: 'dist-umd',
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'photalius.umd.tsx'),
      name: 'Photalius',
      formats: ['umd'],
      fileName: () => 'photalius.umd.js',
    },
  },
  plugins: [tsconfigPaths(), react()],
});
