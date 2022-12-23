import modalReducer from "./slices/modal-slice";
import socialReducer from "./slices/social-slice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    social: socialReducer,
    modal: modalReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
