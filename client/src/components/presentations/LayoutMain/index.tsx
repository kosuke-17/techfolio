import { FC, ReactNode } from 'react'
import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'

type Props = {
  children: ReactNode
}

const StyledLayoutMain = styled('main')(({ theme }) => ({
  width: '100vw',
  height: '100vh',
  backgroundColor: theme.palette.primary.light,
}))

const LayoutMain: FC<Props> = ({ children }) => {
  return <StyledLayoutMain>{children}</StyledLayoutMain>
}

export default LayoutMain
