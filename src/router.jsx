import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PatternPage from './components/Patternpage';
import Home from './components/Home';

const AppRouter = () => {
  return (
      <Routes>
        <Route path="/Loopifyx" element={<Home />} />
        <Route path="/Loopifyx/pattern/:id" element={<PatternPage />} />
      </Routes>
  );
};

export default AppRouter;
