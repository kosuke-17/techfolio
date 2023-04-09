import Box from '@mui/material/Box'
import { OverridableComponent } from '@mui/material/OverridableComponent'
import Stack from '@mui/material/Stack'
import { SvgIconTypeMap } from '@mui/material/SvgIcon'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import { Fragment } from 'react'

import IconButton from '@/components/presentations/atoms/IconButton'

const StyledTableHeader = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(2),
  display: 'flex',
  justifyContent: 'space-between',
}))

type IconType = OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
  muiName: string
}

const TableHeader = (params: {
  title: string
  actions?: {
    icon: IconType
    onClick: () => void
    isHidden: boolean
  }[]
}) => {
  const { title, actions } = params

  return (
    <StyledTableHeader>
      <Typography variant='h5'>{title}</Typography>
      <Stack direction='row' spacing={2}>
        {actions &&
          actions.map(({ icon, onClick, isHidden }, index) => (
            <Fragment key={index}>
              {isHidden ? null : (
                <IconButton
                  icon={icon}
                  onClick={onClick}
                  iconSx={{ color: 'common.black', fontSize: '16px' }}
                />
              )}
            </Fragment>
          ))}
      </Stack>
    </StyledTableHeader>
  )
}

export default TableHeader
