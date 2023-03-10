import { useState } from 'react'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import { useRouter } from 'next/router'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'

import { enhancedApi } from '@/store/api/codegen/user'
import SpreadSheet from '@/components/templates/SpreadSheet'
import ProfileCard from '@/components/templates/ProfileCard'

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
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid item xs={3} md={3}>
            <Box />
          </Grid>
          <Grid item xs={6} md={6}>
            <SpreadSheet />
          </Grid>
          <Grid item xs={3} md={3}>
            <ProfileCard />
          </Grid>
        </Grid>
      </Box>
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
