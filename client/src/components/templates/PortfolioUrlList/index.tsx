import LayoutTable from '@/components/presentations/LayoutTable'
import TableHeader from '@/components/presentations/TableHeader'
import TableContainer from '@/components/presentations/TableContainer'
import type { TabType } from '@/components/templates/SpreadSheetEditForm/hooks'

import { useHooks } from './hooks'

type Props = { tabType: TabType }

const PortfolioUrlList = ({ tabType }: Props) => {
  const { colums, rows, goToEdit } = useHooks({ tabType })
  return (
    <LayoutTable>
      <TableHeader title='ポートフォリオ' onClick={goToEdit} />
      <TableContainer colums={colums} rows={rows} />
    </LayoutTable>
  )
}

export default PortfolioUrlList
