import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: 'arvie',
};

export const appReducer = createSlice({
  name: 'appReducer',
  initialState,
  reducers: {
    changeName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const {
  changeName,
} = appReducer.actions;

export default appReducer.reducer;