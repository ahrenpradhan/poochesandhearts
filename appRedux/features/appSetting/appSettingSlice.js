import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: {},
};

export const appSettingSlice = createSlice({
  name: "app_setting",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = appSettingSlice.actions;

export default appSettingSlice.reducer;
