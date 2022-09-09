import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  // add global scss variables
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/_light_theme.scss";`,
      },
    },
  },
});
