import { enhancedApi as enhancedUserApi } from '../../store/api/codegen/user'

export const useUsers = () => {
  const { data: users } = enhancedUserApi.useUsersControllerFindAllQuery()
  return users
}

export const useUser = (id: string) => {
  const { data: user } = enhancedUserApi.useUsersControllerFindOneQuery({ id })
  return user
}

export const useMe = () => {
  const { data } = enhancedUserApi.useUsersControllerFindMeQuery()
  const me = data || null
  return { me }
}
