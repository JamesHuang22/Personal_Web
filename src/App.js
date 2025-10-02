import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import PathPage from './pages/PathPage';

function App() {
  return (
    <Router basename="/me">
      <div className="App">
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/path" element={<PathPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
