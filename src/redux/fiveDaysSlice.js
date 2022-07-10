import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const fiveDaysSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    setFiveDays: (state, action) => {
      return action.payload
    },
  }
});

export const {setFiveDays} = fiveDaysSlice.actions;
export default fiveDaysSlice.reducer;
