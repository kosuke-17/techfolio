export const useHooks = () => {
  const colums = [{ name: 'URL名' }, { name: 'Link' }]
  const rows = [
    { name: 'Github個人', content: 'https://github.com/kosuke-17' },
    { name: 'Github会社', content: 'https://github.com/tamura17' },
    { name: 'ブログ投稿サイト', content: 'https://github.com/kosuke-17/Qiish' },
  ]
  const goToEdit = () => {
    console.log('ポートフォリオ編集ページに遷移')
  }

  return {
    colums,
    rows,
    goToEdit,
  }
}
