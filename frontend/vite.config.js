import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port: 3031, // front-end
    proxy: {
      '/api': {
        target: 'http://localhost:3030', // back-end
        changeOrigin: true,
      }
    }
  }
});