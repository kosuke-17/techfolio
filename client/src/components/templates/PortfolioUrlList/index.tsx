import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'

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

  const actions = [
    {
      icon: EditIcon,
      onClick: () => goToEdit(tabType),
      isHidden: isNew,
    },
    {
      icon: DeleteIcon,
      onClick: () => {
        // TODO: portfolio削除
      },
      isHidden: isNew,
    },
  ]
  return (
    <LayoutTable>
      <TableHeader title='ポートフォリオ' actions={actions} />
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
