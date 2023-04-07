import { useDispatch, useSelector } from 'react-redux'

import {
  selectSnackbarProps,
  setSnackbarProps as dispatchSnackbarProps,
  SnackbarProps,
} from '@/store/slice/snackbarSlice'

export const useSnackbar = () => {
  const dispatch = useDispatch()
  const snackbarProps: SnackbarProps = useSelector(selectSnackbarProps)

  const setSnackbarProps = (props: SnackbarProps) => {
    const snackbarProps: SnackbarProps = {
      autoHideDuration: 3000,
      ...props,
    }
    dispatch(dispatchSnackbarProps(snackbarProps))
  }
  return {
    snackbarProps,
    setSnackbarProps,
  }
}
