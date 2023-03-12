import { SvgIconComponent } from '@mui/icons-material'
import { IconButton as MUIIconButton, SxProps } from '@mui/material'

const IconButton = ({
  icon: Icon,
  onClick,
  iconSx,
}: {
  icon: SvgIconComponent
  onClick?: () => void
  iconSx?: SxProps
}) => {
  return (
    <MUIIconButton
      sx={{
        bgcolor: 'common.white',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      }}
    >
      <Icon sx={iconSx} />
    </MUIIconButton>
  )
}

export default IconButton
