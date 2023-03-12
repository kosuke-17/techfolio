import TableContainer from '@/components/presentations/TableContainer'
import TableHeader from '@/components/presentations/TableHeader'
import LayoutTable from '@/components/presentations/LayoutTable'

const UserInformation = () => {
  const colums = [{ name: '項目名' }, { name: '内容' }]
  const rows = [
    { name: 'スタッフID', content: 'FR-204-2442' },
    { name: '年齢', content: '20代前半' },
    { name: '性別', content: '男' },
    { name: '最寄駅', content: '西武新宿線下落合駅' },
    { name: '稼働開始日', content: '応相談' },
    { name: 'エンジニア歴', content: '1年5ヶ月' },
    { name: 'IT全体歴', content: '1年8ヶ月' },
  ]
  const goToEdit = () => {
    console.log('基本情報編集ページに遷移')
  }

  return (
    <LayoutTable>
      <TableHeader title='基本情報' onClick={goToEdit} />
      <TableContainer colums={colums} rows={rows} />
    </LayoutTable>
  )
}

export default UserInformation
