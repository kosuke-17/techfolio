import Button from '@mui/material/Button'
import { useRouter } from 'next/router'

import { enhancedApi } from '@/store/api/codegen/user'
import { useState } from 'react'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'

const HomePage = () => {
  const router = useRouter()
  const [logoutMutation] = enhancedApi.useUsersControllerLogoutMutation()
  const [open, setOpen] = useState(false)

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
  return (
    <>
      <Button variant='contained' onClick={logout}>
        ログアウト
      </Button>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        onClose={onCloseSnackbar}
        autoHideDuration={6000}
      >
        <Alert severity='error'>ログアウトできませんでした</Alert>
      </Snackbar>
    </>
  )
}

export default HomePage
