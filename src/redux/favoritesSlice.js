import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    add: (state, action) => {
      state.push(action.payload)
    },
    remove: (state, action) => {
      state.splice(action.payload, 1)
    }
  }
});

export const {add, remove} = favoritesSlice.actions;
export default favoritesSlice.reducer;
