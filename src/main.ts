import { createApp } from "vue";
import "./style.scss";
import App from "./App.vue";
import Code from "./components/code.vue";
import ColorLink from "./components/ColorA/index.vue";
import Text from "./components/Text.vue";

createApp(App)
  .component("Text", Text)
  .component("ColorLink", ColorLink)
  .component("Code", Code)
  .mount("#app");
