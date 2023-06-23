import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectFilter,
  selectVisibleContacts,
} from './contacts/selectors';

import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
} from './auth/selectors';

const useVisibleContacts = () => {
  return useSelector(selectVisibleContacts);
};

const useContacts = () => {
  return useSelector(selectContacts);
};

const useFilter = () => {
  return useSelector(selectFilter);
};

const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};

export { useVisibleContacts, useContacts, useFilter, useAuth };
