import TableHeader from '@/components/presentations/TableHeader'
import LayoutTable from '@/components/presentations/LayoutTable'
import SkillTableContainer from '@/components/presentations/SkillTableContainer'
import type { TabType } from '@/components/templates/SpreadSheetEditForm/hooks'

import { useHooks } from './hooks'

type Props = { tabType: TabType }

const SkillInformation = ({ tabType }: Props) => {
  const { colums, rows, goToEdit } = useHooks({ tabType })

  return (
    <LayoutTable>
      <TableHeader title='スキル要約' onClick={goToEdit} />
      <SkillTableContainer colums={colums} rows={rows} />
    </LayoutTable>
  )
}

export default SkillInformation
