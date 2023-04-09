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
  }),
  overrideExisting: false,
})
export { injectedRtkApi as enhancedApi }
export type PortfoliosControllerUpsertApiResponse = unknown
export type PortfoliosControllerUpsertApiArg = {
  upsertPortfolioDto: UpsertPortfolioDto
}
export type PortfolioForUpsert = {
  id: string
  name?: string | null
  url?: string | null
}
export type UpsertPortfolioDto = {
  portfolios: PortfolioForUpsert[]
}
export const { usePortfoliosControllerUpsertMutation } = injectedRtkApi
