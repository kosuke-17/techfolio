import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { baseApi } from './baseApi'

const reducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
})

const middleware = [baseApi.middleware]

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => [
    ...middleware,
    ...getDefaultMiddleware(),
  ],
})
