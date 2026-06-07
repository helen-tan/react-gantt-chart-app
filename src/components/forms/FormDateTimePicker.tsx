import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { useField, useFormikContext } from 'formik';
import dayjs, { type Dayjs } from 'dayjs';
import { useCallback } from 'react';
import type { SxProps, Theme } from '@mui/material/styles';
import type { TextFieldProps } from '@mui/material';

interface FormDateTimePickerProps {
  name: string;
  label: string;

  format?: string;
  disabled?: boolean;
  onChange?: (value: number | null) => void;

  // Custom styling
  sx?: SxProps<Theme>;
  textFieldProps?: TextFieldProps;
}

export function FormDateTimePicker(props: FormDateTimePickerProps) {
  const { name, label, format, disabled, onChange, sx, textFieldProps } = props;

  const [field] = useField(name);
  const { setFieldValue } = useFormikContext();

  const handleChange = useCallback(
    (value: Dayjs | null) => {
      const newValue = value ? value.valueOf() : null;
      setFieldValue(name, newValue);

      // Run any parent component provided onChange actions
      if (onChange) {
        onChange(newValue);
      }
    },
    [name, onChange, setFieldValue],
  );

  return (
    <DateTimePicker
      label={label}
      value={field.value ? dayjs(field.value) : null}
      format={format}
      disabled={disabled}
      onChange={handleChange}
      ampm={false}
      // apply component provided styles
      sx={sx}
      slotProps={{
        textField: {
          ...textFieldProps,
          // validation here next time
        },
      }}
    />
  );
}
