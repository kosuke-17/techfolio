import Paper from '@mui/material/Paper'
import LogoutIcon from '@mui/icons-material/Logout'
import GitHubIcon from '@mui/icons-material/GitHub'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import Stack from '@mui/material/Stack'

import ContentCenter from '@/components/presentations/ContentCenter'
import IconButton from '@/components/presentations/atoms/IconButton'
import Link from '@/components/presentations/Link'
import ConfirmDialog from '@/components/presentations/ConfirmDialog'
import { useHooks } from './hooks'

const StyledCardContent = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(3),
  display: 'column',
  alignItems: 'center',
}))

const ProfileCard = () => {
  const {
    me,
    open,
    openLogoutDialog,
    handleOpenLogoutDialog,
    handleCloseLogoutDialog,
    onCloseSnackbar,
    logout,
  } = useHooks()
  if (!me) return null

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
          <Typography variant='h5'>{me.lastName + me.firstName}</Typography>
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
      <ConfirmDialog
        title='ログアウトしますか？'
        open={openLogoutDialog}
        onClose={handleCloseLogoutDialog}
        closeText='キャンセル'
        onAction={logout}
        actionText='ログアウト'
      />
    </ContentCenter>
  )
}

export default ProfileCard
