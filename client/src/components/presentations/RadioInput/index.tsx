import { FC } from 'react'
import Radio from '@mui/material/Radio'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import RadioGroup from '@mui/material/RadioGroup'
import { GENDER } from '@/constant/user-information'
import { Control, useController } from 'react-hook-form'

type Props = {
  name: string
  control: Control<any>
}
const RadioInput: FC<Props> = ({ name, control }) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
  })
  return (
    <FormControl>
      <FormLabel sx={{ color: 'common.black' }}>性別</FormLabel>
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
        <FormControlLabel
          value={GENDER.MALE}
          control={<Radio />}
          label='男性'
        />
        <FormControlLabel
          value={GENDER.FEMALE}
          control={<Radio />}
          label='女性'
        />
      </RadioGroup>
    </FormControl>
  )
}

export default RadioInput
