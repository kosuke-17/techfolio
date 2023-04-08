import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'
import { FC } from 'react'

import { TabType } from '@/hooks/spreadSheet'

type Props = {
  children?: React.ReactNode
  tabType: TabType
  value: TabType
}

const StyledChildrenStack = styled(Stack)(({ theme }) => ({
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
}))

const TabPanel: FC<Props> = ({ children, value, tabType }) => {
  return (
    <Box
      role='tabpanel'
      hidden={value !== tabType}
      id={tabType}
      aria-labelledby={tabType}
    >
      {value === tabType && (
        <StyledChildrenStack spacing={2}>{children}</StyledChildrenStack>
      )}
    </Box>
  )
}

export default TabPanel
