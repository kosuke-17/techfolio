import { useRouter } from 'next/router'
import { SyntheticEvent } from 'react'

import { TabType } from '@/constant/spreadsheet'

export const useSpreadSheet = () => {
  const router = useRouter()

  /* クリックされたtabTypeの作成ページに遷移 */
  const goToNew = (tabType: TabType) => {
    router.push({
      pathname: `/spread-sheet/new`,
      query: { type: tabType },
    })
  }

  /* クリックされたtabTypeの編集ページに遷移 */
  const goToEdit = (tabType: TabType) => {
    router.push({
      pathname: `/spread-sheet/edit`,
      query: { type: tabType },
    })
  }

  /* スプレッドシート画面に戻る */
  const goToBack = () => {
    router.push({ pathname: '/spread-sheet' })
  }

  /* 指定されているqueryのタイプを変更 */
  const onChangeTabType = (_: SyntheticEvent, selectedTabType: TabType) => {
    router.push({ query: { type: selectedTabType } })
  }

  return {
    tabType: router.query.type as unknown as TabType,
    goToNew,
    goToEdit,
    goToBack,
    onChangeTabType,
  }
}
