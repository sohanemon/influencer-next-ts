import { createSlice } from "@reduxjs/toolkit";

export const socialSlice = createSlice({
  name: "social",
  reducers: {
    count: (state) => {
      return state + 1;
    },
  },
  initialState: 5,
});

export const { count } = socialSlice.actions;
export default socialSlice.reducer;
