import { createI18n } from "vue-i18n";
import en from "./translations/en";
import de from "./translations/de";
import hu from "./translations/hu";
import bg from "./translations/bg";
import langCodes from "./lang-codes";

export const defaultLocale = langCodes.EN;

const messages = {
    en,
    de,
    hu,
    bg,
};

const defaultDateTimeFormats = {
    short: {
        year: "numeric",
        month: "short",
        day: "numeric",
    },
    long: {
        year: "numeric",
        month: "short",
        day: "numeric",
        weekday: "short",
        hour: "numeric",
        minute: "numeric",
    },
};

const i18n = createI18n({
    locale: defaultLocale,
    fallbackLocale: "hu",
    messages,
    legacy: false,
    datetimeFormats: {
        bg: defaultDateTimeFormats,
        de: defaultDateTimeFormats,
        en: defaultDateTimeFormats,
        hu: defaultDateTimeFormats,
    },
});

export default i18n;
