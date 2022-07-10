import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload
    },
    setSuccess: (state, action) => {
      state.success = action.payload
    },
    viewedCity: (state,action) => {
      state.city = action.payload
    },
    setLocalLottie: (state,action) => {
      state.lottie = action.payload
    }
  }
});

export const {setError, setSuccess, viewedCity, setLocalLottie} = appSlice.actions;
export default appSlice.reducer;
