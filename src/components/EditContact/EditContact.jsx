import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';

import { useContacts } from 'redux/hooks';
import { updateContact } from 'redux/contacts/operations';
import FormikForm from 'components/FormikForm/FormikForm';

export const EditContact = ({ contact, handleClose }) => {
  const { id: contactId, name, number } = contact;
  const dispatch = useDispatch();
  const contacts = useContacts();

  const handleSubmit = values => {
    if (
      contacts.find(
        ({ name, id }) =>
          name.toLowerCase() === values.name.toLowerCase() && id !== contactId
      )
    ) {
      toast.error(
        `Contact "${values.name.toUpperCase()}" is alredy in contacts`
      );
      return;
    }
    if (
      contacts.find(
        ({ number, id }) => number === values.number && id !== contactId
      )
    ) {
      toast.error(
        `Contact with number"${values.number}" is alredy in contacts`
      );
      return;
    }
    dispatch(updateContact({ ...values, id: contactId }));
    handleClose();
  };

  return (
    <FormikForm
      title=" Update contact"
      defaultName={name}
      defaultNumber={number}
      handleSubmit={handleSubmit}
    />
  );
};

EditContact.propTypes = {
  handleClose: PropTypes.func.isRequired,
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
