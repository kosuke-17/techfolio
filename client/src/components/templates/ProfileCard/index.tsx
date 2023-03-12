import { useState } from 'react'
import Paper from '@mui/material/Paper'
import LogoutIcon from '@mui/icons-material/Logout'
import GitHubIcon from '@mui/icons-material/GitHub'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import { useRouter } from 'next/router'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

import ContentCenter from '@/components/presentations/ContentCenter'
import IconButton from '@/components/presentations/atoms/IconButton'
import { enhancedApi } from '@/store/api/codegen/user'
import Link from '@/components/presentations/Link'
import { useToggle } from '@/hooks/useToggle'

const StyledCardContent = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(3),
  display: 'column',
  alignItems: 'center',
}))

const ProfileCard = () => {
  const [open, setOpen] = useState(false)
  const {
    open: openLogoutDialog,
    on: handleOpenLogoutDialog,
    off: handleCloseLogoutDialog,
  } = useToggle()
  const router = useRouter()
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
  return (
    <ContentCenter sx={{ pt: 3 }}>
      <Paper
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: 200,
          borderRadius: 10,
        }}
        elevation={3}
      >
        <StyledCardContent spacing={2}>
          <Avatar sx={{ width: 72, height: 72 }} />
          <Typography variant='h5'>田中太郎</Typography>
          <Typography sx={{ textAlign: 'center' }} variant='body1'>
            フロントエンドエンジニア
          </Typography>
          <Stack direction='row' spacing={2}>
            <Link href='https://github.com/kosuke-17'>
              <IconButton
                icon={GitHubIcon}
                iconSx={{ color: 'common.black', fontSize: '24px' }}
              />
            </Link>
            <IconButton
              onClick={handleOpenLogoutDialog}
              icon={LogoutIcon}
              iconSx={{ color: 'common.black', fontSize: '24px' }}
            />
          </Stack>
        </StyledCardContent>
      </Paper>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        onClose={onCloseSnackbar}
        autoHideDuration={6000}
      >
        <Alert severity='error'>ログアウトできませんでした</Alert>
      </Snackbar>
      <Dialog onClose={handleCloseLogoutDialog} open={openLogoutDialog}>
        <DialogTitle>ログアウトしますか？</DialogTitle>
        <DialogActions>
          <Button onClick={handleCloseLogoutDialog}>キャンセル</Button>
          <Button onClick={logout}>ログアウト</Button>
        </DialogActions>
      </Dialog>
    </ContentCenter>
  )
}

export default ProfileCard
