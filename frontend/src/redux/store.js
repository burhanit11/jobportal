import { configureStore } from "@reduxjs/toolkit";
import userSlices from "./slices/userSlices/userSlices";

export const store = configureStore({
  reducer: {
    user: userSlices,
  },
});
