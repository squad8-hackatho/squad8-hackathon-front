/* eslint-disable */
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from '../App';
import { Home } from '../pages';

function OurRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default OurRoutes;
