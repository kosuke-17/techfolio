import CloudDownloadIcon from '@mui/icons-material/CloudDownload'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import React from 'react'

import ContentCenter from '@/components/presentations/ContentCenter'
import IconButton from '@/components/presentations/atoms/IconButton'
import PortfolioUrlList from '@/components/templates/PortfolioUrlList'
import UserInformation from '@/components/templates/UserInformation'

import SkillInformation from '../SkillInformation'
import { useHooks } from './hooks'

const StyledSpreadSheetHeader = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
}))

const SpreadSheet = () => {
  const { download, userInformationId } = useHooks()
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

        <UserInformation id={userInformationId} />

        <PortfolioUrlList />

        <SkillInformation id={''} />
      </Paper>
    </ContentCenter>
  )
}

export default SpreadSheet
