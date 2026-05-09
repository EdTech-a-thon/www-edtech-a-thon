import { defineConfig } from "astro/config";
import markdoc from "@astrojs/markdoc";
import svelte from "@astrojs/svelte";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  redirects: {
    "/form":
      "https://docs.google.com/forms/d/e/1FAIpQLSe0axLrX6rW9X-Og9-UCs_NVkcq1M66opaFRXuF8yu3M3JRBw/viewform?usp=dialog",
  },

  integrations: [markdoc(), svelte()],

  vite: {
    plugins: [tailwindcss()],
  },
});
