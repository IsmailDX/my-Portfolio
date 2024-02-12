import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";

type emailState = {
  value: string;
};

const initialState: emailState = {
  value: "no",
};

export const emailSlice = createSlice({
  name: "showEmailScreen",
  initialState,
  reducers: {
    showEmailScreen: (state) => {
      state.value = state.value === "no" ? "yes" : "no";
    },
  },
});

export const { showEmailScreen } = emailSlice.actions;
export const selectEmail = (state: RootState) => state.email;
export default emailSlice.reducer;
