import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, Profile, UsersList, Login, Register } from '../pages';

function OurRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="profile/:email" element={<Profile />} />
      <Route path="usersList" element={<UsersList />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Routes>
  );
}

export default OurRoutes;
