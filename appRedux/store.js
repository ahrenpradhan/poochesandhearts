import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
import appSettingSlice from "./features/appSetting/appSettingSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    app_setting: appSettingSlice,
  },
});
