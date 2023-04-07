import { SxProps, Theme } from '@mui/material'
import MuiLink from '@mui/material/Link'
import NextLink from 'next/link'
import { FC, ReactNode } from 'react'

type Props = {
  href: string
  children: ReactNode
  sx?: SxProps<Theme>
}

const Link: FC<Props> = ({ href, sx, children }) => {
  return (
    <MuiLink href={href} component={NextLink} sx={{ ...sx }}>
      {children}
    </MuiLink>
  )
}
export default Link
