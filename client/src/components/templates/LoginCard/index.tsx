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
  const login = () => {
    console.log('ログイン')
  }

  const defaultValues = {
    email: '',
    password: '',
  }

  const { control, handleSubmit } = useForm<DefaultValues>({
    resolver: zodResolver(loginSchema),
    defaultValues,
  })

  return (
    <StyledCard>
      <StyledCardContent>
        <form onSubmit={handleSubmit(login)}>
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
        </form>
      </StyledCardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button sx={{ width: '50%' }} variant='contained'>
          ログイン
        </Button>
      </CardActions>
    </StyledCard>
  )
}

export default Login
