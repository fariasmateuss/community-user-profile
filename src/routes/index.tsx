import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Blog } from '../containers/Blog';
import { Profile } from '../containers/Profile';
import { Repositories } from '../containers/Repositories';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/repositories" element={<Repositories />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}
