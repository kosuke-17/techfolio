import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'
import type { ReactNode } from 'react'

const StyledLayoutTable = styled(Stack)(({ theme }) => ({
  paddingTop: theme.spacing(2),
}))

const LayoutTable = (params: { children: ReactNode }) => {
  const { children } = params
  return <StyledLayoutTable spacing={2}>{children}</StyledLayoutTable>
}

export default LayoutTable
