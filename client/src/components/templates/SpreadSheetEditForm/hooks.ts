import { z } from 'zod'
import { useRouter } from 'next/router'
import { SyntheticEvent, useEffect } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { requiredString, requiredNumber } from '@/zod/common'
import { enhancedApi } from '@/store/api/codegen/user-information'
import { GENDER } from '@/constant/user-information'
import { useUserInformation } from '@/hooks/api/user-information'

export type TabType = 'info' | 'portfolio' | 'skill'

const schema = z.object({
  stuffId: requiredString,
  age: requiredNumber,
  gender: z.enum([GENDER.MALE.VALUE, GENDER.FEMALE.VALUE]),
  nearestStation: requiredString,
  startWorkDate: requiredString,
  seExpAmount: requiredNumber,
  pgExpAmount: requiredNumber,
  itExpAmount: requiredNumber,
})
export type DefaultValues = z.infer<typeof schema>

export const useHooks = ({ id }: { id: string }) => {
  const router = useRouter()
  const tabType = router.query.type as TabType
  // TODO:labelはバックエンドから渡したい
  const tabs = [
    { label: '基本情報', value: 'info' },
    { label: 'ポートフォリオ', value: 'portfolio' },
    { label: 'スキル要約', value: 'skill' },
  ]
  const { userInformation } = useUserInformation({ id })

  const [createMutation] =
    enhancedApi.useUserInformationsControllerCreateMutation()
  const [updateMutation] =
    enhancedApi.useUserInformationsControllerUpdateMutation()

  const defaultValues = {
    stuffId: '',
    age: 0,
    gender: GENDER.MALE.VALUE,
    nearestStation: '',
    startWorkDate: '',
    seExpAmount: 0,
    pgExpAmount: 0,
    itExpAmount: 0,
  }

  const { control, handleSubmit, setValue } = useForm<DefaultValues>({
    resolver: zodResolver(schema),
    defaultValues,
  })

  useEffect(() => {
    if (!userInformation) return
    setValue('stuffId', userInformation.stuffId)
    setValue('age', userInformation.age)
    setValue('gender', userInformation.gender)
    setValue('nearestStation', userInformation.nearestStation)
    setValue('startWorkDate', userInformation.startWorkDate)
    setValue('seExpAmount', userInformation.seExpAmount)
    setValue('pgExpAmount', userInformation.pgExpAmount)
    setValue('itExpAmount', userInformation.itExpAmount)
  }, [userInformation, setValue])

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
    userInformation,
    control,
    onSubmit: handleSubmit(!userInformation?.id ? create : update),
    onGoToBack,
    handleChange,
  }
}
