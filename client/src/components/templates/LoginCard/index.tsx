import Button from '@mui/material/Button'
import CardActions from '@mui/material/CardActions'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useState } from 'react'
import { useRouter } from 'next/router'

import {
  StyledCard,
  StyledCardContent,
} from '@/components/presentations/atoms/StyledCard'
import CustomTextField from '@/components/presentations/CustomTextField'
import Stack from '@mui/material/Stack'
import { enhancedApi } from '@/store/api/codegen/app'
import Link from '@/components/presentations/Link'
import { requiredEmailString, requiredString } from '@/zod/common'

const loginSchema = z.object({
  email: requiredEmailString,
  password: requiredString,
})
export type DefaultValues = z.infer<typeof loginSchema>

const Login = () => {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [loginMutation] = enhancedApi.useAppControllerLoginMutation()
  const onCloseSnackbar = () => {
    setOpen(false)
  }
  const login = async (loginDto: DefaultValues) => {
    try {
      const user = await loginMutation({ loginDto }).unwrap()
      localStorage.setItem('token', user.secret.token)
      router.push('/home')
    } catch (e) {
      setOpen(true)
      console.error(e)
    }
  }

  const { control, handleSubmit } = useForm<DefaultValues>({
    resolver: zodResolver(loginSchema),
  })

  return (
    <StyledCard>
      <form onSubmit={handleSubmit(login)}>
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
