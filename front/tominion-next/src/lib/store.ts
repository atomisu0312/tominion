import { configureStore } from '@reduxjs/toolkit'
import cardSearchReducer from '@/lib/features/home/card/search/seachSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {cardSearch: cardSearchReducer}
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']