import React, { FC } from 'react'
import MuiOutlinedInput, {
  OutlinedInputProps,
} from '@mui/material/OutlinedInput'
import { styled } from '@mui/material/styles'

type Props = OutlinedInputProps & {
  id: string
  error: boolean
  readOnly: boolean
}

const StyledMuiOutlinedInput = styled(MuiOutlinedInput)(({ theme, error }) => ({
  borderRadius: theme.shape.borderRadius,
  '& .MuiOutlinedInput-notchedOutline': error
    ? null
    : { border: `1px solid #e0e0e0` },
  '& .MuiOutlinedInput-input': { padding: theme.spacing(1) },
  '& .MuiOutlinedInput-input:focus': {
    border: `1px solid #e0e0e0`,
    borderRadius: theme.shape.borderRadius,
  },
}))

const OutlinedInput = React.forwardRef<HTMLInputElement, Props>(
  function OutlinedInput({ id, error, readOnly, ...rest }, ref) {
    return (
      <StyledMuiOutlinedInput
        id={id}
        error={error}
        ref={ref}
        readOnly={readOnly}
        {...rest}
      />
    )
  }
)
export default OutlinedInput
