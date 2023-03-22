import { z } from 'zod'
import { useRouter } from 'next/router'
import { SyntheticEvent } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { requiredString, requiredNumber, requiredDate } from '@/zod/common'
import { enhancedApi } from '@/store/api/codegen/user-information'
import { GENDER } from '@/constant/user-information'

export type TabType = 'info' | 'portfolio' | 'skill'

const schema = z.object({
  stuffId: requiredString,
  age: requiredNumber,
  gender: z.enum([GENDER.MALE, GENDER.FEMALE]),
  nearestStation: requiredString,
  startWorkDate: requiredString,
  seExpAmount: requiredNumber,
  pgExpAmount: requiredNumber,
  itExpAmount: requiredNumber,
})
export type DefaultValues = z.infer<typeof schema>

export const useHooks = (id?: string) => {
  const router = useRouter()
  const tabType = router.query.type as TabType
  // TODO:labelはバックエンドから渡したい
  const tabs = [
    { label: '基本情報', value: 'info' },
    { label: 'ポートフォリオ', value: 'portfolio' },
    { label: 'スキル要約', value: 'skill' },
  ]
  const [createMutation] =
    enhancedApi.useUserInformationsControllerCreateMutation()
  const [updateMutation] =
    enhancedApi.useUserInformationsControllerUpdateMutation()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<DefaultValues>({
    resolver: zodResolver(schema),
  })

  const create = async (createUserInformationDto: DefaultValues) => {
    try {
      await createMutation({ createUserInformationDto }).unwrap()
      router.push('/spread-sheet')
    } catch (e) {
      console.error(e)
    }
  }

  const update = async (updateUserInformationDto: DefaultValues) => {
    if (!id) return
    try {
      await updateMutation({ id, updateUserInformationDto }).unwrap()
      router.push('/spread-sheet')
    } catch (e) {
      console.error(e)
    }
  }

  const handleChange = (_: SyntheticEvent, selectedTabType: TabType) => {
    router.push({ query: { type: selectedTabType } })
  }

  const onGoToBack = () => {
    router.push({ pathname: '/spread-sheet' })
  }
  return {
    tabs,
    value: tabType,
    control,
    onSubmit: handleSubmit(!id ? create : update),
    onGoToBack,
    handleChange,
  }
}
