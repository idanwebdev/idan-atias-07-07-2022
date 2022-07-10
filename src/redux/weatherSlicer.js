import { createSlice } from '@reduxjs/toolkit';

const initialState = {}

export const weatherSlicer = createSlice({
  name: 'weather-slicer',
  initialState,
  reducers: {
    setCurrent: (state, action) => {
      return action.payload[0]
    },
  }
})

export const {setCurrent} = weatherSlicer.actions;
export default weatherSlicer.reducer;
