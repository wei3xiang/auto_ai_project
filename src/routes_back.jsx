import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import User from './user/index.jsx';
import BFoo from './bFoo/index.jsx';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<BFoo />} />
        <Route path="/user" element={<User />} />
    </Routes>
  </Router>
);

export default AppRoutes;
