import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Profile from '../pages/Profile';
import Repositories from '../pages/Repositories';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/repositories" element={<Repositories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
