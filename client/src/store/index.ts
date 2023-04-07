import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { baseApi } from '@/store/baseApi'
import snackbarReducer from '@/store/slice/snackbarSlice'

const reducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,

  snackbar: snackbarReducer,
})

const middleware = [baseApi.middleware]

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => [
    ...middleware,
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['snackbar/setSnackbarProps'],
        ignoredPaths: ['snackbar.snackbarProps.onClose'],
      },
    }),
  ],
})

export type RootState = ReturnType<typeof reducer>
