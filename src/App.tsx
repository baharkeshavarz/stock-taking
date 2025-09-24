import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router";
import { PersistGate } from "redux-persist/integration/react";
import LanguageProvider from "src/providers/LanguageProvider";
import RTLProvider from "src/providers/RTLProvider";
import TanstackProvider from "src/providers/TanstackProvider";
import router from "./router";
import ThemeProvider from "./theme/ThemeProvider";
import i18nInstance from "./i18n/i18n";
import { persister, store } from "./store";
import { Toaster } from "react-hot-toast";
import ConfirmProvider from "./providers/ConfirmProvider";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <I18nextProvider i18n={i18nInstance}>
          <TanstackProvider>
            <LanguageProvider>
              <ThemeProvider>
                <CssBaseline />
                <ConfirmProvider>
                  <RTLProvider>
                    <RouterProvider router={router} />
                    <Toaster />
                  </RTLProvider>
                </ConfirmProvider>
              </ThemeProvider>
            </LanguageProvider>
          </TanstackProvider>
        </I18nextProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
