import { usePortfolioByLoginUser } from '@/hooks/api/potfolio'
import { useSpreadSheet } from '@/hooks/spreadSheet'

export const useHooks = () => {
  const { goToNew, goToEdit } = useSpreadSheet()
  const { portfolios } = usePortfolioByLoginUser()

  const colums = [{ name: 'URL名' }, { name: 'Link' }]
  const rows = portfolios.map((p) => ({
    name: p.name ?? '',
    content: p.url ?? '',
  }))

  return {
    colums,
    rows,
    goToNew,
    goToEdit,
  }
}
