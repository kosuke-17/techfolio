import { useRouter } from 'next/router'

import type { TabType } from '@/components/templates/SpreadSheetEditForm/hooks'

type Props = { tabType: TabType }

export const useHooks = ({ tabType }: Props) => {
  const router = useRouter()
  const colums = [{ name: '項目名' }, { name: '内容' }]
  const rows = [
    { name: 'スタッフID', content: 'FR-204-2442' },
    { name: '年齢', content: '20代前半' },
    { name: '性別', content: '男' },
    { name: '最寄駅', content: '西武新宿線下落合駅' },
    { name: '稼働開始日', content: '応相談' },
    { name: 'エンジニア歴', content: '1年5ヶ月' },
    { name: 'IT全体歴', content: '1年8ヶ月' },
  ]
  const goToEdit = () => {
    router.push({
      pathname: '/spread-sheet/edit',
      query: { type: tabType },
    })
  }

  return {
    colums,
    rows,
    goToEdit,
  }
}
