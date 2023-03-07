import { enhancedApi } from '@/store/api/codegen/user'
import Button from '@mui/material/Button'

const HomePage = () => {
  const [logoutMutation] = enhancedApi.useUsersControllerLogoutMutation()
  const logout = async () => {
    const id = localStorage.getItem('id')
    if (!id) return
    await logoutMutation({ id }).unwrap()
    localStorage.setItem('token', '')
  }
  return <Button onClick={logout}>ログアウト</Button>
}

export default HomePage
