import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import Layout from '../Layout/Layout.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { refresh } from 'redux/operations.jsx';
import PrivateRouter from './guard/PrivateRoute.jsx';
import PublicRouter from './guard/PublicRouter.jsx';
import { getIsRefresh } from 'redux/Auth/Selector.jsx';

const Contacts = lazy(() => import('../pages/Contacts/Contacts'));
const SignUp = lazy(() => import('../pages/SignUp/SignUp'));
const LoginForm = lazy(() => import('../pages/LoginForm/LoginForm'));
const ErrorPage = lazy(() => import('../pages/ErrorPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefresh = useSelector(getIsRefresh);

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return isRefresh ? (
    <h2>Loading...</h2>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <PrivateRouter redirectTo="/login">
              <Contacts />
            </PrivateRouter>
          }
        />
        <Route
          path="/signUp"
          element={
            <PublicRouter>
              <SignUp />
            </PublicRouter>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRouter>
              <LoginForm />
            </PublicRouter>
          }
        />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
