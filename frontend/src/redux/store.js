import { configureStore } from "@reduxjs/toolkit";
import userSlices from "./slices/userSlices/userSlices";
import jobslices from "./slices/jobslices";

export const store = configureStore({
  reducer: {
    user: userSlices,
    job: jobslices,
  },
});
