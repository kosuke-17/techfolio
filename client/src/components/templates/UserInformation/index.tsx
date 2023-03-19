import TableContainer from '@/components/presentations/TableContainer'
import TableHeader from '@/components/presentations/TableHeader'
import LayoutTable from '@/components/presentations/LayoutTable'
import type { TabType } from '@/components/templates/SpreadSheetEditForm/hooks'

import { useHooks } from './hooks'

type Props = { tabType: TabType }

const UserInformation = ({ tabType }: Props) => {
  const { colums, rows, goToEdit } = useHooks({ tabType })
  return (
    <LayoutTable>
      <TableHeader title='基本情報' onClick={goToEdit} />
      <TableContainer colums={colums} rows={rows} />
    </LayoutTable>
  )
}

export default UserInformation
