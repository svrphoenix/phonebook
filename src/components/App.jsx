import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect, lazy } from 'react';

import { useAuth } from 'redux/hooks';
import { refreshCurrentUser } from 'redux/auth/operations';

import SharedLayout from './SharedLayout/SharedLayout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { LinearProgress } from '@mui/material';

const RegisterPage = lazy(() => import('pages/Register'));
const LoginPage = lazy(() => import('pages/Login'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);
  return isRefreshing ? (
    <>
      <b>Refreshing current user...</b>
      <div>
        <LinearProgress />
      </div>
    </>
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          index
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};
