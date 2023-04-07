import { Box, SxProps } from '@mui/material'
import { styled } from '@mui/material/styles'
import { FC, ReactNode } from 'react'

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
  width: '90%',
}))

const ContentCenter: FC<Props> = ({ sx, children }) => {
  return (
    <StyledLayout>
      <StyledContent sx={sx}>{children}</StyledContent>
    </StyledLayout>
  )
}

export default ContentCenter
