import { baseApi as api } from '../../baseApi'

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    portfoliosControllerUpsert: build.mutation<
      PortfoliosControllerUpsertApiResponse,
      PortfoliosControllerUpsertApiArg
    >({
      query: (queryArg) => ({
        url: `/api/portfolios`,
        method: 'POST',
        body: queryArg.upsertPortfolioDto,
      }),
    }),
    portfoliosControllerFindAllByLoginUser: build.query<
      PortfoliosControllerFindAllByLoginUserApiResponse,
      PortfoliosControllerFindAllByLoginUserApiArg
    >({
      query: () => ({ url: `/api/portfolios` }),
    }),
  }),
  overrideExisting: false,
})
export { injectedRtkApi as enhancedApi }
export type PortfoliosControllerUpsertApiResponse = unknown
export type PortfoliosControllerUpsertApiArg = {
  upsertPortfolioDto: UpsertPortfolioDto
}
export type PortfoliosControllerFindAllByLoginUserApiResponse =
  /** status 200  */ FindAllByLoginUserPortfolioResponseDto
export type PortfoliosControllerFindAllByLoginUserApiArg = void
export type PortfolioForUpsert = {
  id: string
  name?: string | null
  url?: string | null
}
export type UpsertPortfolioDto = {
  portfolios: PortfolioForUpsert[]
}
export type PotfolioFindAllByLoginUser = {
  id: string
  name?: string | null
  url?: string | null
}
export type FindAllByLoginUserPortfolioResponseDto = {
  data: PotfolioFindAllByLoginUser[]
}
export const {
  usePortfoliosControllerUpsertMutation,
  usePortfoliosControllerFindAllByLoginUserQuery,
} = injectedRtkApi
