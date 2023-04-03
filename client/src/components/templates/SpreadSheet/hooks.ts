import { useMe } from '@/hooks/api/user'

export const useHooks = () => {
  const { me } = useMe()
  const download = () => {
    console.log('ダウンロード処理')
  }

  return {
    download,
    userInformationId: me?.userInformation?.id,
  }
}
