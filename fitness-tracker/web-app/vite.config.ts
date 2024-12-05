import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@packages': path.resolve(__dirname, '../packages'), // Link to external assets folder
      // Link to external components folder
    },

  },
});
