import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Checkbox,
} from '@material-ui/core';
import React from 'react';

const CheckboxForm = ({ legend, apiCategories, categories, setCategories }) => {
  function handleChange({ target }) {
    if (target.checked) {
      setCategories([...categories, target.value]);
    } else {
      setCategories(categories.filter((cor) => cor !== target.value));
    }
  }

  function handleChecked(cor) {
    return categories.includes(cor);
  }

  return (
    <>
      <FormControl component="fieldset">
        <FormLabel component="legend">{legend}</FormLabel>
        {apiCategories.map((value) => (
          <FormControlLabel
            key={value}
            value={value}
            control={
              <Checkbox
                checked={handleChecked(value)}
                onChange={handleChange}
                name={value}
                color="primary"
              />
            }
            label={value}
            style={{ marginBottom: '-10px' }}
          />
        ))}
      </FormControl>
    </>
  );
};
export default CheckboxForm;
