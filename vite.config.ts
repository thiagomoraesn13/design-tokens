import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: "src/index.css",
    },
  },
  plugins: [
    viteStaticCopy({
      targets: [
        { src: "src/tokens/**/*", dest: "tokens" },
        { src: "src/themes/**/*", dest: "themes" },
        { src: "src/index.css", dest: "." },
      ],
    }),
  ],
});
