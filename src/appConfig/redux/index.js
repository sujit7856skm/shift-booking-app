import { configureStore } from "@reduxjs/toolkit";
import { api } from "../../sevices/api";

export const store = configureStore({
  reducer: {
    [api?.reducerPath]: api?.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()?.concat(api?.middleware),
});
