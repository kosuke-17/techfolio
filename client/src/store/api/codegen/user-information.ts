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
  useUserInformationsControllerUpdateMutation,
} = injectedRtkApi;
