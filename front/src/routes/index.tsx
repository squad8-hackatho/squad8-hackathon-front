import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, Profile } from '../pages';
import AreasOfInterest from '../pages/AreasOfInterest/AreasOfInterest';

function OurRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="profile" element={<Profile />} />
      <Route path="interest" element={<AreasOfInterest />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default OurRoutes;
