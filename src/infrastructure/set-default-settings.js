import cache from "./cache";
import store from "./store";
import isDarkModePreferred from "../utils/is-dark-mode-preferred";

const setDefaultSettings = () => {
    if (!cache.getFromCache("theme", "local") && isDarkModePreferred()) {
        store.setTheme("dark");
    }
};

export default setDefaultSettings;
