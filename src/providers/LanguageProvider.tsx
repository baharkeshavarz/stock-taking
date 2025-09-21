import { useEffect, type FC } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import i18nInstance from "src/i18n/i18n";
import { type LanguagesType } from "src/i18n/languages";
import { useSelector } from "src/store";
import { faLocale } from "src/utils/yup";
import * as yup from "yup";
import { en } from "yup-locales";

const localeMapper: Record<LanguagesType, yup.LocaleObject> = {
  "en-US": en,
  "fa-IR": faLocale,
};

interface LanguageProviderProps {
  children: React.ReactNode;
}
const LanguageProvider: FC<LanguageProviderProps> = ({ children }) => {
  const config = useSelector((state) => state.config);

  useEffect(() => {
    i18nInstance.changeLanguage(config.i18n);
    yup.setLocale(localeMapper[config.i18n]);
  }, [config.i18n]);

  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t("home.title", { ns: "pages" })}</title>
      </Helmet>
      {children}
    </>
  );
};

export default LanguageProvider;
