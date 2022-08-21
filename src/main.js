import Vue from "vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./infrastructure/style/global.css";
import "./domain/theme/theming.css";
import App from "./application/App.vue";
import i18n from "./infrastructure/i18n/i18n";
import bubble from "./utils/plugin/bubble";
import { VBTooltip } from "bootstrap-vue";
import { loadSavedSettings } from "./infrastructure/save-settings";
import setDefaultSettings from "./infrastructure/set-default-settings";

Vue.use(bubble);
Vue.directive("b-tooltip", VBTooltip);

setDefaultSettings();
loadSavedSettings();

new Vue({
    i18n,
    render: (h) => h(App),
}).$mount("#app");
