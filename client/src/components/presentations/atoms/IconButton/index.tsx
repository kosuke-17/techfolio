import { SvgIconComponent } from '@mui/icons-material'
import { IconButton as MUIIconButton, SxProps } from '@mui/material'

const IconButton = ({
  icon: Icon,
  iconSx,
}: {
  icon: SvgIconComponent
  iconSx?: SxProps
}) => {
  return (
    <MUIIconButton sx={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
      <Icon sx={iconSx} />
    </MUIIconButton>
  )
}

export default IconButton
