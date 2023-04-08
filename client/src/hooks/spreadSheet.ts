import { useRouter } from 'next/router'

export type TabType = 'info' | 'portfolio' | 'skill'

export const useSpreadSheet = () => {
  const router = useRouter()

  const goToNew = (tabType: TabType) => {
    router.push({
      pathname: `/spread-sheet/new`,
      query: { type: tabType },
    })
  }

  const goToEdit = (tabType: TabType) => {
    router.push({
      pathname: `/spread-sheet/edit`,
      query: { type: tabType },
    })
  }

  return { goToNew, goToEdit }
}
