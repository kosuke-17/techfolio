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
      query: (queryArg) => ({ url: `/api/users/id` }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as enhancedApi };
export type UsersControllerFindAllApiResponse =
  /** status 200  */ UserResponseDto[];
export type UsersControllerFindAllApiArg = void;
export type UsersControllerCreateApiResponse = /** status 201  */ object;
export type UsersControllerCreateApiArg = {
  createUserDto: CreateUserDto;
};
export type UsersControllerFindOneApiResponse =
  /** status 200  */ UserResponseDto;
export type UsersControllerFindOneApiArg = {
  email: string;
};
export type UserResponseDto = {
  firstName: string;
  lastName: string;
};
export type CreateUserDto = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};
export const {
  useUsersControllerFindAllQuery,
  useUsersControllerCreateMutation,
  useUsersControllerFindOneQuery,
} = injectedRtkApi;
