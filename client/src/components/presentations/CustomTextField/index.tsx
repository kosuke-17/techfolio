import { FC } from 'react'
import { useController, Control, RegisterOptions } from 'react-hook-form'
import InputLabel from '@mui/material/InputLabel'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import { styled, SxProps } from '@mui/material/styles'
import FormHelperText from '@mui/material/FormHelperText'
import ErrorIcon from '@mui/icons-material/Error'

import OutlinedInput from '@/components/presentations//OutlinedInput'

type Props = {
  name: string
  control: Control<any>
  defaultValue?: string | number | Date
  label?: string
  placeholder?: string
  variant?: string
  readOnly?: boolean
  multiline?: boolean
  minRows?: number
  sx?: SxProps
  suffixLabel?: string
  format?: (v: string) => void
}

const StyledInputLabel = styled(InputLabel)(() => ({
  fontSize: 16,
  fontWeight: 700,
}))

const StyledOutlinedInputBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'end',
  position: 'relative',
  backgroundColor: theme.palette.common.white,
  marginTop: theme.spacing(2),
}))

const CustomTextField: FC<Props> = ({
  name,
  defaultValue,
  control,
  label,
  readOnly = false,
  suffixLabel,
  format,
  ...rest
}) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    defaultValue,
  })

  return (
    <FormControl variant='standard'>
      {label ? (
        <StyledInputLabel shrink htmlFor={name}>
          {label}
        </StyledInputLabel>
      ) : null}

      <StyledOutlinedInputBox>
        <OutlinedInput
          id={name}
          error={!!error}
          readOnly={readOnly}
          {...rest}
          {...field}
          onChange={(e) => {
            const v = e.target.value
            if (format) {
              field.onChange(format(v))
            }
          }}
        />
        {suffixLabel}
      </StyledOutlinedInputBox>

      {error ? (
        <FormHelperText error id={name}>
          <ErrorIcon sx={{ verticalAlign: 'middle' }} />
          {error.message}
        </FormHelperText>
      ) : null}
    </FormControl>
  )
}
export default CustomTextField
