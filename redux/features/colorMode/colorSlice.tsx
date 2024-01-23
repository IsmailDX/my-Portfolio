import { createSlice, PayloadAction } from "@reduxjs/toolkit/react";
import { RootState } from "../../store";

type ColorState = {
  value: string;
  isDisabled: boolean;
  change: boolean;
  disappear: boolean;
};

const initialState: ColorState = {
  value: "dark",
  isDisabled: false,
  change: false,
  disappear: false,
};

export const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    changeColor: (state) => {
      state.value = state.value === "dark" ? "light" : "dark";
    },
    setIsDisabled: (state, action: PayloadAction<boolean>) => {
      state.isDisabled = action.payload;
    },
    setChange: (state, action: PayloadAction<boolean>) => {
      state.change = action.payload;
    },
    setDisappear: (state, action: PayloadAction<boolean>) => {
      state.disappear = action.payload;
    },
  },
});

export const { changeColor, setIsDisabled, setChange, setDisappear } =
  colorSlice.actions;

export const selectColor = (state: RootState) => state.color;

export default colorSlice.reducer;
