import LayoutTable from '@/components/presentations/LayoutTable'
import TableHeader from '@/components/presentations/TableHeader'
import TableContainer from '@/components/presentations/TableContainer'
import { useHooks } from './hooks'

const PortfolioUrlList = () => {
  const { colums, rows, goToEdit } = useHooks()
  return (
    <LayoutTable>
      <TableHeader title='ポートフォリオ' onClick={goToEdit} />
      <TableContainer colums={colums} rows={rows} />
    </LayoutTable>
  )
}

export default PortfolioUrlList
