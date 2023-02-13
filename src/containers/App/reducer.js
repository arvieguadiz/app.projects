import { createSlice } from "@reduxjs/toolkit";
import appActions from "./actions";

export const initialState = {
  // 
};

export const appReducer = createSlice({
  name: 'appReducer',
  initialState,
  reducers: appActions,
});

// export const {
//   changeTheme,
// } = appReducer.actions;

export default appReducer.reducer;