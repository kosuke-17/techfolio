import Paper from '@mui/material/Paper'
import { TableContainer as MUITableContainer } from '@mui/material'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import TableBody from '@mui/material/TableBody'

const TableContainer = (params: {
  colums: { name: string }[]
  rows: { name: string; content: string }[]
}) => {
  const { colums, rows } = params
  return (
    <MUITableContainer component={Paper} elevation={2}>
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
    </MUITableContainer>
  )
}

export default TableContainer
