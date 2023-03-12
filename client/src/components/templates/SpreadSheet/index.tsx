import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import React from 'react'
import Typography from '@mui/material/Typography'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload'
import { styled } from '@mui/material/styles'

import ContentCenter from '@/components/presentations/ContentCenter'
import UserInformation from '@/components/templates/UserInformation'
import IconButton from '@/components/presentations/atoms/IconButton'
import PortfolioUrlList from '@/components/templates/PortfolioUrlList'

const StyledSpreadSheetHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
}))

const SpreadSheet = () => {
  const download = () => {
    console.log('ダウンロード処理')
  }

  return (
    <ContentCenter sx={{ py: 3 }}>
      <Paper sx={{ py: 3, borderRadius: 10, px: 3 }} elevation={3}>
        <StyledSpreadSheetHeader>
          <Typography variant='h3'>SpreadSheet</Typography>
          <IconButton
            icon={CloudDownloadIcon}
            onClick={download}
            iconSx={{ color: 'common.black', fontSize: '32px' }}
          />
        </StyledSpreadSheetHeader>

        <UserInformation />

        <PortfolioUrlList />
      </Paper>
    </ContentCenter>
  )
}

export default SpreadSheet
