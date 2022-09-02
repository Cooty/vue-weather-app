import { createApp } from "vue";
import BootstrapVue3 from "bootstrap-vue-3";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";
import "./infrastructure/style/global.css";
import "./domain/theme/theming.css";
import App from "./application/App.vue";
import i18n from "./infrastructure/i18n/i18n";
// import bubble from "./utils/plugin/bubble";
// import { VBTooltip } from "bootstrap-vue";
import { loadSavedSettings } from "./infrastructure/save-settings";
import setDefaultSettings from "./infrastructure/set-default-settings";

setDefaultSettings();
loadSavedSettings();

const app = createApp(App);

// app.use(bubble);
app.use(i18n);
app.use(BootstrapVue3);
// app.directive("b-tooltip", VBTooltip);

app.mount("#app");
