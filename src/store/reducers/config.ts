import { createSlice } from "@reduxjs/toolkit";
import { defaultLocale, type LanguagesType } from "../../i18n/languages";

interface DefaultConfigProps {
  i18n: LanguagesType;
}

const initialState: DefaultConfigProps = {
  i18n: defaultLocale,
};

const config = createSlice({
  name: "config",
  initialState,
  reducers: {
    onChangeLocalization(state, action) {
      state.i18n = action.payload;
    },
  },
});

export const { onChangeLocalization } = config.actions;

export default config.reducer;
