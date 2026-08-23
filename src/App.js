import './App.css';
import Navbar from './components/navbar';
import Router from './router';
import { Provider } from 'react-redux';
import ThemeProvider from './ThemeProvider';
import store from './store';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <div className="App">
          <Navbar />
          <Router />
          <Analytics />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
