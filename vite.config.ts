import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  base: "/MyPersonalSite/",
  build: {
    outDir: "dist",
    emptyOutDir: true,
    target: "es2015", // Better browser compatibility including older iOS Safari
  },
});
