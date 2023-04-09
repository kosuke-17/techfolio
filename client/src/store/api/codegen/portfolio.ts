import { baseApi as api } from '../../baseApi'

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    portfoliosControllerCreate: build.mutation<
      PortfoliosControllerCreateApiResponse,
      PortfoliosControllerCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/api/portfolios`,
        method: 'POST',
        body: queryArg.createPortfolioDto,
      }),
    }),
  }),
  overrideExisting: false,
})
export { injectedRtkApi as enhancedApi }
export type PortfoliosControllerCreateApiResponse = unknown
export type PortfoliosControllerCreateApiArg = {
  createPortfolioDto: CreatePortfolioDto
}
export type CreatePortfolioDto = {
  name?: string | null
  url?: string | null
}
export const { usePortfoliosControllerCreateMutation } = injectedRtkApi
