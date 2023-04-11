import AddCircleOutline from '@mui/icons-material/AddCircleOutline'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'

import CustomTextField from '@/components/presentations/CustomTextField'
import IconButton from '@/components/presentations/atoms/IconButton'

import { useHooks } from './hooks'

const PortfolioField = () => {
  const {
    portfolioInputs,
    control,
    handleAddPortfolioInput,
    handleInputChange,
    onSubmit,
  } = useHooks()

  return (
    <form onSubmit={onSubmit}>
      <Stack direction='column' spacing={2}>
        {portfolioInputs.map(({ id, name, url }) => (
          <Stack direction='row' spacing={1} key={id}>
            <CustomTextField
              label='ポートフォリオ名'
              name='name'
              control={control}
              onChange={(event) =>
                handleInputChange(event, { id, type: 'name' })
              }
            />
            <CustomTextField
              label='URL'
              name='url'
              control={control}
              onChange={(event) =>
                handleInputChange(event, { id, type: 'url' })
              }
            />
          </Stack>
        ))}
      </Stack>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <IconButton
          icon={AddCircleOutline}
          onClick={handleAddPortfolioInput}
          iconSx={{ color: 'common.black', fontSize: '32px' }}
        />
        <Button variant='contained' sx={{ mt: 1, width: '30%' }} type='submit'>
          保存
        </Button>
      </Box>
    </form>
  )
}

export default PortfolioField
