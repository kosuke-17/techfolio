import { FC, ReactNode } from 'react'
import { styled } from '@mui/material/styles'
import { Box, SxProps } from '@mui/material'

type Props = {
  children: ReactNode
  sx?: SxProps
}

const StyledLayout = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}))

const StyledContent = styled(Box)(() => ({
  width: '50%',
}))

const ContentCenter: FC<Props> = ({ sx, children }) => {
  return (
    <StyledLayout>
      <StyledContent sx={sx}>{children}</StyledContent>
    </StyledLayout>
  )
}

export default ContentCenter
