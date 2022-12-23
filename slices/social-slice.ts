import { createSlice } from "@reduxjs/toolkit";

const socialSlice = createSlice({
  name: "social",
  reducers: {
    toggleSocial: (state, { payload }) => {
      //@ts-ignore
      if (!state[payload]) return { ...state, [payload]: true };
      else return { ...state, [payload]: false };
    },
  },
  initialState: {
    facebook: false,
    twitter: false,
    linkedIn: false,
    whatsapp: false,
  },
});

export const { toggleSocial } = socialSlice.actions;
export default socialSlice.reducer;
