import { useRouter } from 'next/router'
import { useMemo } from 'react'

import type { TabType } from '@/components/templates/SpreadSheetEditForm/hooks'
import { GENDER } from '@/constant/user-information'
import { useUserInformation } from '@/hooks/api/user-information'
import { getExpAmountLabel } from '@/lib/user-information'

type Props = { id?: string }
type RowType = { name: string; content: string }

export const useHooks = ({ id }: Props) => {
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
      { name: '最寄駅', content: nearestStation },
      { name: '稼働開始日', content: startWorkDate },
      { name: 'SE経験', content: getExpAmountLabel(seExpAmount) },
      { name: 'PG・作業員経験', content: getExpAmountLabel(pgExpAmount) },
      { name: 'IT全体経験', content: getExpAmountLabel(itExpAmount) },
    ]
  }, [userInformation])

  const colums = [{ name: '項目名' }, { name: '内容' }]

  const goToInfoNewForm = (tabType: TabType) => {
    router.push({
      pathname: `/spread-sheet/new`,
      query: { type: tabType },
    })
  }

  const goToInfoEditForm = (tabType: TabType) => {
    router.push({
      pathname: `/spread-sheet/edit`,
      query: { type: tabType },
    })
  }

  return {
    colums,
    rows,
    goToInfoEditForm,
    goToInfoNewForm,
    isLoading: id && !userInformation,
  }
}
