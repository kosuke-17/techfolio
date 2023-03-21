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
export type CreateUserInformationDto = {
  stuffId: string;
  age: number;
  gender: object;
  nearestStation: string;
  startWorkDate: string;
  seExpAmount: number;
  pgExpAmount: number;
  itExpAmount: number;
};
export type UpdateUserInformationDto = {
  id: string;
  createdAt: string;
  updatedAt: string;
  stuffId: string;
  age: number;
  gender: number;
  nearestStation: number;
  startWorkDate: number;
  seExpAmount: number;
  pgExpAmount: number;
  itExpAmount: number;
};
export const {
  useUserInformationsControllerCreateMutation,
  useUserInformationsControllerUpdateMutation,
} = injectedRtkApi;
