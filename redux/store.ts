import { configureStore } from "@reduxjs/toolkit";
import colorModeReducer from "./features/colorMode/colorSlice";

const store = configureStore({
  reducer: {
    color: colorModeReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
