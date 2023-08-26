import { createSlice } from '@reduxjs/toolkit';
import { login, logout, refresh, register } from '../operations';

const handleFulfilled = (state, { payload }) => {
  state.token = payload.token;
  state.user = payload.user;
  state.isLoggenIn = true;
};

const initialState = {
  user: {
    name: null,
    email: null,
    password: null,
  },
  token: null,
  isLoggenIn: false,
};

const handleFulfilledLogout = state => {
  state.user = {
    name: null,
    email: null,
    password: null,
  };
  state.token = null;
  state.isLoggenIn = false;
};

const handleFulfilledRefresh = (state, { payload }) => {
  state.user = payload;
  state.isLoggenIn = true;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, handleFulfilled)
      .addCase(login.fulfilled, handleFulfilled)
      .addCase(refresh.fulfilled, handleFulfilledRefresh)
      .addCase(logout.fulfilled, handleFulfilledLogout),
});

const authReducer = authSlice.reducer;

export default authReducer;
