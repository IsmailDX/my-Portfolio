import { configureStore } from "@reduxjs/toolkit";
import colorModeReducer from "./features/colorMode/colorSlice";
import languageReducer from "./features/language/languageSlice";

const store = configureStore({
  reducer: {
    color: colorModeReducer,
    language: languageReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
