import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import React from 'react'
import Typography from '@mui/material/Typography'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload'
import { styled } from '@mui/material/styles'

import ContentCenter from '@/components/presentations/ContentCenter'
import UserInformation from '@/components/templates/UserInformation'
import IconButton from '@/components/presentations/atoms/IconButton'

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
          <IconButton
            icon={CloudDownloadIcon}
            iconSx={{ color: 'common.black', fontSize: '32px' }}
          />
        </StyledSpreadSheetHeader>

        <UserInformation />
      </Paper>
    </ContentCenter>
  )
}

export default SpreadSheet
