import TableHeader from '@/components/presentations/TableHeader'
import LayoutTable from '@/components/presentations/LayoutTable'
import SkillTableContainer from '@/components/presentations/SkillTableContainer'

const SkillInformation = () => {
  const colums = [{ name: '項目名' }, { name: '内容' }]
  const rows = [
    { name: '動作環境(OS)', contents: ['Mac', 'Linux'] },
    { name: 'フレームワーク', contents: ['Next.js'] },
    {
      name: '言語',
      contents: [
        'JavaScript',
        'TypeScript',
        'JavaScript',
        'TypeScript',
        'JavaScript',
        'TypeScript',
      ],
    },
    { name: 'ライブラリ', contents: ['React.js'] },
    { name: 'ツール・その他', contents: ['Github', 'Slack'] },
    { name: '担当開発工程', contents: ['開発', '単体テスト'] },
  ]
  const goToEdit = () => {
    console.log('基本情報編集ページに遷移')
  }

  return (
    <LayoutTable>
      <TableHeader title='スキル要約' onClick={goToEdit} />
      <SkillTableContainer colums={colums} rows={rows} />
    </LayoutTable>
  )
}

export default SkillInformation
