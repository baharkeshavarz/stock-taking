import i18next, {
  type DefaultNamespace,
  type i18n as i18nType,
  type TFunction,
} from "i18next";
import { initReactI18next } from "react-i18next";
import { defaultLocale } from "src/i18n/languages";
import enCommon from "./locale/en/common";
import enPages from "./locale/en/pages";
import faCommon from "./locale/fa/common";
import faPages from "./locale/fa/pages";

interface CustomI18n extends i18nType {
  t: TFunction<DefaultNamespace>;
}

const i18nInstance: CustomI18n = i18next.createInstance();

i18nInstance.use(initReactI18next).init({
  fallbackLng: defaultLocale,
  detection: {
    order: ["cookie", "localStorage", "htmlTag", "path", "subdomain"],
    caches: ["localStorage"],
  },
  resources: {
    "en-US": { common: enCommon, pages: enPages },
    "fa-IR": { common: faCommon, pages: faPages },
  },
  defaultNS: "pages",
});

export default i18nInstance;
