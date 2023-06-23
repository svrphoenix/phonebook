import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { CircularProgress, Typography } from '@mui/material';

import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { useAuth } from 'redux/hooks';

import { Container } from 'components/Container/Container';
import { AddContact } from 'components/AddContact/AddContact';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const { user } = useAuth();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <main>
      {error ? (
        toast.error('Unable to load data from database!')
      ) : (
        <Container>
          <Typography variant="h3" component="h1" color="primary.main">
            {`Contacts of user "${user.name}"`}
          </Typography>
          <AddContact title="Add contact" />

          <Typography
            variant="h5"
            component="h2"
            color="primary.main"
            mt="10px"
            align="center"
          >
            Contacts list
          </Typography>
          <Filter />
          {isLoading ? (
            <div>
              <CircularProgress />
            </div>
          ) : (
            <ContactList />
          )}
        </Container>
      )}
    </main>
  );
}

export default ContactsPage;
