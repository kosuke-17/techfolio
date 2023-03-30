import type { AlertColor } from '@mui/material/Alert'
import type { SnackbarProps as MuiSnackbarProps } from '@mui/material/Snackbar'
import { createSlice } from '@reduxjs/toolkit'

import { RootState } from '..'

export type SnackbarProps = Pick<
  MuiSnackbarProps,
  'open' | 'message' | 'autoHideDuration' | 'action' | 'anchorOrigin'
> & {
  severity?: AlertColor
}

const initialState: {
  snackbarProps: SnackbarProps
} = {
  snackbarProps: {},
}

export const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    setSnackbarProps: (state, { payload }: { payload: SnackbarProps }) => {
      state.snackbarProps = payload
    },
  },
})

export const selectSnackbarProps = (state: RootState) =>
  state.snackbar.snackbarProps

export const { setSnackbarProps } = snackbarSlice.actions

export default snackbarSlice.reducer
