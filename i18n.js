import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import global_fr from './src/translations/fr/global.json';
import global_en from './src/translations/en/global.json';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'en',
  resources: {
    en: global_en,
    fr: global_fr,
  },
  react: {
    useSuspense: false,
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
