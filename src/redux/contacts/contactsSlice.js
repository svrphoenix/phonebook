import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact,
} from './operations';
import { logOut } from 'redux/auth/operations';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: builder => {
    builder.addCase(fetchContacts.pending, handlePending);
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    });
    builder.addCase(fetchContacts.rejected, handleRejected);
    builder.addCase(addContact.pending, handlePending);
    builder.addCase(addContact.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    });
    builder.addCase(addContact.rejected, handleRejected);
    builder.addCase(deleteContact.pending, handlePending);
    builder.addCase(deleteContact.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(({ id }) => id !== action.payload.id);
    });
    builder.addCase(deleteContact.rejected, handleRejected);

    builder.addCase(updateContact.pending, handlePending);
    builder.addCase(updateContact.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.map(item => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      });
    });
    builder.addCase(updateContact.rejected, handleRejected);

    builder.addCase(logOut.fulfilled, state => {
      state.items = [];
      state.error = null;
      state.isLoading = false;
    });
  },
});

export const contactsReducer = contactsSlice.reducer;
