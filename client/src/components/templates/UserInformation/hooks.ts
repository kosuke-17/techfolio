import { useRouter } from 'next/router'

import type { TabType } from '@/components/templates/SpreadSheetEditForm/hooks'
import { useUserInformation } from '@/hooks/api/user-information'
import { GENDER } from '@/constant/user-information'
import { useMemo } from 'react'
import { getExpAmountLabel } from '@/lib/theme/user-information'

type Props = { id?: string; tabType: TabType }
type RowType = { name: string; content: string }

export const useHooks = ({ id, tabType }: Props) => {
  const router = useRouter()
  const { userInformation } = useUserInformation({ id })

  const rows: RowType[] = useMemo(() => {
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
      { name: '最寄駅', content: nearestStation + '駅' },
      { name: '稼働開始日', content: startWorkDate },
      { name: 'SE経験', content: getExpAmountLabel(seExpAmount) },
      { name: 'PG・作業員経験', content: getExpAmountLabel(pgExpAmount) },
      { name: 'IT全体経験', content: getExpAmountLabel(itExpAmount) },
    ]
  }, [userInformation])

  const colums = [{ name: '項目名' }, { name: '内容' }]

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
