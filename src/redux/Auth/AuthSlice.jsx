import { createSlice } from '@reduxjs/toolkit';
import { login, logout, refresh, register } from '../operations';
import {
  handleFulfilled,
  handleFulfilledLogout,
  handleFulfilledRefresh,
  handlePendingRefresh,
  handleRejectedRefresh,
} from './Handle/Handle';

const initialState = {
  user: {
    name: null,
    email: null,
    password: null,
  },
  token: null,
  isLoggedIn: false,
  isRefresh: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, handleFulfilled)
      .addCase(login.fulfilled, handleFulfilled)
      .addCase(refresh.pending, handlePendingRefresh)
      .addCase(refresh.fulfilled, handleFulfilledRefresh)
      .addCase(refresh.rejected, handleRejectedRefresh)
      .addCase(logout.fulfilled, handleFulfilledLogout),
});

const authReducer = authSlice.reducer;

export default authReducer;
