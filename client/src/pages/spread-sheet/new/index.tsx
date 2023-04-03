import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

import SpreadSheetEditForm from '@/components/templates/SpreadSheetEditForm'

const SpreadSheetEditPage = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid item xs={3} md={3}>
          <Box />
        </Grid>
        <Grid item xs={6} md={6}>
          <SpreadSheetEditForm />
        </Grid>
        <Grid item xs={3} md={3}>
          <Box />
        </Grid>
      </Grid>
    </Box>
  )
}

export default SpreadSheetEditPage
