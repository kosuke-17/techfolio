import TableHeader from '@/components/presentations/TableHeader'
import LayoutTable from '@/components/presentations/LayoutTable'
import SkillTableContainer from '@/components/presentations/SkillTableContainer'
import { useHooks } from './hooks'

const SkillInformation = () => {
  const { colums, rows, goToEdit } = useHooks()

  return (
    <LayoutTable>
      <TableHeader title='スキル要約' onClick={goToEdit} />
      <SkillTableContainer colums={colums} rows={rows} />
    </LayoutTable>
  )
}

export default SkillInformation
