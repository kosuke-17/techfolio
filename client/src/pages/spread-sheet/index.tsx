import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

import SpreadSheet from '@/components/templates/SpreadSheet'
import ProfileCard from '@/components/templates/ProfileCard'

const SpreadSheetPage = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid item xs={3} md={2}>
          <Box />
        </Grid>
        <Grid item xs={6} md={7}>
          <SpreadSheet />
        </Grid>
        <Grid item xs={3} md={3}>
          <ProfileCard />
        </Grid>
      </Grid>
    </Box>
  )
}

export default SpreadSheetPage
