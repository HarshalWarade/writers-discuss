import { configureStore } from "@reduxjs/toolkit";
import { writersApi } from "./generatedApi";

export const store = configureStore({
  reducer: {
    [writersApi.reducerPath]: writersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(writersApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
