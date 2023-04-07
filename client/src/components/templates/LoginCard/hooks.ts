import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { enhancedApi } from '@/store/api/codegen/app'
import { requiredEmailString, requiredString } from '@/zod/common'

const loginSchema = z.object({
  email: requiredEmailString,
  password: requiredString,
})
export type DefaultValues = z.infer<typeof loginSchema>

export const useHooks = () => {
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

  return {
    open,
    onCloseSnackbar,
    control,
    onSubmit: handleSubmit(login),
  }
}
