'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';

export default function CheckboxesGroup() {
  const [state, setState] = React.useState({
    interceptacao: false,
    extrato: false,
    quebra: false,
    telematica: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { interceptacao, extrato, quebra, telematica } = state;
  const error = [interceptacao, extrato, quebra, telematica ].filter((v) => v).length !== 2;

  return (
    <Box sx={{ display: 'flex' }}>
      <FormControl sx={{ m: 1 }} component="fieldset" variant="standard">
        <FormLabel component="legend"></FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={interceptacao} onChange={handleChange} name="interceptacao" />
            }
            label="Interceptação Telefônica"
          />
          <FormControlLabel
            control={
              <Checkbox checked={extrato} onChange={handleChange} name="extrato" />
            }
            label="Extrato Reverso"
          />
          <FormControlLabel
            control={
              <Checkbox checked={quebra} onChange={handleChange} name="quebra" />
            }
            label="Quebra de ERB"
          />
          <FormControlLabel
            control={
              <Checkbox checked={telematica} onChange={handleChange} name="telematica" />
            }
            label="Interceptação Telemática"
          />
        </FormGroup>
        <FormHelperText></FormHelperText>
      </FormControl>
    </Box>
  );
}
