import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Local/dev: "/". GitHub Pages: set VITE_BASE=/rag-quiz/ (see workflow).
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE || "/",
});
