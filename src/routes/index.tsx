import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Profile from '../pages/Profile';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
