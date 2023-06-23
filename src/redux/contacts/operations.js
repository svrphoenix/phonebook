import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (err) {
      return rejectWithValue(err.code);
    }
  }
);

const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', contact);
      return data;
    } catch (err) {
      toast.error(
        `Error happend on the server while adding contacts: (${err.message})`
      );
      return rejectWithValue(err.code);
    }
  }
);

const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);
      return data;
    } catch (err) {
      toast.error(
        `Error happend on the server while deleting contacts: (${err.message})`
      );
      return rejectWithValue(err.code);
    }
  }
);

const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async ({ id, name, number }, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch(`/contacts/${id}`, { name, number });
      return data;
    } catch (err) {
      toast.error(
        `Error happend on the server while updating contacts: (${err.message})`
      );
      return rejectWithValue(err.code);
    }
  }
);

export { deleteContact, addContact, fetchContacts, updateContact };
