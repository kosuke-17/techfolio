import { useRouter } from 'next/router'

import type { TabType } from '@/components/templates/SpreadSheetEditForm/hooks'

type Props = { id?: string; tabType: TabType }

export const useHooks = ({ id, tabType }: Props) => {
  const router = useRouter()
  const colums = [{ name: 'URL名' }, { name: 'Link' }]
  const rows = [
    { name: 'Github個人', content: 'https://github.com/kosuke-17' },
    { name: 'Github会社', content: 'https://github.com/tamura17' },
    { name: 'ブログ投稿サイト', content: 'https://github.com/kosuke-17/Qiish' },
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
