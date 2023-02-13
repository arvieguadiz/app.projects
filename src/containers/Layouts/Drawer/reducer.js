import { createSlice } from "@reduxjs/toolkit";
import drawerActions from "./actions";

export const initialState = {
  open: false,
  theme: 'dark',
};

export const drawerReducer = createSlice({
  name: 'drawerReducer',
  initialState,
  reducers: drawerActions,
});

export default drawerReducer.reducer;