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
    portfoliosControllerFindAll: build.query<
      PortfoliosControllerFindAllApiResponse,
      PortfoliosControllerFindAllApiArg
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
export type PortfoliosControllerFindAllApiResponse =
  /** status 200  */ FindAllPortfolioResponseDto
export type PortfoliosControllerFindAllApiArg = void
export type PortfolioForUpsert = {
  id: string
  name?: string | null
  url?: string | null
}
export type UpsertPortfolioDto = {
  portfolios: PortfolioForUpsert[]
}
export type PotfolioFindAll = {
  id: string
  name?: string | null
  url?: string | null
}
export type FindAllPortfolioResponseDto = {
  data: PotfolioFindAll[]
}
export const {
  usePortfoliosControllerUpsertMutation,
  usePortfoliosControllerFindAllQuery,
} = injectedRtkApi
