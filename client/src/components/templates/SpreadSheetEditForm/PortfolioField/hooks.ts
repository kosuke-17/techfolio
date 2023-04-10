import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/router'
import { ChangeEvent, useState } from 'react'
import { useForm } from 'react-hook-form'
import { v4 as uuid } from 'uuid'
import { z } from 'zod'

import { useMe } from '@/hooks/api/user'
import { useSnackbar } from '@/hooks/useSnackbar'
import { getErrorMessage } from '@/lib/error'
import { enhancedApi } from '@/store/api/codegen/portfolio'
import { optionalString } from '@/zod/common'

const schema = z.array(
  z.object({
    id: optionalString,
    name: optionalString,
    url: optionalString,
  })
)
export type DefaultValues = z.infer<typeof schema>

export const useHooks = () => {
  const router = useRouter()
  const { me } = useMe()
  const id = me?.id
  const { setSnackbarProps } = useSnackbar()
  const [portfolioInputs, setPortfolioInputs] = useState([
    { id: uuid() as string, name: '', url: '' },
  ])

  const handleAddPortfolioInput = () => {
    setPortfolioInputs([...portfolioInputs, { id: uuid(), name: '', url: '' }])
  }

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    target: { id: string; type: 'name' | 'url' }
  ) => {
    const inputs = portfolioInputs.map((pi) => {
      if (pi.id === target.id && target.type === 'name') {
        return { ...pi, name: e.target.value }
      }

      if (pi.id === target.id && target.type === 'url') {
        return { ...pi, url: e.target.value }
      }

      return pi
    })

    /// 配列だから、特定のオブジェクト番目のnameを変えないといけない
    setPortfolioInputs(inputs)
  }

  const [upsertMutation] = enhancedApi.usePortfoliosControllerUpsertMutation()

  const { control, handleSubmit } = useForm<DefaultValues>({
    resolver: zodResolver(schema),
    defaultValues: [{ name: '', url: '' }],
  })

  const upsert = async (portfolios: DefaultValues) => {
    try {
      await upsertMutation({ upsertPortfolioDto: { portfolios } }).unwrap()
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
    control,
    portfolioInputs,
    handleAddPortfolioInput,
    handleInputChange,
    onSubmit: handleSubmit(upsert),
  }
}
