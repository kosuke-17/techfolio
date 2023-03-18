import Button from '@mui/material/Button'
import CardActions from '@mui/material/CardActions'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'

import {
  StyledCard,
  StyledCardContent,
} from '@/components/presentations/atoms/StyledCard'
import CustomTextField from '@/components/presentations/CustomTextField'
import Stack from '@mui/material/Stack'
import Link from '@/components/presentations/Link'
import { useHooks } from './hooks'

const Login = () => {
  const { control, onSubmit, open, onCloseSnackbar } = useHooks()

  return (
    <StyledCard>
      <form onSubmit={onSubmit}>
        <StyledCardContent>
          <Stack spacing={1}>
            <CustomTextField
              name='email'
              label='メール'
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
              ログイン
            </Button>
            <Link href='/users/new'>ユーザーを作成</Link>
          </Stack>
        </CardActions>
      </form>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        onClose={onCloseSnackbar}
        autoHideDuration={3000}
      >
        <Alert severity='error' sx={{ width: '100%' }}>
          ログインできませんでした
        </Alert>
      </Snackbar>
    </StyledCard>
  )
}

export default Login
