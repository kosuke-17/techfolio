import Button from '@mui/material/Button'
import CardActions from '@mui/material/CardActions'
import {
  StyledCard,
  StyledCardContent,
} from '@/components/presentations/atoms/StyledCard'
import CustomTextField from '@/components/presentations/CustomTextField'
import Stack from '@mui/material/Stack'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'

import { useHooks } from './hooks'

const UserCreateCard = () => {
  const { open, onCloseSnackbar, onSubmit, control } = useHooks()
  return (
    <StyledCard>
      <form onSubmit={onSubmit}>
        <StyledCardContent>
          <Stack spacing={1}>
            <CustomTextField
              name='firstName'
              label='姓'
              control={control}
              defaultValue=''
            />
            <CustomTextField
              name='lastName'
              label='名'
              control={control}
              defaultValue=''
            />
            <CustomTextField
              name='email'
              label='メールアドレス'
              control={control}
              defaultValue=''
            />
            <CustomTextField
              name='password'
              label='パスワード'
              control={control}
              defaultValue=''
            />
          </Stack>
        </StyledCardContent>
        <CardActions sx={{ display: 'column', justifyContent: 'center' }}>
          <Stack spacing={1}>
            <Button type='submit' variant='contained'>
              作成
            </Button>
          </Stack>
        </CardActions>
      </form>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        onClose={onCloseSnackbar}
        autoHideDuration={6000}
      >
        <Alert severity='success'>ユーザー作成しました</Alert>
      </Snackbar>
    </StyledCard>
  )
}
export default UserCreateCard
