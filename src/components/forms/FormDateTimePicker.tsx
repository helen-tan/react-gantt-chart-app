import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { useField, useFormikContext } from 'formik';
import moment, { type Moment } from 'moment';
import { useCallback } from 'react';

interface FormDateTimePickerProps {
  name: string;
  label: string;

  format?: string;
  disabled?: boolean;
  onChange?: (value: number | null) => void;
}

export function FormDateTimePicker(props: FormDateTimePickerProps) {
  const { name, label, format, disabled, onChange } = props;

  const [field, meta] = useField(name);
  const { setFieldValue } = useFormikContext();

  const handleChange = useCallback((value: Moment | null) => {
    const newValue = value ? value.valueOf() : null;
    setFieldValue(name, newValue);

    // Run any parent component provided onChange actions
    if (onChange) {
      onChange(newValue);
    }
  }, []);

  return (
    <DateTimePicker
      label={label}
      value={field.value ? moment(field.value) : null}
      format={format}
      disabled={disabled}
      onChange={handleChange}
    />
  );
}
