import TableContainer from '@mui/material/TableContainer'
import EditIcon from '@mui/icons-material/Edit'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import TableBody from '@mui/material/TableBody'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import IconButton from '@/components/presentations/atoms/IconButton'
import Box from '@mui/material/Box'

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
      <TableContainer component={Paper} elevation={2}>
        <Table>
          <TableHead>
            <TableRow>
              {colums.map(({ name }) => (
                <TableCell key={name} sx={{ fontWeight: 'bold' }}>
                  {name}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, idx) => (
              <TableRow
                key={row.name}
                sx={{
                  bgcolor: idx % 2 === 0 ? 'primary.light' : null,
                }}
              >
                <TableCell component='th' scope='row'>
                  {row.name}
                </TableCell>
                <TableCell>{row.content}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </StyledUserInformation>
  )
}

export default UserInformation
