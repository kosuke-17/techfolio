import TableContainer from '@/components/presentations/TableContainer'
import TableHeader from '@/components/presentations/TableHeader'
import LayoutTable from '@/components/presentations/LayoutTable'
import type { TabType } from '@/components/templates/SpreadSheetEditForm/hooks'

import { useHooks } from './hooks'
import LoadingCircular from '@/components/presentations/atoms/LoadingCircular'

type Props = { id?: string; tabType: TabType }

const UserInformation = (props: Props) => {
  const { colums, rows, goToEdit, isLoading } = useHooks(props)

  if (isLoading) return <LoadingCircular />

  return (
    <LayoutTable>
      <TableHeader title='基本情報' onClick={goToEdit} />
      <TableContainer colums={colums} rows={rows} />
    </LayoutTable>
  )
}

export default UserInformation
