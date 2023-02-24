import { enhancedApi as enhancedUserApi } from '../api/codegen/user'

export const getUsers = () => {
  const { data: users } = enhancedUserApi.useUsersControllerFindAllQuery()
  return users
}
