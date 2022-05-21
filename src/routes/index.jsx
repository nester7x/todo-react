import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../screens/Home';
import Login from '../screens/Login';
import Users from '../screens/Users';
import User from '../screens/User';
import Edit from '../screens/Edit';

export default function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/" element={<Home />} />
      <Route exact path="/users" element={<Users />} />
      <Route exact path="/users/:id" element={<User />} />
      <Route exact path="/users/:id/edit" element={<Edit />} />
    </Routes>
  );
}
