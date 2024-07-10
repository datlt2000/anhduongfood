import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            src: "/src", // Replace with your actual src directory
          },
    },
    server: {
        open: true,
        port: 3000,
    },
})