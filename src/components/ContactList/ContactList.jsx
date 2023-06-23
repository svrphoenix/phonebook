import { Contact, Contacts } from './ContactList.styled';
import { Alert, Container } from '@mui/material';
import { useVisibleContacts } from 'redux/hooks';
import { Item } from 'components/Item/Item';

export const ContactList = () => {
  const visibleContacts = useVisibleContacts();

  if (!visibleContacts)
    return (
      <Alert
        severity="warning"
        sx={{
          marginTop: 1,
        }}
      >
        There are no contacts in adress book...
      </Alert>
    );

  return visibleContacts.length > 0 ? (
    <Container maxWidth="sm">
      <Contacts>
        {visibleContacts.map(contact => (
          <Contact key={contact.id}>
            <Item contact={contact} />
          </Contact>
        ))}
      </Contacts>
    </Container>
  ) : (
    <Alert
      severity="warning"
      sx={{
        marginTop: 1,
      }}
    >
      There are no contacts matching the filter
    </Alert>
  );
};
