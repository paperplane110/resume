import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(
      {
        template: {
          compilerOptions: {
            isCustomElement: (tag) => {
              return tag.startsWith('wrapper') // (return true)
            }
          }
        }
      }
    )],

  // add global scss variables
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/_light_theme.scss";`,
      },
    },
  },
});
