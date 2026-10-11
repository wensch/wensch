import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslations from './en.json';
import ptTranslations from './pt.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations,
      },
      pt: {
        translation: ptTranslations,
      },
    },
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false,
    },
  });

// i18n.language pode ser uma variante (ex.: "pt-BR"); resolvedLanguage é o idioma
// de fato carregado ("pt" ou "en").
export const getAppLanguage = (): 'pt' | 'en' =>
  i18n.resolvedLanguage === 'en' ? 'en' : 'pt';

const syncHtmlLang = () => {
  document.documentElement.lang = getAppLanguage();
};
if (i18n.isInitialized) syncHtmlLang();
i18n.on('initialized', syncHtmlLang);
i18n.on('languageChanged', syncHtmlLang);

export default i18n;