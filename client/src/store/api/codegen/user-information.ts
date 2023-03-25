import { baseApi as api } from "../../baseApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    userInformationsControllerCreate: build.mutation<
      UserInformationsControllerCreateApiResponse,
      UserInformationsControllerCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/api/user-informations`,
        method: "POST",
        body: queryArg.createUserInformationDto,
      }),
    }),
    userInformationsControllerFindOne: build.query<
      UserInformationsControllerFindOneApiResponse,
      UserInformationsControllerFindOneApiArg
    >({
      query: (queryArg) => ({ url: `/api/user-informations/${queryArg.id}` }),
    }),
    userInformationsControllerUpdate: build.mutation<
      UserInformationsControllerUpdateApiResponse,
      UserInformationsControllerUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/api/user-informations/${queryArg.id}`,
        method: "PUT",
        body: queryArg.updateUserInformationDto,
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as enhancedApi };
export type UserInformationsControllerCreateApiResponse = unknown;
export type UserInformationsControllerCreateApiArg = {
  createUserInformationDto: CreateUserInformationDto;
};
export type UserInformationsControllerFindOneApiResponse =
  /** status 200  */ UserInformationResponseDto;
export type UserInformationsControllerFindOneApiArg = {
  id: string;
};
export type UserInformationsControllerUpdateApiResponse = unknown;
export type UserInformationsControllerUpdateApiArg = {
  id: string;
  updateUserInformationDto: UpdateUserInformationDto;
};
export type Gender = "MALE" | "FEMALE";
export type CreateUserInformationDto = {
  stuffId: string;
  age: number;
  gender: Gender;
  nearestStation: string;
  startWorkDate: string;
  seExpAmount: number;
  pgExpAmount: number;
  itExpAmount: number;
};
export type UserInformationResponseDto = {
  id: string;
  createdAt: string;
  updatedAt: string;
  stuffId: string;
  age: number;
  gender: Gender;
  nearestStation: string;
  startWorkDate: string;
  seExpAmount: number;
  pgExpAmount: number;
  itExpAmount: number;
};
export type UpdateUserInformationDto = {
  stuffId: string;
  age: number;
  gender: Gender;
  nearestStation: string;
  startWorkDate: string;
  seExpAmount: number;
  pgExpAmount: number;
  itExpAmount: number;
};
export const {
  useUserInformationsControllerCreateMutation,
  useUserInformationsControllerFindOneQuery,
  useUserInformationsControllerUpdateMutation,
} = injectedRtkApi;
