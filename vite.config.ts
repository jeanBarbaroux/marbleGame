import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import restart from 'vite-plugin-restart'

// https://vite.dev/config/
export default defineConfig({
  publicDir: '../public',
  plugins: [
      restart({restart: ['../public/**']}),
      react()
  ],
    server: {
      host: true,
        open: !('SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env)
    },
    build: {
      outDir: 'dist/',
        emptyOutDir: true,
        sourcemap: true
    }
})
