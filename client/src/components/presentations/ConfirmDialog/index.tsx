import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogTitle from '@mui/material/DialogTitle'

const ConfirmDialog = (params: {
  title: string
  open: boolean
  closeText: string
  onClose: () => void
  actionText: string
  onAction: () => void
}) => {
  const { title, open, closeText, onClose, actionText, onAction } = params
  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>{title}</DialogTitle>
      <DialogActions>
        <Button onClick={onClose}>{closeText}</Button>
        <Button onClick={onAction}>{actionText}</Button>
      </DialogActions>
    </Dialog>
  )
}

export default ConfirmDialog
