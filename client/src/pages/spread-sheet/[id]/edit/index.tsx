import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

import SpreadSheetEditForm from '@/components/templates/SpreadSheetEditForm'
import { useRouter } from 'next/router'

const SpreadSheetEditPage = () => {
  const router = useRouter()
  const { id } = router.query as { id: string }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid item xs={3} md={3}>
          <Box />
        </Grid>
        <Grid item xs={6} md={6}>
          <SpreadSheetEditForm id={id} />
        </Grid>
        <Grid item xs={3} md={3}>
          <Box />
        </Grid>
      </Grid>
    </Box>
  )
}

export default SpreadSheetEditPage
