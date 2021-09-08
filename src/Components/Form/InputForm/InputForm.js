import TextField from '@material-ui/core/TextField';
import React from 'react';

const RadioForm = ({ label, type, value, setValue }) => (
  <TextField
    label={label}
    variant="filled"
    type={type}
    value={value}
    onChange={({ target }) => setValue(target.value)}
  />
);
export default RadioForm;
