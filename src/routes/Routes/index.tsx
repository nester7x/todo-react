import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from 'screens/Home';
import Login from 'screens/Login';
import Users from 'screens/Users';
import NotFound from 'screens/NotFound';
import Registration from 'screens/Registration';
import Chat from 'screens/Chat';
import GuestRoute from '../GuestRoute';
import PrivateRoute from '../PrivateRoute';

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route
        path='/login'
        element={
          <GuestRoute>
            <Login />
          </GuestRoute>
        }
      />
      <Route
        path='/registration'
        element={
          <GuestRoute>
            <Registration />
          </GuestRoute>
        }
      />
      <Route
        path='/chat'
        element={
          <PrivateRoute>
            <Chat />
          </PrivateRoute>
        }
      />
      <Route
        path='/chat/:id'
        element={
          <PrivateRoute>
            <Chat />
          </PrivateRoute>
        }
      />
      <Route
        path='/users'
        element={
          <PrivateRoute>
            <Users />
          </PrivateRoute>
        }
      />
      <Route path='/not-found-404' element={<NotFound />} />
      <Route path='*' element={<Navigate to='/not-found-404' />} />
    </Routes>
  );
}
