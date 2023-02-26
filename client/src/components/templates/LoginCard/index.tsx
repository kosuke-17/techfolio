import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'

import { getUsers } from '@/store/hooks/user'

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 400,
  borderRadius: theme.shape.borderRadius,
}))

const Login = () => {
  const users = getUsers()
  console.log(users)

  return (
    <StyledCard>
      <CardContent component={Stack} spacing={2}>
        カードの中身
      </CardContent>
    </StyledCard>
  )
}

export default Login
