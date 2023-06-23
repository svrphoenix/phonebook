import { createSelector } from '@reduxjs/toolkit';

const selectContacts = state => state.contacts.items;
const selectFilter = state => state.filter;
const selectIsLoading = state => state.contacts.isLoading;
const selectError = state => state.contacts.error;

const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, searchFilter) => {
    if (contacts.length === 0) {
      return null;
    }
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(searchFilter.toLowerCase())
    );
  }
);

export {
  selectContacts,
  selectError,
  selectFilter,
  selectIsLoading,
  selectVisibleContacts,
};
