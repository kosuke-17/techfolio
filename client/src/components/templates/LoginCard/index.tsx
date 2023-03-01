import Button from '@mui/material/Button'
import CardActions from '@mui/material/CardActions'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

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
  const [loginMutation] = enhancedApi.useAppControllerLoginMutation()
  const login = async (loginDto: DefaultValues) => {
    try {
      await loginMutation({ loginDto }).unwrap()
    } catch (e) {
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
    </StyledCard>
  )
}

export default Login
