import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./styles/index.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faArrowDown,
  faArrowUpRightFromSquare,
  faArrowLeft,
  faArrowRight,
  faPlus,
  faXmark,
  faEnvelope,
  faPhone,
  faCircle
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

library.add(
  faArrowDown,
  faArrowUpRightFromSquare,
  faArrowLeft,
  faArrowRight,
  faPlus,
  faXmark,
  faEnvelope,
  faPhone,
  faCircle,
  faLinkedin,
  faGithub
);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);
app.mount("#app");
