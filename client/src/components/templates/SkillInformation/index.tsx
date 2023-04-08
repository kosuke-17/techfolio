import CreateContainerPaper from '@/components/presentations/CreateContainerPaper'
import LayoutTable from '@/components/presentations/LayoutTable'
import SkillTableContainer from '@/components/presentations/SkillTableContainer'
import TableHeader from '@/components/presentations/TableHeader'

import { useHooks } from './hooks'

type Props = {
  id?: string
}

const SkillInformation = ({ id }: Props) => {
  const tabType = 'skill'
  const { colums, rows, goToNew, goToEdit } = useHooks()
  const isNew = !id

  return (
    <LayoutTable>
      <TableHeader title='スキル要約' onClick={() => goToEdit(tabType)} />
      {isNew ? (
        <CreateContainerPaper
          label='スキル要約を作成'
          onMove={() => goToNew(tabType)}
        />
      ) : (
        <SkillTableContainer colums={colums} rows={rows} />
      )}
    </LayoutTable>
  )
}

export default SkillInformation
