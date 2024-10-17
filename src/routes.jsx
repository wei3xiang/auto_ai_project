import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import User from './user/index.jsx'; // 你的用户管理组件

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<User />} />
    </Routes>
  </Router>
);

export default AppRoutes;
