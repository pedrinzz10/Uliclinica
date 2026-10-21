import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Caminhos relativos: o site funciona na raiz do domínio ou em subpasta.
  base: './',
  plugins: [react()],
})
