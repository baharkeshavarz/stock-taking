import CssBaseline from "@mui/material/CssBaseline";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { type FC, type ReactNode, useMemo } from "react";

import { useSelector } from "src/store";
import {
  dataDisplayCustomizations,
  dataGridCustomizations,
  datePickersCustomizations,
  feedbackCustomizations,
  formInputCustomizations,
  inputsCustomizations,
  navigationCustomizations,
  sidebarCustomizations,
  surfacesCustomizations,
} from "./customizations";
import { colorSchemes, shadows, shape, typography } from "./themePrimitives";
import { languageMapper } from "src/i18n/languages";

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  const { children } = props;
  const i18n = useSelector((state) => state.config.i18n);

  const theme = useMemo(() => {
    const currentLanguage = languageMapper[i18n];
    return createTheme({
      direction: currentLanguage.direction,
      cssVariables: {
        colorSchemeSelector: "data-mui-color-scheme",
        cssVarPrefix: "template",
      },
      colorSchemes,
      typography: {
        ...typography,
        fontFamily: currentLanguage.fontFamily,
      },
      shadows,
      shape,
      components: {
        ...inputsCustomizations,
        ...dataDisplayCustomizations,
        ...feedbackCustomizations,
        ...navigationCustomizations,
        ...surfacesCustomizations,
        ...dataGridCustomizations,
        ...datePickersCustomizations,
        ...sidebarCustomizations,
        ...formInputCustomizations,
      },
    });
  }, [i18n]);

  return (
    <MuiThemeProvider theme={theme} disableTransitionOnChange>
      <CssBaseline enableColorScheme />
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
