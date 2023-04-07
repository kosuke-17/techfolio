import { baseApi as api } from '../../baseApi'

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    appControllerLogin: build.mutation<
      AppControllerLoginApiResponse,
      AppControllerLoginApiArg
    >({
      query: (queryArg) => ({
        url: `/api/auth/login`,
        method: 'POST',
        body: queryArg.loginDto,
      }),
    }),
  }),
  overrideExisting: false,
})
export { injectedRtkApi as enhancedApi }
export type AppControllerLoginApiResponse =
  /** status 200  */ ResponseLoginUserDto
export type AppControllerLoginApiArg = {
  loginDto: LoginDto
}
export type SecretForResponseLoginUser = {
  id: string
  createdAt: string
  updatedAt: string
  password: string
  token: string
}
export type ResponseLoginUserDto = {
  id: string
  createdAt: string
  updatedAt: string
  firstName: string
  lastName: string
  secret: SecretForResponseLoginUser
}
export type LoginDto = {
  email?: string
  password?: string
}
export const { useAppControllerLoginMutation } = injectedRtkApi
