import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage';
import Fellow from './Pages/Fellow';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/fellow" element={<Fellow />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
