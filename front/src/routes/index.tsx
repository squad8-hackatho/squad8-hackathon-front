import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages';
import Profile from '../pages/Profile/Profile';

function OurRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="profile" element={<Profile />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default OurRoutes;
