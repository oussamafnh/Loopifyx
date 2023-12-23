import './App.css';
import Gallery from './components/gallery';
import Navbar from './components/navbar';
import Router from './router';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PatternPage from './components/Patternpage';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Gallery /> */}
      {/* <Router /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pattern/:id" element={<PatternPage />} />
      </Routes>
    </div>
  );
}

export default App;
