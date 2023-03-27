import { useRouter } from 'next/router'

import type { TabType } from '@/components/templates/SpreadSheetEditForm/hooks'

type Props = { id?: string; tabType: TabType }

export const useHooks = ({ id, tabType }: Props) => {
  const router = useRouter()
  const colums = [{ name: '項目名' }, { name: '内容' }]
  const rows = [
    { name: '動作環境(OS)', contents: ['Mac', 'Linux'] },
    { name: 'フレームワーク', contents: ['Next.js'] },
    {
      name: '言語',
      contents: [
        'JavaScript',
        'TypeScript',
        'JavaScript',
        'TypeScript',
        'JavaScript',
        'TypeScript',
      ],
    },
    { name: 'ライブラリ', contents: ['React.js'] },
    { name: 'ツール・その他', contents: ['Github', 'Slack'] },
    { name: '担当開発工程', contents: ['開発', '単体テスト'] },
  ]
  const goToEdit = () => {
    router.push({
      pathname: `/spread-sheet/${id}/edit`,
      query: { type: tabType },
    })
  }

  return {
    colums,
    rows,
    goToEdit,
  }
}
