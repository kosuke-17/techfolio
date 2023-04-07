import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { GENDER } from '@/constant/user-information'
import { useMe } from '@/hooks/api/user'
import { useUserInformation } from '@/hooks/api/user-information'
import { useSnackbar } from '@/hooks/useSnackbar'
import { getErrorMessage } from '@/lib/error'
import { enhancedApi } from '@/store/api/codegen/user-information'
import { requiredString, requiredNumber } from '@/zod/common'

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

export const useHooks = () => {
  const router = useRouter()
  const { me } = useMe()
  const id = me?.userInformation?.id
  const { setSnackbarProps } = useSnackbar()
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
      setSnackbarProps({ open: true, message: '作成しました' })
    } catch (e) {
      setSnackbarProps({
        open: true,
        severity: 'error',
        message: getErrorMessage(e),
      })
    }
  }

  const update = async (updateUserInformationDto: DefaultValues) => {
    if (!id) return
    try {
      await updateMutation({ id, updateUserInformationDto }).unwrap()
      router.push('/spread-sheet')

      setSnackbarProps({ open: true, message: '更新しました' })
    } catch (e) {
      setSnackbarProps({
        open: true,
        severity: 'error',
        message: getErrorMessage(e),
      })
    }
  }

  return {
    isNew: !id,
    isLoading: !userInformation,
    control,
    onSubmit: handleSubmit(!userInformation?.id ? create : update),
  }
}
