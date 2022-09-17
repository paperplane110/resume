import { createApp } from "vue";
import "./style.scss";
import App from "./App.vue";
import Code from "./components/code.vue";
import ColorLink from "./components/ColorA/index.vue";
import Text from "./components/Text.vue";
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faLanguage, faBriefcase, faSmile, faGraduationCap, faBolt } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faLanguage, faBriefcase, faSmile, faGraduationCap, faBolt)
createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .component("Text", Text)
  .component("ColorLink", ColorLink)
  .component("Code", Code)
  .mount("#app");
