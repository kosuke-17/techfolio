export const useHooks = () => {
  const download = () => {
    console.log('ダウンロード処理')
  }

  return {
    download,
  }
}
