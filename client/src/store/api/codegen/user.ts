import { baseApi as api } from "../../baseApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    usersControllerFindAll: build.query<
      UsersControllerFindAllApiResponse,
      UsersControllerFindAllApiArg
    >({
      query: () => ({ url: `/api/users` }),
    }),
    usersControllerCreate: build.mutation<
      UsersControllerCreateApiResponse,
      UsersControllerCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/api/users`,
        method: "POST",
        body: queryArg.createUserDto,
      }),
    }),
    usersControllerFindOne: build.query<
      UsersControllerFindOneApiResponse,
      UsersControllerFindOneApiArg
    >({
      query: (queryArg) => ({ url: `/api/users/${queryArg.id}` }),
    }),
    usersControllerLogout: build.mutation<
      UsersControllerLogoutApiResponse,
      UsersControllerLogoutApiArg
    >({
      query: (queryArg) => ({
        url: `/api/users/logout`,
        method: "PUT",
        body: queryArg.updateUserSecretDto,
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as enhancedApi };
export type UsersControllerFindAllApiResponse =
  /** status 200  */ UserResponseDto[];
export type UsersControllerFindAllApiArg = void;
export type UsersControllerCreateApiResponse =
  /** status 201  */ UserCreateResponseDto;
export type UsersControllerCreateApiArg = {
  createUserDto: CreateUserDto;
};
export type UsersControllerFindOneApiResponse =
  /** status 200  */ UserResponseDto;
export type UsersControllerFindOneApiArg = {
  id: string;
};
export type UsersControllerLogoutApiResponse = unknown;
export type UsersControllerLogoutApiArg = {
  updateUserSecretDto: UpdateUserSecretDto;
};
export type UserResponseDto = {
  firstName: string;
  lastName: string;
};
export type UserSecretForUserCreateResponseDto = {
  token: string;
};
export type UserCreateResponseDto = {
  id: string;
  secret: UserSecretForUserCreateResponseDto;
};
export type CreateUserDto = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};
export type UpdateUserSecretDto = {
  token: string;
};
export const {
  useUsersControllerFindAllQuery,
  useUsersControllerCreateMutation,
  useUsersControllerFindOneQuery,
  useUsersControllerLogoutMutation,
} = injectedRtkApi;
