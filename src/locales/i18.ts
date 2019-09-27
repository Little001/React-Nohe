import i18n from "i18next";
import cz from "./cz.json";
import en from "./en.json";
import { initReactI18next } from "react-i18next";

const resources = {
    en: en,
    cz: cz
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",
        keySeparator: false
    });

export default i18n;