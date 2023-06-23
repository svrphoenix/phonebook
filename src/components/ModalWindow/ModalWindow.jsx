import PropTypes from 'prop-types';
import { Box, Modal, Typography } from '@mui/material';
import { EditContact } from 'components/EditContact/EditContact';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '75%',
  bgcolor: 'background.paper',
  border: '2px solid #a19e9e',
  borderRadius: '3px',
  boxShadow: 24,
  p: 4,
};

export function ModalWindow({ open, handleClose, contact }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}
        >
          Contact Editor
        </Typography>
        <EditContact contact={contact} handleClose={handleClose} />
      </Box>
    </Modal>
  );
}

ModalWindow.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

