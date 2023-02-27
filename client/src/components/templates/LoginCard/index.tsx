import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import { styled } from '@mui/material/styles'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import CustomTextField from '@/components/presentations/CustomTextField'
import Stack from '@mui/material/Stack'
import { enhancedApi } from '@/store/api/codegen/app'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
})
export type DefaultValues = z.infer<typeof loginSchema>

const StyledCard = styled(Card)(({ theme }) => ({
  width: 400,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(1),
}))

const StyledCardContent = styled(CardContent)(({}) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}))

const Login = () => {
  const [loginMutation] = enhancedApi.useAppControllerLoginMutation()
  const login = async (loginDto: DefaultValues) => {
    try {
      await loginMutation({ loginDto }).unwrap()
    } catch (e) {
      console.error(e)
    }
  }

  const defaultValues = {
    email: '',
    password: '',
  }

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<DefaultValues>({
    resolver: zodResolver(loginSchema),
    defaultValues,
  })

  console.log(errors)

  return (
    <StyledCard>
      <form onSubmit={handleSubmit(login)}>
        <StyledCardContent>
          <Stack spacing={2}>
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
        <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button type='submit' sx={{ width: '50%' }} variant='contained'>
            ログイン
          </Button>
        </CardActions>
      </form>
    </StyledCard>
  )
}

export default Login
