import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'

import CreateContainerPaper from '@/components/presentations/CreateContainerPaper'
import LayoutTable from '@/components/presentations/LayoutTable'
import SkillTableContainer from '@/components/presentations/SkillTableContainer'
import TableHeader from '@/components/presentations/TableHeader'
import { TAB_TYPE } from '@/constant/spreadsheet'

import { useHooks } from './hooks'

type Props = {
  id?: string
}

const SkillInformation = ({ id }: Props) => {
  const { colums, rows, goToNew, goToEdit } = useHooks()
  const isNew = !id

  const actions = [
    {
      icon: EditIcon,
      onClick: () => goToEdit(TAB_TYPE.Skill),
      isHidden: isNew,
    },
    {
      icon: DeleteIcon,
      onClick: () => {
        // TODO: skill削除
      },
      isHidden: isNew,
    },
  ]

  return (
    <LayoutTable>
      <TableHeader title='スキル要約' actions={actions} />
      {isNew ? (
        <CreateContainerPaper
          label='スキル要約を作成'
          onMove={() => goToNew(TAB_TYPE.Skill)}
        />
      ) : (
        <SkillTableContainer colums={colums} rows={rows} />
      )}
    </LayoutTable>
  )
}

export default SkillInformation
