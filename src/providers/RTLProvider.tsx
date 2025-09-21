import createCache, { type StylisPlugin } from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { type ReactNode, useEffect } from "react";
import rtlPlugin from "stylis-plugin-rtl";
import { languageMapper } from "src/i18n/languages";
import { useSelector } from "src/store";

interface Props {
  children: ReactNode;
}

const RTLProvider = ({ children }: Props) => {
  const i18n = useSelector((state) => state.config.i18n);
  const dir = languageMapper[i18n].direction;

  useEffect(() => {
    document.body.dir = dir;
  }, [i18n]);

  const cacheRtl = createCache({
    key: dir === "rtl" ? "rtl" : "css",
    prepend: true,
    stylisPlugins: dir === "rtl" ? [rtlPlugin as StylisPlugin] : [],
  });

  return <CacheProvider value={cacheRtl}>{children}</CacheProvider>;
};

export default RTLProvider;
