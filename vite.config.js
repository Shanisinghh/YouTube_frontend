import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    cors: {
      origin: [
        "http://localhost:5173",
        "https://youtube-clone0114.netlify.app",
        "https://youtube-clone-five-lac.vercel.app",
      ],
      credentials: true,
    },
  },

  plugins: [react(), tailwindcss()],
})

