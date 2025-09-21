import type {
  ICommonDictionary,
  IPagesDictionary,
} from "src/i18n/types/dictionary";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "common" | "pages";
    resources: {
      common: ICommonDictionary;
      pages: IPagesDictionary;
    };
  }
}
