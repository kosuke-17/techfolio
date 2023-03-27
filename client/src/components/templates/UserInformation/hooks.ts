import { useRouter } from 'next/router'

import type { TabType } from '@/components/templates/SpreadSheetEditForm/hooks'
import { useMe } from '@/hooks/api/user'
import { useUserInformation } from '@/hooks/api/user-information'
import { GENDER } from '@/constant/user-information'
import { useMemo } from 'react'

type Props = { tabType: TabType }
type RowType = { name: string; content: string }

export const useHooks = ({ tabType }: Props) => {
  const router = useRouter()
  const { me } = useMe()
  const { userInformation } = useUserInformation({ id: me?.userInformation.id })

  const rows = useMemo(() => {
    if (!userInformation) return []
    const {
      stuffId,
      age,
      gender,
      nearestStation,
      startWorkDate,
      seExpAmount,
      pgExpAmount,
      itExpAmount,
    } = userInformation
    return [
      { name: 'スタッフID', content: stuffId },
      { name: '年齢', content: age.toString() },
      { name: '性別', content: GENDER[gender].LABEL },
      { name: '最寄駅', content: nearestStation },
      { name: '稼働開始日', content: startWorkDate },
      { name: 'SE経験', content: seExpAmount.toString() },
      { name: 'PG・作業員経験', content: pgExpAmount.toString() },
      { name: 'IT全体経験', content: itExpAmount.toString() },
    ]
  }, [userInformation])

  const colums = [{ name: '項目名' }, { name: '内容' }]

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
