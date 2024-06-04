import { configureStore } from '@reduxjs/toolkit'
import { baseAPI } from './baseApi'

export const makeStore = () => {
  return configureStore({
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(baseAPI.middleware),
    reducer: {
      [baseAPI.reducerPath]: baseAPI.reducer,
    },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
