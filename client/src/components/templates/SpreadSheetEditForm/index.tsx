import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

import ContentCenter from '@/components/presentations/ContentCenter'
import IconButton from '@/components/presentations/atoms/IconButton'
import TabPanel from '@/components/presentations/atoms/TabPanel'
import UserInformationField from '@/components/templates/SpreadSheetEditForm/UserInfomationField'

import { useHooks } from './hooks'

const StyledTabLabelBox = styled(Box)(() => ({
  fontSize: '16px',
  fontWeight: 700,
}))

const SpreadSheetEditForm = () => {
  const { tabs, value, goToBack, onChangeTabType } = useHooks()

  return (
    <ContentCenter sx={{ py: 3 }}>
      <Paper sx={{ py: 3, borderRadius: 10, px: 3 }} elevation={3}>
        <Stack direction='row' spacing={2}>
          <IconButton
            icon={ArrowBackIcon}
            onClick={goToBack}
            iconSx={{ color: 'common.black', fontSize: '16px' }}
          />
          <Typography variant='h5'>SpreadSheetの編集</Typography>
        </Stack>
        <Tabs value={value} onChange={onChangeTabType}>
          {tabs.map(({ label, value }) => (
            <Tab
              key={label}
              label={<StyledTabLabelBox>{label}</StyledTabLabelBox>}
              value={value}
              sx={{ marginLeft: 0.5 }}
            />
          ))}
        </Tabs>
        <TabPanel value={value} tabType='info'>
          <UserInformationField />
        </TabPanel>
      </Paper>
    </ContentCenter>
  )
}

export default SpreadSheetEditForm
