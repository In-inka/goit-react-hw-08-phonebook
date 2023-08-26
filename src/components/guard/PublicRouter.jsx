import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/Auth/Selector';

const PublicRouter = ({ children }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const location = useLocation();

  return !isLoggedIn ? children : <Navigate to={location.state ?? '/'} />;
};

export default PublicRouter;
