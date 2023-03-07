import { useState } from 'react'
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
import { enhancedApi } from '@/store/api/codegen/user'
import { requiredEmailString, requiredString } from '@/zod/common'
import { useRouter } from 'next/router'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'

const userCreateSchema = z.object({
  firstName: requiredString,
  lastName: requiredString,
  email: requiredEmailString,
  password: requiredString,
})
export type DefaultValues = z.infer<typeof userCreateSchema>

const UserCreateCard = () => {
  const router = useRouter()
  const [createMutation] = enhancedApi.useUsersControllerCreateMutation()
  const [open, setOpen] = useState(false)

  const onCloseSnackbar = () => {
    setOpen(false)
  }

  const create = async (createUserDto: DefaultValues) => {
    try {
      const user = await createMutation({ createUserDto }).unwrap()

      localStorage.setItem('tonken', user.secret.token)
      router.push('/login')
      setOpen(true)
    } catch (e) {
      console.error(e)
    }
  }

  const { control, handleSubmit } = useForm<DefaultValues>({
    resolver: zodResolver(userCreateSchema),
  })

  return (
    <StyledCard>
      <form onSubmit={handleSubmit(create)}>
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
