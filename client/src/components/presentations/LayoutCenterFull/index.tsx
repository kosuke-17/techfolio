import { FC, ReactNode } from 'react'
import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'

type Props = {
  children: ReactNode
}

const StyledPageLayout = styled(Box)(({ theme }) => ({
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}))

const LayoutCenterFull: FC<Props> = ({ children }) => {
  return <StyledPageLayout>{children}</StyledPageLayout>
}

export default LayoutCenterFull
