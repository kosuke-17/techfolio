import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import React from 'react'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload'
import { styled } from '@mui/material/styles'

import ContentCenter from '@/components/presentations/ContentCenter'
import UserInformation from '@/components/UserInformation'

const StyledSpreadSheetHeader = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(3),
  display: 'flex',
  justifyContent: 'space-between',
}))

const SpreadSheet = () => {
  return (
    <ContentCenter sx={{ pt: 3 }}>
      <Paper sx={{ borderRadius: 10, px: 3 }} elevation={3}>
        <StyledSpreadSheetHeader>
          <Typography variant='h3'>SpreadSheet</Typography>
          <IconButton sx={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
            <CloudDownloadIcon
              sx={{ color: 'common.black', fontSize: '32px' }}
            />
          </IconButton>
        </StyledSpreadSheetHeader>

        <UserInformation />
      </Paper>
    </ContentCenter>
  )
}

export default SpreadSheet
