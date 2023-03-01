import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

export const StyledCard = styled(Card)(({ theme }) => ({
  width: 400,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(1),
}))

export const StyledCardContent = styled(CardContent)(({}) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}))
