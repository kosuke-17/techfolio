import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'

type Props = {
  label: string
  onMove: () => void
}

const CreateContainerPaper = ({ label, onMove }: Props) => {
  return (
    <Paper
      sx={{
        height: 60,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      elevation={2}
    >
      <Button variant='contained' onClick={onMove}>
        {label}
      </Button>
    </Paper>
  )
}

export default CreateContainerPaper
