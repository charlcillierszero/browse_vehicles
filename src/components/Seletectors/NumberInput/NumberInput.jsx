import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

const NumberInput = props => {
  const { label, defaultValue, styling, min, max, onValueChange } = props;
  const [value, setValue] = useState(defaultValue);
  const [error, setError] = useState(null);

  const handleChange = event => {
    let newValueString = event.target.value;
    if (newValueString.includes('.')) {
      newValueString = newValueString + '0';
    }
    if (newValueString.length > 13) {
      return;
    }
    const newValue = Number(newValueString);
    if (isNaN(newValue)) {
      setValue(newValueString);
      setError('Please provide a valid numerical number.');
    } else {
      if (newValue >= min && newValue <= max) {
        setValue(newValue);
        setError(null);
        onValueChange(newValue);
      } else {
        setValue(newValueString);
        setError(`${label} must be between ${min} and ${max}`);
      }
    }
  }
  return (
    <TextField
      label={label}
      type='number'
      InputLabelProps={{ shrink: true }}
      variant='outlined'
      value={value}
      onChange={handleChange}
      className={styling}
      error={error ? true : false}
      helperText={error ? error : null}
    />
  )
}

export default NumberInput;
