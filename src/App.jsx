import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Layout from "./Layout";

function App() {
  return (
    <React.StrictMode>
      <RecoilRoot>
        <Router>
          <Layout />
        </Router>
      </RecoilRoot>
    </React.StrictMode>
  );
}

export default App;
