import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './Contacts/ContactSlice';
import { filtersReducer } from './Contacts/FilterSlice';
import authReducer from './Auth/AuthSlice';
export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filtersReducer,
    auth: authReducer,
  },
});
