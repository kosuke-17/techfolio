import TableContainer from '@/components/presentations/TableContainer'
import TableHeader from '@/components/presentations/TableHeader'
import LayoutTable from '@/components/presentations/LayoutTable'
import { useHooks } from './hooks'

const UserInformation = () => {
  const { colums, rows, goToEdit } = useHooks()
  return (
    <LayoutTable>
      <TableHeader title='基本情報' onClick={goToEdit} />
      <TableContainer colums={colums} rows={rows} />
    </LayoutTable>
  )
}

export default UserInformation
