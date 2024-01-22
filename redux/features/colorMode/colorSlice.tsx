import { createSlice } from "@reduxjs/toolkit/react";
import { RootState } from "../../store";

type ColorState = {
  value: string;
};

const initialState: ColorState = {
  value: "dark",
};

export const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    changeColor: (state) => {
      state.value = state.value === "dark" ? "light" : "dark";
    },
  },
});

export const { changeColor } = colorSlice.actions;

export const selectCount = (state: RootState) => state.color.value;

export default colorSlice.reducer;
