import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../locales/en.json";
import sc from "../locales/sc.json";
import tc from "../locales/tc.json";
import gr from "../locales/gr.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    sc: { translation: sc },
    tc: { translation: tc },
    gr: { translation: gr },
  },
  lng: "en", // default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
