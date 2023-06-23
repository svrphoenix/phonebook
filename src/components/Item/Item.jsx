import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { Button, Grid } from '@mui/material';
import { useState } from 'react';
import { ModalWindow } from 'components/ModalWindow/ModalWindow';

export const Item = ({ contact }) => {
  const { id, name, number } = contact;
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Grid container spacing={3}>
      <Grid item xs={4}>
        <p>{name}</p>
      </Grid>
      <Grid item xs={4}>
        <p>{number}</p>
      </Grid>
      <Grid item xs={2}>
        <Button
          type="button"
          variant="contained"
          onClick={() => dispatch(deleteContact(id))}
        >
          Delete
        </Button>
      </Grid>
      <Grid item xs={2}>
        <Button type="button" variant="contained" onClick={handleOpen}>
          Edit
        </Button>
        <ModalWindow open={open} handleClose={handleClose} contact={contact} />
      </Grid>
    </Grid>
  );
};

Item.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
