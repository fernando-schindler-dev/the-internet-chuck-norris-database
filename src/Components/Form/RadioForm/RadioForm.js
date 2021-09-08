import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@material-ui/core';
import React from 'react';

const RadioForm = ({ legend, values, radio, setRadio }) => (
  <>
    <FormControl component="fieldset">
      <FormLabel component="legend">{legend}</FormLabel>
      <RadioGroup
        aria-label="useDefaultName"
        name="useDefaultName1"
        value={radio}
        onChange={({ target }) => setRadio(target.value)}
      >
        {values.map((value) => (
          <FormControlLabel
            value={value}
            control={<Radio color="primary" />}
            label={value}
          />
        ))}
      </RadioGroup>
    </FormControl>
  </>
);
export default RadioForm;
