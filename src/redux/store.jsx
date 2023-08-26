import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './ContactSlice';
import { filtersReducer } from './FilterSlice';
import authReducer from './Auth/Auth-slice';
export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filtersReducer,
    auth: authReducer,
  },
});
