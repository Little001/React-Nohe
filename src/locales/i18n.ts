import * as i18next from "i18next";
import LanguageDetector  from "i18next-browser-languagedetector";
import en from "./en.json";
import uk from "./uk.json";

// TODO: load application localization from backend with i18next-xhr-backend
// TODO: async i18next localization


i18next
    .use(LanguageDetector)
    .init({
        resources: {
            en: en,
            uk: uk
        }
    });

export const translate = (text: string) => {
    return i18next.t(text);
}
