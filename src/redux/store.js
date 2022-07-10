import { configureStore } from '@reduxjs/toolkit'
import favoritesReducer from './favoritesSlice'
import weatherSlicer from './weatherSlicer'
import fiveDaysSlice from './fiveDaysSlice'
import appSlice from './appSlice'

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    current: weatherSlicer,
    week: fiveDaysSlice,
    app: appSlice,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});
