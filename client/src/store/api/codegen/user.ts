import { baseApi as api } from "../../baseApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    usersControllerFindAll: build.query<
      UsersControllerFindAllApiResponse,
      UsersControllerFindAllApiArg
    >({
      query: () => ({ url: `/api/users` }),
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
export type UsersControllerFindOneApiResponse =
  /** status 200  */ UserResponseDto;
export type UsersControllerFindOneApiArg = {
  id: string;
};
export type UserResponseDto = {
  firstName: string;
  lastName: string;
};
export const {
  useUsersControllerFindAllQuery,
  useUsersControllerFindOneQuery,
} = injectedRtkApi;
