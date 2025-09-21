export const languageMapper = {
  "en-US": {
    direction: "ltr",
    fontFamily: "Inter, sans-serif",
    flag: "gb",
    name: "English",
  },
  "fa-IR": {
    direction: "rtl",
    fontFamily: "YekanBakh, Inter, sans-serif",
    flag: "ir",
    name: "فارسی",
  },
} as const;

export type LanguagesType = keyof typeof languageMapper;
export const defaultLocale = "fa-IR" as const;
