import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const portToUse = parseInt(env.WEBSITES_PORT || env.PORT || '5173', 10)

  return {
    plugins: [react()],
    base: './',
    server: {
      host: '0.0.0.0',
      port: portToUse,
    },
    preview: {
      port: portToUse,
      host: '0.0.0.0',
      allowedHosts: ['*'], // ✅ Allow all domains (Azure, localhost, etc.)
    },
    build: {
      target: 'es2022',
      assetsDir: 'assets', // ensures single asset folder
    },
  }
})
