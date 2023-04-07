import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import { FC } from 'react'
import { Control, useController } from 'react-hook-form'

type OptionType = {
  label: string
  value: string
}

type Props = {
  name: string
  label: string
  control: Control<any>
  options: OptionType[]
}
const RadioInput: FC<Props> = ({ name, label, control, options }) => {
  const { field } = useController({
    name,
    control,
  })
  return (
    <FormControl>
      <FormLabel sx={{ color: 'common.black' }}>{label}</FormLabel>
      <RadioGroup
        row
        onChange={(e) => {
          const value = e.target.value
          if (value) {
            field.onChange(value)
          }
        }}
        value={field.value === undefined ? '' : field.value}
      >
        {options.map((o) => (
          <FormControlLabel
            key={o.label}
            value={o.value}
            control={<Radio />}
            label={o.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  )
}

export default RadioInput
