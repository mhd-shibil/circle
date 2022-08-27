import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: 'Hello World'
};

export const homepageSlice = createSlice({
  name: 'homePage',
  initialState,
  reducers: {
    updateValue: (state, { payload }) => {
      state.data = payload;
    }
  }
});

export const { updateValue } = homepageSlice.actions;

export default homepageSlice.reducer;
