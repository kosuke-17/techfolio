import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import React from 'react'

import LoadingCircular from '@/components/presentations/atoms/LoadingCircular'
import CustomTextField from '@/components/presentations/CustomTextField'
import RadioInput from '@/components/presentations/RadioInput'
import { formatNumToString } from '@/lib/util'

import { useHooks } from './hooks'

const UserInformationField = () => {
  const { isLoading, control, onSubmit } = useHooks()

  if (isLoading) return <LoadingCircular />

  return (
    <form onSubmit={onSubmit}>
      <Stack direction='column' spacing={2}>
        <Stack direction='row' spacing={2}>
          <CustomTextField
            name='stuffId'
            label='スタッフID'
            control={control}
          />

          <RadioInput control={control} name='gender' />
        </Stack>
        <CustomTextField
          name='nearestStation'
          label='最寄駅'
          control={control}
        />

        <Stack direction='row' spacing={2}>
          <CustomTextField
            name='age'
            label='年齢'
            control={control}
            sx={{ width: '50%' }}
            suffixLabel='歳'
            format={formatNumToString}
          />
          <CustomTextField
            name='startWorkDate'
            label='稼働開始日'
            control={control}
          />
        </Stack>
        <Stack direction='row' spacing={2}>
          <CustomTextField
            name='seExpAmount'
            label='SE経験'
            control={control}
            format={formatNumToString}
            sx={{ width: '70%' }}
            suffixLabel='ヶ月'
          />
          <CustomTextField
            name='pgExpAmount'
            label='PG・作業員経験'
            control={control}
            format={formatNumToString}
            sx={{ width: '70%' }}
            suffixLabel='ヶ月'
          />
          <CustomTextField
            name='itExpAmount'
            label='IT全体経験'
            control={control}
            format={formatNumToString}
            sx={{ width: '70%' }}
            suffixLabel='ヶ月'
          />
        </Stack>
      </Stack>
      <Box sx={{ display: 'flex', justifyContent: 'end' }}>
        <Button variant='contained' sx={{ mt: 1, width: '30%' }} type='submit'>
          保存
        </Button>
      </Box>
    </form>
  )
}

export default UserInformationField
