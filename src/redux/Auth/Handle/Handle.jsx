export const handleFulfilled = (state, { payload }) => {
  state.token = payload.token;
  state.user = payload.user;
  state.isLoggedIn = true;
};

export const handleFulfilledLogout = state => {
  state.user = {
    name: null,
    email: null,
    password: null,
  };
  state.token = null;
  state.isLoggedIn = false;
};

export const handleFulfilledRefresh = (state, { payload }) => {
  state.user = payload;
  state.isLoggedIn = true;
  state.isRefresh = false;
};

export const handlePendingRefresh = state => {
  state.isRefresh = true;
};
export const handleRejectedRefresh = state => {
  state.isRefresh = false;
};
