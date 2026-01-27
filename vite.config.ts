import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  build: {
    outDir: "dist",
    emptyOutDir: true,
    // evita que o Vite tente "empacotar app"
    rollupOptions: {
      input: "src/index.css",
      output: {
        // garante que o CSS de entrada fique previsível
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith(".css")) return "index.css";
          return "assets/[name][extname]";
        },
      },
    },
  },
  plugins: [
    viteStaticCopy({
      targets: [
        { src: "src/tokens/**/*", dest: "tokens" },
        { src: "src/themes/**/*", dest: "themes" }, // <- isso já leva assets junto
        { src: "src/index.css", dest: "." },
      ],
    }),
  ],
});
