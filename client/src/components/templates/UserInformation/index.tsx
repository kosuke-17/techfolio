import CreateContainerPaper from '@/components/presentations/CreateContainerPaper'
import LayoutTable from '@/components/presentations/LayoutTable'
import TableContainer from '@/components/presentations/TableContainer'
import TableHeader from '@/components/presentations/TableHeader'
import LoadingCircular from '@/components/presentations/atoms/LoadingCircular'

import { useHooks } from './hooks'

type Props = { id?: string }

const UserInformation = ({ id }: Props) => {
  const tabType = 'info'
  const { colums, rows, goToNew, goToEdit, isLoading } = useHooks({
    id,
  })
  const isNew = !id

  if (isLoading) return <LoadingCircular />

  return (
    <LayoutTable>
      <TableHeader
        title='基本情報'
        hiddenIcon={isNew}
        onClick={() => goToEdit(tabType)}
      />
      {isNew ? (
        <CreateContainerPaper
          label='基本情報を作成'
          onMove={() => goToNew(tabType)}
        />
      ) : (
        <TableContainer colums={colums} rows={rows} />
      )}
    </LayoutTable>
  )
}

export default UserInformation
