import './App.css';
import Gallery from './components/gallery';
import Navbar from './components/navbar';
import Router from './router';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Gallery /> */}
      <Router />
    </div>
  );
}

export default App;
