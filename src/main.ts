import { createApp } from "vue";
import "./style.scss";
import App from "./App.vue";
import { router } from "./routers/router"
import Card from "./components/Card.vue";
import Code from "./components/code.vue";
import ColorLink from "./components/ColorA/index.vue";
import Text from "./components/Text.vue";
import Sparkles from "./components/Sparkles/Sparkles.vue";
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faCubes, faLanguage, faBriefcase, faSmile, faGraduationCap, faBolt, faUser } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faCubes, faLanguage, faBriefcase, faSmile, faGraduationCap, faBolt, faUser)
createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .component("Text", Text)
  .component("ColorLink", ColorLink)
  .component("Code", Code)
  .component("Card", Card)
  .component("Sparkles", Sparkles)
  .mount("#app");
