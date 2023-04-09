import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'

import CreateContainerPaper from '@/components/presentations/CreateContainerPaper'
import LayoutTable from '@/components/presentations/LayoutTable'
import TableContainer from '@/components/presentations/TableContainer'
import TableHeader from '@/components/presentations/TableHeader'
import LoadingCircular from '@/components/presentations/atoms/LoadingCircular'
import { TAB_TYPE } from '@/constant/spreadsheet'

import { useHooks } from './hooks'

type Props = { id?: string }

const UserInformation = ({ id }: Props) => {
  const { colums, rows, goToNew, goToEdit, isLoading } = useHooks({
    id,
  })
  const isNew = !id

  if (isLoading) return <LoadingCircular />

  const actions = [
    {
      icon: EditIcon,
      onClick: () => goToEdit(TAB_TYPE.Info),
      isHidden: isNew,
    },
    {
      icon: DeleteIcon,
      onClick: () => {
        // TODO: userInfofmation削除
      },
      isHidden: isNew,
    },
  ]

  return (
    <LayoutTable>
      <TableHeader title='基本情報' actions={actions} />
      {isNew ? (
        <CreateContainerPaper
          label='基本情報を作成'
          onMove={() => goToNew(TAB_TYPE.Info)}
        />
      ) : (
        <TableContainer colums={colums} rows={rows} />
      )}
    </LayoutTable>
  )
}

export default UserInformation
