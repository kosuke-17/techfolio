import { enhancedApi } from '@/store/api/codegen/user'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { requiredEmailString, requiredString } from '@/zod/common'

const userCreateSchema = z.object({
  firstName: requiredString,
  lastName: requiredString,
  email: requiredEmailString,
  password: requiredString,
})
export type DefaultValues = z.infer<typeof userCreateSchema>

export const useHooks = () => {
  const router = useRouter()
  const [createMutation] = enhancedApi.useUsersControllerCreateMutation()
  const [open, setOpen] = useState(false)

  const onCloseSnackbar = () => {
    setOpen(false)
  }

  const create = async (createUserDto: DefaultValues) => {
    try {
      const user = await createMutation({ createUserDto }).unwrap()

      localStorage.setItem('token', user.secret.token)
      router.push('/login')
      setOpen(true)
    } catch (e) {
      console.error(e)
    }
  }

  const { control, handleSubmit } = useForm<DefaultValues>({
    resolver: zodResolver(userCreateSchema),
  })

  return {
    open,
    onCloseSnackbar,
    onSubmit: handleSubmit(create),
    control,
  }
}
