import { styled } from '@mui/material/styles'
import { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const StyledLayoutMain = styled('main')(({ theme }) => ({
  minWidth: '100vw',
  minHeight: '100vh',
  backgroundColor: theme.palette.primary.light,
}))

const LayoutMain: FC<Props> = ({ children }) => {
  return <StyledLayoutMain>{children}</StyledLayoutMain>
}

export default LayoutMain
