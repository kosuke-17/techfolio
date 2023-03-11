import EditIcon from '@mui/icons-material/Edit'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'

import IconButton from '@/components/presentations/atoms/IconButton'
import TableContainer from '@/components/presentations/TableContainer'

const StyledUserInformation = styled(Stack)(({ theme }) => ({
  height: 600,
  paddingTop: theme.spacing(2),
}))

const StyledTableHeader = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(2),
  display: 'flex',
  justifyContent: 'space-between',
}))

const UserInformation = () => {
  const colums = [{ name: '項目名' }, { name: '内容' }]
  const rows = [
    { name: 'スタッフID', content: 'FR-204-2442' },
    { name: '年齢', content: '20代前半' },
    { name: '性別', content: '男' },
    { name: '最寄駅', content: '西武新宿線下落合駅' },
    { name: '稼働開始日', content: '応相談' },
    { name: 'エンジニア歴', content: '1年5ヶ月' },
    { name: 'IT全体歴', content: '1年8ヶ月' },
  ]
  return (
    <StyledUserInformation spacing={2}>
      <StyledTableHeader>
        <Typography variant='h5'>基本情報</Typography>
        <IconButton
          icon={EditIcon}
          iconSx={{ color: 'common.black', fontSize: '16px' }}
        />
      </StyledTableHeader>
      <TableContainer colums={colums} rows={rows} />
    </StyledUserInformation>
  )
}

export default UserInformation
