import AddCircleOutline from '@mui/icons-material/AddCircleOutline'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import React, { Fragment } from 'react'

import IconButton from '@/components/presentations/atoms/IconButton'

import { useHooks } from './hooks'

const PortfolioField = () => {
  const {
    portfolioInputs,
    handleAddPortfolioInput,
    handleInputChange,
    onSubmit,
  } = useHooks()

  return (
    <form onSubmit={onSubmit}>
      <Stack direction='column' spacing={2}>
        <Stack direction='row' spacing={2}>
          {portfolioInputs.map(({ id, name, url }) => (
            <Fragment key={id}>
              <TextField
                label='ポートフォリオ名'
                value={name}
                onChange={(event) =>
                  handleInputChange(event, { id, type: 'name' })
                }
              />
              <TextField
                key={id}
                label='URL'
                value={url}
                onChange={(event) =>
                  handleInputChange(event, { id, type: 'url' })
                }
              />
            </Fragment>
          ))}
        </Stack>
        <IconButton
          icon={AddCircleOutline}
          onClick={handleAddPortfolioInput}
          iconSx={{ color: 'common.black', fontSize: '32px' }}
        />
      </Stack>
      <Box sx={{ display: 'flex', justifyContent: 'end' }}>
        <Button variant='contained' sx={{ mt: 1, width: '30%' }} type='submit'>
          保存
        </Button>
      </Box>
    </form>
  )
}

export default PortfolioField
