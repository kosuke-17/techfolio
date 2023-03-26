import { useMe } from '@/hooks/api/user'
import { useToggle } from '@/hooks/useToggle'
import { enhancedApi } from '@/store/api/codegen/user'
import { useRouter } from 'next/router'
import { useState } from 'react'

export const useHooks = () => {
  const [open, setOpen] = useState(false)
  const {
    open: openLogoutDialog,
    on: handleOpenLogoutDialog,
    off: handleCloseLogoutDialog,
  } = useToggle()
  const router = useRouter()
  const { me } = useMe()

  const [logoutMutation] = enhancedApi.useUsersControllerLogoutMutation()

  const onCloseSnackbar = () => {
    setOpen(false)
  }

  const logout = async () => {
    const token = localStorage.getItem('token')
    if (!token) return
    try {
      await logoutMutation({ updateUserSecretDto: { token } }).unwrap()
      localStorage.setItem('token', '')
      router.push('/login')
    } catch (e) {
      setOpen(true)
      console.error(e)
    }
  }

  return {
    me,
    open,
    openLogoutDialog,
    handleOpenLogoutDialog,
    handleCloseLogoutDialog,
    onCloseSnackbar,
    logout,
  }
}
