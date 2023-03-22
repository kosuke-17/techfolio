import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'

import CustomTextField from '@/components/presentations/CustomTextField'
import IconButton from '@/components/presentations/atoms/IconButton'
import ContentCenter from '@/components/presentations/ContentCenter'
import TabPanel from '@/components/presentations/atoms/TabPanel'
import { useHooks } from './hooks'
import RadioInput from '@/components/presentations/RadioInput'
import { GENDER } from '@/constant/user-information'
import { Button } from '@mui/material'

const StyledTabLabelBox = styled(Box)(() => ({
  fontSize: '16px',
  fontWeight: 700,
}))

const SpreadSheetEditForm = () => {
  const { tabs, value, control, onSubmit, onGoToBack, handleChange } =
    useHooks()

  return (
    <ContentCenter sx={{ py: 3 }}>
      <Paper sx={{ py: 3, borderRadius: 10, px: 3 }} elevation={3}>
        <Stack direction='row' spacing={2}>
          <IconButton
            icon={ArrowBackIcon}
            onClick={onGoToBack}
            iconSx={{ color: 'common.black', fontSize: '16px' }}
          />
          <Typography variant='h5'>SpreadSheetの編集</Typography>
        </Stack>
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
        <TabPanel value={value} tabType='info'>
          <form onSubmit={onSubmit}>
            <Stack direction='column' spacing={2}>
              <Stack direction='row' spacing={2}>
                <CustomTextField
                  name='stuffId'
                  label='スタッフID'
                  control={control}
                  defaultValue=''
                />

                <RadioInput
                  defaultValue={GENDER.MALE}
                  control={control}
                  name='gender'
                />
              </Stack>
              <Stack direction='row' spacing={2}>
                <CustomTextField
                  name='age'
                  label='年齢'
                  control={control}
                  inputProps={{ type: 'number' }}
                  sx={{ width: '70%' }}
                  suffixLabel='歳'
                  defaultValue={1}
                />
                <CustomTextField
                  name='nearestStation'
                  label='最寄駅'
                  control={control}
                  defaultValue=''
                />
                <CustomTextField
                  name='startWorkDate'
                  label='稼働開始日'
                  control={control}
                  defaultValue={new Date().toISOString()}
                />
              </Stack>
              <Stack direction='row' spacing={2}>
                <CustomTextField
                  name='seExpAmount'
                  label='SE経験'
                  control={control}
                  defaultValue={1}
                  inputProps={{ type: 'number' }}
                  sx={{ width: '70%' }}
                  suffixLabel='ヶ月'
                />
                <CustomTextField
                  name='pgExpAmount'
                  label='PG・作業員経験'
                  control={control}
                  defaultValue={1}
                  inputProps={{ type: 'number' }}
                  sx={{ width: '70%' }}
                  suffixLabel='ヶ月'
                />
                <CustomTextField
                  name='itExpAmount'
                  label='IT全体経験'
                  control={control}
                  defaultValue={1}
                  inputProps={{ type: 'number' }}
                  sx={{ width: '70%' }}
                  suffixLabel='ヶ月'
                />
              </Stack>
            </Stack>
            <Box sx={{ display: 'flex', justifyContent: 'end' }}>
              <Button variant='contained' sx={{ width: '30%' }} type='submit'>
                保存
              </Button>
            </Box>
          </form>
        </TabPanel>
      </Paper>
    </ContentCenter>
  )
}

export default SpreadSheetEditForm
