import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

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
