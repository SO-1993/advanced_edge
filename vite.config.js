import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // base: '/advanced_edge/',
  plugins: [react()],
  resolve: {
    dedupe: ['react', 'react-dom'], // Force all packages to use the same React
  },
});

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   base: '/advanced_edge/',
//   plugins: [react()]
// })