import EditIcon from '@mui/icons-material/Edit'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import IconButton from '../atoms/IconButton'

const StyledTableHeader = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(2),
  display: 'flex',
  justifyContent: 'space-between',
}))

const TableHeader = (params: { title: string; onClick: () => void }) => {
  const { title, onClick } = params

  return (
    <StyledTableHeader>
      <Typography variant='h5'>{title}</Typography>
      <IconButton
        icon={EditIcon}
        onClick={onClick}
        iconSx={{ color: 'common.black', fontSize: '16px' }}
      />
    </StyledTableHeader>
  )
}

export default TableHeader
