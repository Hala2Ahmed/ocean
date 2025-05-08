import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import arTranslates from "./ar_local.json";
import enTranslates from "./en_local.json";
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: { translation: enTranslates },
  ar: { translation: arTranslates }
};

const getInitialLanguage = () => {
  const savedLang = localStorage.getItem('i18nextLng');
  if (savedLang) return savedLang;

  const browserLang = navigator.language.split('-')[0];
  if (['ar', 'en'].includes(browserLang)) return browserLang;

  return 'en';
};

const initialLang = getInitialLanguage();
document.documentElement.lang = initialLang;
document.documentElement.dir = initialLang === 'ar' ? 'rtl' : 'ltr';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: initialLang,
    fallbackLng: 'en',
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
      checkForSimilarInWhitelist: true
    },
    interpolation: {
      escapeValue: false
    }
  });

i18n.on('languageChanged', (lng) => {
  const dir = lng === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.dir = dir;
  document.documentElement.lang = lng;
});

export default i18n;