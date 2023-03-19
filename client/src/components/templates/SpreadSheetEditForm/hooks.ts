import { useRouter } from 'next/router'
import { SyntheticEvent } from 'react'

export type TabType = 'info' | 'portfolio' | 'skill'

export const useHooks = () => {
  const router = useRouter()
  const tabType = router.query.type as TabType
  // TODO:labelはバックエンドから渡したい
  const tabs = [
    { label: '基本情報', value: 'info' },
    { label: 'ポートフォリオ', value: 'portfolio' },
    { label: 'スキル要約', value: 'skill' },
  ]

  const handleChange = (_: SyntheticEvent, selectedTabType: TabType) => {
    router.push({ query: { type: selectedTabType } })
  }

  const onGoToBack = () => {
    router.push({ pathname: '/spread-sheet' })
  }
  return {
    tabs,
    value: tabType,
    onGoToBack,
    handleChange,
  }
}
