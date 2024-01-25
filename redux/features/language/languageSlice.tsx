import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";

type LanguageState = {
  value: string;
};

const initialState: LanguageState = {
  value: "en",
};

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    changeLanguage: (state) => {
      state.value = state.value === "en" ? "ar" : "en";
    },
  },
});

export const { changeLanguage } = languageSlice.actions;
export const selectLanguage = (state: RootState) => state.language;
export default languageSlice.reducer;
