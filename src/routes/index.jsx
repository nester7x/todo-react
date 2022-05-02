import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../screens/Home';
import Login from '../screens/Login';
import Users from '../screens/Users';

// eslint-disable-next-line react/function-component-definition
export default function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/" element={<Home />} />
      <Route exact path="/users" element={<Users />} />
    </Routes>
  );
}
