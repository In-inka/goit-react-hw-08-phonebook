import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getUsersisLoggenIn } from 'redux/Auth/Selector';

const PublicRouter = ({ children }) => {
  const isLoggenIn = useSelector(getUsersisLoggenIn);
  const location = useLocation();

  return !isLoggenIn ? children : <Navigate to={location.state ?? '/'} />;
};

export default PublicRouter;
