import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './containers';

function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={Home} />
        </Routes>
      </Router>
  );
}

export default App;
