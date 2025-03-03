import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/JesseSheehanMakesGames/", // Ensure this matches your repo name
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});