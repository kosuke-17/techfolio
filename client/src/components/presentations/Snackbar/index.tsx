import Alert from '@mui/material/Alert'
import MuiSnackbar from '@mui/material/Snackbar'

import { useSnackbar } from '@/hooks/useSnackbar'
import { SnackbarProps } from '@/store/slice/snackbarSlice'

const Snackbar = () => {
  const { snackbarProps, setSnackbarProps } = useSnackbar()
  const {
    message,
    action,
    severity = 'success',
    ...rest
  } = snackbarProps as SnackbarProps

  console.log(message)

  const onClose = () => {
    setSnackbarProps({ message, severity, open: false })
  }
  return (
    <MuiSnackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      onClose={onClose}
      onClick={onClose}
      {...rest}
    >
      <Alert
        onClose={onClose}
        elevation={4}
        variant='filled'
        severity={severity}
        action={action}
      >
        {message}
      </Alert>
    </MuiSnackbar>
  )
}
export default Snackbar
