import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import React from 'react'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

import ContentCenter from '@/components/presentations/ContentCenter'

const StyledSpreadSheetHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
}))

const SpreadSheetEditForm = () => {
  return (
    <ContentCenter sx={{ py: 3 }}>
      <Paper sx={{ py: 3, borderRadius: 10, px: 3 }} elevation={3}>
        <StyledSpreadSheetHeader>
          <Typography variant='h5'>SpreadSheetの編集</Typography>
        </StyledSpreadSheetHeader>
      </Paper>
    </ContentCenter>
  )
}

export default SpreadSheetEditForm
