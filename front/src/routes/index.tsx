import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, Profile } from '../pages';

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
