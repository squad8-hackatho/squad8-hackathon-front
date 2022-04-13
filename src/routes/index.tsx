import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, Profile, UsersList, Login, Register, LandingPage1 } from '../pages';
import { Schedule } from '../pages/schedule/Schedule';

function OurRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/landing" element={<LandingPage1 />} />
      <Route path="profile/:email" element={<Profile />} />
      <Route path="usersList" element={<UsersList />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="schedule" element={<Schedule />} />
    </Routes>
  );
}

export default OurRoutes;
