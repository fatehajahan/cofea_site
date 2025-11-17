import { configureStore } from '@reduxjs/toolkit'
import favouriteSlice from './Slices/favouriteSlice'
import themeSlice from './Slices/themeSlice'

export const store = configureStore({
  reducer: {
    favouriteDetails: favouriteSlice,
    themeDetails : themeSlice
  },
})