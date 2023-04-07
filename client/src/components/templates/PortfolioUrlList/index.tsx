import LayoutTable from '@/components/presentations/LayoutTable'
import TableContainer from '@/components/presentations/TableContainer'
import TableHeader from '@/components/presentations/TableHeader'
import type { TabType } from '@/components/templates/SpreadSheetEditForm/hooks'

import { useHooks } from './hooks'

type Props = { id?: string; tabType: TabType }

const PortfolioUrlList = (props: Props) => {
  const { colums, rows, goToEdit } = useHooks(props)
  return (
    <LayoutTable>
      <TableHeader title='ポートフォリオ' onClick={goToEdit} />
      <TableContainer colums={colums} rows={rows} />
    </LayoutTable>
  )
}

export default PortfolioUrlList
