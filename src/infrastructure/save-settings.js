import cache from "./cache";
import store from "./store";
import i18n from "./i18n/i18n";

export const loadSavedSettings = () => {
    const savedUnit = cache.getFromCache("unit", "local");
    if (savedUnit) {
        store.units = savedUnit;
    }

    const savedThemeSetting = cache.getFromCache("theme", "local");
    if (savedThemeSetting) {
        store.theme = savedThemeSetting;
    }

    const savedLang = cache.getFromCache("lang", "local");
    if (savedLang) {
        i18n.global.locale.value = savedLang;
    }
};

export const persistSetting = (key, value) => {
    cache.saveToCache(key, value, "local");
};
