import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

const LoadingCircular = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'cenrer',
      }}
    >
      <CircularProgress />
    </Box>
  )
}

export default LoadingCircular
