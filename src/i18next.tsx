import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';


i18next.use(initReactI18next).init({
debug:true,
fallbackLng:'mr',
interpolation:{
  escapeValue:false,
},
resources:{},
})

// Type the translation files to be more specific
// type Translation = {
//   [key: string]: string;
// };

// i18n
//   .use(LanguageDetector) // Detect user's language
//   .use(initReactI18next)
//   .init({
//     resources: {
//       en: { translation: en } as Translation, // Type casting for translation
//       hi: { translation: hi } as Translation, // Type casting for translation
//     },
//     fallbackLng: 'en',
//     interpolation: {
//       escapeValue: false,
//     },
//   });

export default i18next;
