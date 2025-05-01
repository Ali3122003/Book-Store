import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': { // Change this to match your API route
        target: 'http://backend:5000', // Backend URL
        changeOrigin: true,
        secure: false, // Set to true if your backend uses HTTPS
        rewrite: (path) => path.replace(/^\/api/, '') // Optional: Adjust API path if needed
      }
    }
  }
});
