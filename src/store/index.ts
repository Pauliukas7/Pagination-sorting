import { configureStore } from "@reduxjs/toolkit";
import { tableSlice } from "./table-slice";

export const store = configureStore({
  reducer: { table: tableSlice.reducer },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
