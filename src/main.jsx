import React from 'react';
import './index.css';
import App from './App';
import ReactDOM from 'react-dom/client';
// import 'antd/dist/antd.css'; // 引入 Ant Design 样式

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container); // Create a root
root.render(<App />);
