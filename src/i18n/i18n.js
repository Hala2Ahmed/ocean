import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import arTranslates from "./ar_local.json";
import enTranslates from "./en_local.json";
import LanguageDetector from 'i18next-browser-languagedetector';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: enTranslates
  },
  ar: {
    translation: arTranslates
  }
};

const savedLang = localStorage.getItem('i18nextLng') || 'en';
const initialDir = savedLang === 'ar' ? 'rtl' : 'ltr';

document.documentElement.dir = initialDir;
document.documentElement.lang = savedLang;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    detection: {
      order: ['localStorage', 'cookie', 'navigator', 'htmlTag'],
      caches: ['localStorage', 'cookie'],
      excludeCachesFor: ['cimode']
    },
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    }
  });

  i18n.on('languageChanged', (lng) => {
    const dir = lng === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = lng;
  });
  

  export default i18n;