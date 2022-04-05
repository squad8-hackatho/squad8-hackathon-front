import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, Profile, AreasOfInterest } from '../pages';

function OurRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="profile" element={<Profile />} />
      <Route path="interest" element={<AreasOfInterest />} />
    </Routes>
  );
}

export default OurRoutes;
