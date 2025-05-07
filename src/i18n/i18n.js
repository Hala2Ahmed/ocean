import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import arTranslates from "./ar_local.json";
import enTranslates from "./en_local.json";
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: { translation: enTranslates },
  ar: { translation: arTranslates }
};

const DEFAULT_LANG = 'en'; 
const savedLang = localStorage.getItem('i18nextLng') || DEFAULT_LANG;
const initialDir = savedLang === 'ar' ? 'rtl' : 'ltr';

document.documentElement.dir = initialDir;
document.documentElement.lang = savedLang;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: DEFAULT_LANG,
    lng: DEFAULT_LANG, 
    detection: {
      order: ['localStorage', 'cookie', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
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