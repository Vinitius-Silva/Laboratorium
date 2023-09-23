import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { Box } from '@mui/material';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function CheckboxesTags() {
  return (
    <Box sx={{m: 1}}>
        <Autocomplete
        multiple
        id="checkboxes-tags-demo"
        options={listagem}
        disableCloseOnSelect
        getOptionLabel={(option) => option.title}
        renderOption={(props, option, { selected }) => (
            <li {...props}>
            <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8}}
                checked={selected}
                />
            {option.title}
            </li>
        )}
        style={{ width: 'full' }}
        renderInput={(params) => (
            <TextField {...params} label="Escolha as opções" placeholder="Favorites" />
          )}
          />
    </Box>
);
}

const listagem = [
  { title: 'Interceptação Telefônica'},
  { title: 'Extrato Reverso'},
  { title: 'Quebra de ERB'},
  { title: 'Interceptação Telemática'},
];
