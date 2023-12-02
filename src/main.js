import { createApp } from "vue";
import "./infrastructure/style/global.css";
import "./domain/theme/theming.css";
import App from "./application/App.vue";
import i18n from "./infrastructure/i18n/i18n";
import { loadSavedSettings } from "./infrastructure/save-settings";
import setDefaultSettings from "./infrastructure/set-default-settings";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-next/dist/bootstrap-vue-next.css";

setDefaultSettings();
loadSavedSettings();

const app = createApp(App);

app.use(i18n);

app.mount("#app");
