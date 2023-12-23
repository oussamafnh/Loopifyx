import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PatternPage from './components/Patternpage';
import Home from './components/Home';

const AppRouter = () => {
  return (
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/pattern/:id" element={<PatternPage />} />
      </Routes>
  );
};

export default AppRouter;
