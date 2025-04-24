
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  // Use the GitHub username and repository name format
  base: '/', // Remove specific repository reference to make it work at root level
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
        // Disable all evaluation during minification to avoid CSP issues
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
