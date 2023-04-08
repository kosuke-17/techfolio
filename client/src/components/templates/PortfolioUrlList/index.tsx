import CreateContainerPaper from '@/components/presentations/CreateContainerPaper'
import LayoutTable from '@/components/presentations/LayoutTable'
import TableContainer from '@/components/presentations/TableContainer'
import TableHeader from '@/components/presentations/TableHeader'

import { useHooks } from './hooks'

type Props = {
  id?: string
}

const PortfolioUrlList = ({ id }: Props) => {
  const tabType = 'portfolio'
  const { colums, rows, goToNew, goToEdit } = useHooks()
  const isNew = !id
  return (
    <LayoutTable>
      <TableHeader title='ポートフォリオ' onClick={() => goToEdit(tabType)} />
      {isNew ? (
        <CreateContainerPaper
          label='ポートフォリオを作成'
          onMove={() => goToNew(tabType)}
        />
      ) : (
        <TableContainer colums={colums} rows={rows} />
      )}
    </LayoutTable>
  )
}

export default PortfolioUrlList
