import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { styled } from '@mui/material/styles'

import { getUsers } from '@/store/hooks/user'
import { Button, CardActions } from '@mui/material'

const StyledCard = styled(Card)(({ theme }) => ({
  width: 400,
  borderRadius: theme.shape.borderRadius,
}))

const StyledCardContent = styled(CardContent)(({}) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}))

const Login = () => {
  const users = getUsers()
  console.log(users)

  return (
    <StyledCard>
      <StyledCardContent>カードの中身</StyledCardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button sx={{ width: '50%' }} variant='contained'>
          ログイン
        </Button>
      </CardActions>
    </StyledCard>
  )
}

export default Login
