import { enhancedApi } from '../api/user'

export const getUsers = () => {
  const data = enhancedApi.useUsersControllerFindAllQuery()
  return data
}
