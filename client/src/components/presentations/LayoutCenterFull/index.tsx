import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const StyledPageLayout = styled(Box)(() => ({
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}))

const LayoutCenterFull: FC<Props> = ({ children }) => {
  return <StyledPageLayout>{children}</StyledPageLayout>
}

export default LayoutCenterFull
