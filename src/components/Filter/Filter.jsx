import { useDispatch } from 'react-redux';
import { TextField } from '@mui/material';

import { filterContacts } from 'redux/contacts/filterSlice';
import { useFilter, useVisibleContacts } from 'redux/hooks';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useFilter();

  const isInputDisabled = useVisibleContacts() ? false : true;

  return (
    <TextField
      variant="standard"
      label="Enter name to filter..."
      type="text"
      size="small"
      sx={{ mt: 1, mb: 1 }}
      value={filter}
      disabled={isInputDisabled}
      onChange={({ currentTarget: { value } }) => {
        dispatch(filterContacts(value));
      }}
    />
  );
};
