
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  base: '/', // Removed specific repository reference to make it work at root level
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        // Completely disable evaluation during minification
        evaluate: false,
        drop_console: false,
        drop_debugger: false
      },
      mangle: {
        safari10: true,
      },
      format: {
        comments: false,
      },
    }
  }
}));
