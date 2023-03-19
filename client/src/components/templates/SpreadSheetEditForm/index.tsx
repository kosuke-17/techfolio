import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { styled } from '@mui/material/styles'

import ContentCenter from '@/components/presentations/ContentCenter'
import TabPanel from '@/components/presentations/atoms/TabPanel'
import { useHooks } from './hooks'

const StyledSpreadSheetHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
}))

const StyledTabLabelBox = styled(Box)(() => ({
  fontSize: '16px',
  fontWeight: 700,
}))

const SpreadSheetEditForm = () => {
  const { tabs, value, handleChange } = useHooks()

  return (
    <ContentCenter sx={{ py: 3 }}>
      <Paper sx={{ py: 3, borderRadius: 10, px: 3 }} elevation={3}>
        <StyledSpreadSheetHeader>
          <Typography variant='h5'>SpreadSheetの編集</Typography>
        </StyledSpreadSheetHeader>
        <Tabs value={value} onChange={handleChange}>
          {tabs.map(({ label, value }) => (
            <Tab
              key={label}
              label={<StyledTabLabelBox>{label}</StyledTabLabelBox>}
              value={value}
              sx={{ marginLeft: 0.5 }}
            />
          ))}
        </Tabs>
        <TabPanel value={value} tabType='info'></TabPanel>
      </Paper>
    </ContentCenter>
  )
}

export default SpreadSheetEditForm
