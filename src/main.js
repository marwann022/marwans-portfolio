import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "@fontsource/urbanist/latin-400.css";
import "@fontsource/urbanist/latin-500.css";
import "@fontsource/urbanist/latin-600.css";
import "@fontsource/urbanist/latin-700.css";
import "@fontsource/urbanist/latin-800.css";
import "@fontsource/urbanist/latin-900.css";
import "@fontsource/bodoni-moda/latin-400-italic.css";
import "@fontsource/bodoni-moda/latin-700-italic.css";

import "./styles/index.css";
import "./styles/portfolio.css";

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
  faCircle,
  faCircleInfo,
  faCheck
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
  faCircleInfo,
  faCheck,
  faLinkedin,
  faGithub
);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);
app.mount("#app");
