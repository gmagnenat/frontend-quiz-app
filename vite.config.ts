import { defineConfig } from "vite";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    coverage: {
      reporter: ["text", "json", "html"],
      all: true, // Ensures full coverage reporting for all files
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
      },
    },
    copyPublicDir: true,
  },
});
