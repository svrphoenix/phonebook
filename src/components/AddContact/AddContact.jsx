import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';

import { useContacts } from 'redux/hooks';

import { addContact } from 'redux/contacts/operations';
import FormikForm from 'components/FormikForm/FormikForm';

export const AddContact = () => {
  const dispatch = useDispatch();
  const contacts = useContacts();

  const handleSubmit = (values, actions) => {
    if (
      contacts.find(
        ({ name }) => name.toLowerCase() === values.name.toLowerCase()
      )
    ) {
      toast.error(
        `Contact "${values.name.toUpperCase()}" is alredy in contacts`
      );
      return;
    }
    if (contacts.find(({ number }) => number === values.number)) {
      toast.error(
        `Contact with number"${values.number}" is alredy in contacts`
      );
      return;
    }
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <FormikForm title='Add contact' handleSubmit={handleSubmit}/>
  );
};
