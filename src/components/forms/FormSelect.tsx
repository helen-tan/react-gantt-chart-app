import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { type SelectProps } from '@mui/material/Select';
import { useField, useFormikContext } from 'formik';

export interface FormSelectOption<T extends string | number> {
  value: T;
  label: string;
}

interface FormSelectProps<T extends string | number> extends Omit<
  SelectProps,
  'name' | 'value' | 'onChange' // Omit<TextFieldProps,'name' | 'select'> - take all TextField props, except 'name' & 'select'
> {
  name: string;
  label: string;
  options: FormSelectOption<T>[];
}

export function FormSelect<T extends string | number>({
  name,
  label,
  options,
  ...props
}: FormSelectProps<T>) {
  const [field] = useField(name);
  const { setFieldValue } = useFormikContext();

  const value = (field.value ?? '') as T | '';

  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select
        label={label}
        value={value}
        onChange={(e) => void setFieldValue(name, e.target.value)}
        {...props} // allow caller to pass MUI props like label, disabled, sx etc
        // when spread caller is last - the caller can override properties specified here
      >
        {options.map((option) => (
          <MenuItem key={String(option.value)} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>

    // <TextField
    //   {...field} // using formik field: same as saying name={name} value={value} onChange={onChange} onBlur={onBlur}
    //   {...props} // allow caller to pass MUI props like label, disabled, sx etc
    //   select
    //   label={props.label}
    //   fullWidth
    //   value={field.value}
    // >
    //   {options.map((option) => (
    //     <MenuItem key={String(option.value)} value={option.value}>
    //       {option.label}
    //     </MenuItem>
    //   ))}
    // </TextField>
  );
}
