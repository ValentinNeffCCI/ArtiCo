import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Cible du proxy de dev : le backend. En conteneur on passe par le réseau
// Docker (http://backend:3000) ; en local on retombe sur localhost:3000.
const proxyTarget = process.env.VITE_PROXY_TARGET || 'http://localhost:3000'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    // Le watch natif (inotify) ne traverse pas toujours les volumes Docker :
    // le polling garantit le hot reload dans le conteneur.
    watch: {
      usePolling: true,
    },
    // Quand le port hôte diffère du port conteneur (ex: 5000 -> 5173),
    // le client HMR doit se reconnecter sur le port public.
    hmr: {
      clientPort: Number(process.env.FRONTEND_PORT) || 5173,
    },
    // Reproduit le proxy nginx de prod : /api et /uploads -> backend.
    proxy: {
      '/api': proxyTarget,
      '/uploads': proxyTarget,
    },
  },
})
