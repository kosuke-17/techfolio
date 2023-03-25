import { enhancedApi } from '@/store/api/codegen/user-information'

export const useUserInformation = ({ id }: { id?: string }) => {
  // skip:trueであればqueryを実行しないため、idは必ず存在する
  const { data } = enhancedApi.useUserInformationsControllerFindOneQuery(
    { id } as { id: string },
    { skip: !id }
  )

  const userInformation = data || null

  return { userInformation }
}
