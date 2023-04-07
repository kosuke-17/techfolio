import EditIcon from '@mui/icons-material/Edit'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

import IconButton from '@/components/presentations/atoms/IconButton'

const StyledTableHeader = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(2),
  display: 'flex',
  justifyContent: 'space-between',
}))

const TableHeader = (params: {
  title: string
  hiddenIcon?: boolean
  onClick: () => void
}) => {
  const { title, hiddenIcon, onClick } = params

  return (
    <StyledTableHeader>
      <Typography variant='h5'>{title}</Typography>
      {hiddenIcon ? null : (
        <IconButton
          icon={EditIcon}
          onClick={onClick}
          iconSx={{ color: 'common.black', fontSize: '16px' }}
        />
      )}
    </StyledTableHeader>
  )
}

export default TableHeader
