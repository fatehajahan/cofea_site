import { configureStore } from '@reduxjs/toolkit'
import favouriteSlice from './Slices/favouriteSlice'

export const store = configureStore({
  reducer: {
    favouriteDetails: favouriteSlice
  },
})