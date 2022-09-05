import { configureStore } from '@reduxjs/toolkit'
import dateCheckerReducer from '../features/dateChecker/dateCheckerSlice'

const store = configureStore({
  reducer: {
    dateChecker: dateCheckerReducer,
  },
})

export default store;