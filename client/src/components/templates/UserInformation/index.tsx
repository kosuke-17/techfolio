import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import TableContainer from '@/components/presentations/TableContainer'
import TableHeader from '@/components/presentations/TableHeader'
import LayoutTable from '@/components/presentations/LayoutTable'
import type { TabType } from '@/components/templates/SpreadSheetEditForm/hooks'

import { useHooks } from './hooks'
import LoadingCircular from '@/components/presentations/atoms/LoadingCircular'

type Props = { id?: string; tabType: TabType }

const UserInformation = ({ id, tabType }: Props) => {
  const { colums, rows, goToInfoNewForm, goToInfoEditForm, isLoading } =
    useHooks({ id })
  const isNew = !id

  if (isLoading) return <LoadingCircular />

  return (
    <LayoutTable>
      <TableHeader
        title='基本情報'
        hiddenIcon={isNew}
        onClick={() => goToInfoEditForm(tabType)}
      />
      {isNew ? (
        <Paper elevation={2}>
          <Button onClick={() => goToInfoNewForm(tabType)}>
            基本情報を作成
          </Button>
        </Paper>
      ) : (
        <TableContainer colums={colums} rows={rows} />
      )}
    </LayoutTable>
  )
}

export default UserInformation
