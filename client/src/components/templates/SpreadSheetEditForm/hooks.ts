import { useSpreadSheet } from '@/hooks/spreadSheet'

export const useHooks = () => {
  const { tabType, goToBack, onChangeTabType } = useSpreadSheet()
  // TODO:labelはバックエンドから渡したい
  const tabs = [
    { label: '基本情報', value: 'info' },
    { label: 'ポートフォリオ', value: 'portfolio' },
    { label: 'スキル要約', value: 'skill' },
  ]

  return {
    tabs,
    value: tabType,
    goToBack,
    onChangeTabType,
  }
}
