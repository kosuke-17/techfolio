import { enhancedApi } from '@/store/api/codegen/portfolio'

export const usePortfolioByLoginUser = () => {
  const { data } = enhancedApi.usePortfoliosControllerFindAllByLoginUserQuery()
  const portfolios = data?.data ?? []
  return { portfolios }
}
