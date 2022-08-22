import { defaultLocale } from "./i18n";
import langCodes from "./lang-codes";

const getPreferredLang = () => {
    return navigator.languages && navigator.languages.length
        ? navigator.languages[0]
        : navigator.language;
};

const normalizeLocaleCode = (localCode) => localCode.substring(0, 2);

export const getPreferredLangFromAvailableSettings = () => {
    const availableLanguages = Object.keys(langCodes).map((key) => {
        return langCodes[key];
    });

    const langCode = normalizeLocaleCode(getPreferredLang());

    return availableLanguages.indexOf(langCode) ? langCode : defaultLocale;
};
