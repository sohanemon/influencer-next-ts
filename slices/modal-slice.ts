import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const modalSlice = createSlice({
  name: "modal",
  initialState: false,
  reducers: {
    open: () => true,
    close: () => false,
  },
});

export const { close, open } = modalSlice.actions;

export default modalSlice.reducer;
