import { getUsers } from '@/store/hooks/user'

const Login = () => {
  const users = getUsers()
  console.log(users)

  return <>ログイン</>
}

export default Login
