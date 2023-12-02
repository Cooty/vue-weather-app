import cache from "./cache";
import store from "./store";
import isDarkModePreferred from "../utils/is-dark-mode-preferred";
import { getPreferredLangFromAvailableSettings } from "./i18n/get-preferred-lang";
import i18n, { defaultLocale } from "./i18n/i18n";

const setDefaultSettings = () => {
    if (!cache.getFromCache("theme", "local") && isDarkModePreferred()) {
        store.theme = "dark";
    }

    const preferredLang = getPreferredLangFromAvailableSettings();
    if (preferredLang !== defaultLocale) {
        i18n.global.locale.value = preferredLang;
    }
};

export default setDefaultSettings;
