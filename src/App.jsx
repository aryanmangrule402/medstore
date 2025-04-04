// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
// import StockManagement from './components/StockManagement';
// import OrderManagement from './components/OrderManagement';
// import SalesMonitoring from './components/SalesMonitoring';
// import ReportGeneration from './components/ReportGeneration';

function App() {
  return (
    <Router>
      <div >
        <Routes>
          <Route path="/" element={<LandingPage />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
