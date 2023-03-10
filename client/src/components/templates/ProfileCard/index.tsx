import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import React from 'react'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

import ContentCenter from '@/components/presentations/ContentCenter'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

const StyledCardContent = styled(Stack)(({ theme }) => ({
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  paddingTop: theme.spacing(3),
  display: 'column',
  alignItems: 'center',
}))

const ProfileCard = () => {
  return (
    <ContentCenter sx={{ pt: 3 }}>
      <Paper
        sx={{
          display: 'flex',
          justifyContent: 'center',
          height: 300,
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
          <Button sx={{ borderRadius: 10, py: 1, px: 3 }} variant='contained'>
            Github
          </Button>
        </StyledCardContent>
      </Paper>
    </ContentCenter>
  )
}

export default ProfileCard
