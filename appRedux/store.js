import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import authSlice from "./features/auth/authSlice";
import appSettingSlice from "./features/appSetting/appSettingSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    app_setting: appSettingSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger),
  devTools: true,
  // middleware: ()=>[logger],
});
