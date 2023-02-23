import { enhancedApi as enhancedUserApi } from '../api/user'

export const getUsers = () => {
  const { data: users } = enhancedUserApi.useUsersControllerFindAllQuery()
  return users
}
