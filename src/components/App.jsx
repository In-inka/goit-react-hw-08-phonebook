import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import Layout from '../Layout/Layout.jsx';
import { useDispatch } from 'react-redux';
import { refresh } from 'redux/operations.jsx';
import PrivetRoute from './guard/PrivateRoute.jsx';
import PrivateRouter from './guard/PrivateRoute.jsx';
import PublicRouter from './guard/PublicRouter.jsx';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts'));
const SignUp = lazy(() => import('../pages/SignUp/SignUp'));
const LoginForm = lazy(() => import('../pages/LoginForm/LoginForm'));
const ErrorPage = lazy(() => import('../pages/ErrorPage'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/contacts"
          element={
            <PrivateRouter>
              <Contacts />
            </PrivateRouter>
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
        <Route
          path="/signUp"
          element={
            <PublicRouter>
              <SignUp />
            </PublicRouter>
          }
        />
      </Route>

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
