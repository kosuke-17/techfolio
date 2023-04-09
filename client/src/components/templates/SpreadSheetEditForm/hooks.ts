import { TAB_TYPE } from '@/constant/spreadsheet'
import { useSpreadSheet } from '@/hooks/spreadSheet'

export const useHooks = () => {
  const { tabType, goToBack, onChangeTabType } = useSpreadSheet()
  // TODO:labelはバックエンドから渡したい
  const tabs = [
    { label: '基本情報', value: TAB_TYPE.Info },
    { label: 'ポートフォリオ', value: TAB_TYPE.Portfolio },
    { label: 'スキル要約', value: TAB_TYPE.Skill },
  ]

  return {
    tabs,
    value: tabType,
    goToBack,
    onChangeTabType,
  }
}
