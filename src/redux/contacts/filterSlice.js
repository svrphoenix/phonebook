import { createSlice } from '@reduxjs/toolkit';
import { logOut } from 'redux/auth/operations';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContacts(_, action) {
      return action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(logOut.fulfilled, () => {
      return '';
    });
  },
});

export const { filterContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
