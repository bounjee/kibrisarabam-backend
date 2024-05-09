import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../src/pages/homePage';
import OtoDetails from '../src/pages/otoDetails'; // OtoDetails komponentini import edin

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details" element={<OtoDetails />} />
      </Routes>
    </div>
  );
}

export default App;