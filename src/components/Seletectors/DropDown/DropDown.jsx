import React, { useState } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const DropDown = props => {
  const { label, values, defaultValue, styling, onValueChange } = props;
  const [item, setItem] = useState(defaultValue);

  const handleChange = event => {
    const newValue = event.target.value;
    if (values.findIndex(value => value === newValue) !== -1) {
      setItem(event.target.value);
      onValueChange(newValue);
    }
  };

  if (values.findIndex(value => value === defaultValue) === -1) {
    values.unshift(defaultValue);
  }

  return (
    <TextField
      select
      label={label}
      value={item}
      onChange={handleChange}
      helperText={`Filter by ${label.toLowerCase()}`}
      variant='outlined'
      className={styling}
    >
      {values.map(value => (
        <MenuItem key={value} value={value}>
          {value}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default DropDown;