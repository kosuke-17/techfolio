import { SvgIconComponent } from '@mui/icons-material'
import { SxProps } from '@mui/material'
import MuiIconButton from '@mui/material/IconButton'

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
    <MuiIconButton
      sx={{
        bgcolor: 'common.white',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      }}
      onClick={onClick}
    >
      <Icon sx={iconSx} />
    </MuiIconButton>
  )
}

export default IconButton
