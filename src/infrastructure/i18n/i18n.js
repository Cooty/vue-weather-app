import { createI18n } from "vue-i18n";
import en from "./translations/en";
import de from "./translations/de";
import hu from "./translations/hu";
import bg from "./translations/bg";
import langCodes from "./lang-codes";

// Vue.use(VueI18n);

export const defaultLocale = langCodes.EN;

const messages = {
    en,
    de,
    hu,
    bg,
};

const i18n = createI18n({
    locale: defaultLocale,
    messages,
});

export default i18n;
