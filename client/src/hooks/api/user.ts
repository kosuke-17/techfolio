import { enhancedApi as enhancedUserApi } from '../../store/api/codegen/user'

export const getUsers = () => {
  const { data: users } = enhancedUserApi.useUsersControllerFindAllQuery()
  return users
}

export const getUser = (id: string) => {
  const { data: user } = enhancedUserApi.useUsersControllerFindOneQuery({ id })
  return user
}

export const getMe = () => {
  const { data } = enhancedUserApi.useUsersControllerFindMeQuery()
  const me = data || null
  return me
}
