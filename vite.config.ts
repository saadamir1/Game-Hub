import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, 
    host: true, // Allow external access
    strictPort: true, // Fail if port is in use
    open: true, // Auto-open in browser
  },
})
