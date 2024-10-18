import React from 'react';
import { RecoilRoot } from 'recoil';
import AppRoutes from './routes';

function App() {
  return (
    <React.StrictMode>
      <RecoilRoot>
        <AppRoutes />
      </RecoilRoot>
    </React.StrictMode>
  );
}

export default App;
