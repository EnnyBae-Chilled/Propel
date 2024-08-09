import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage';
import Fellow from './Pages/Fellow';
import Volunteer from './Pages/Volunteer';
import Partners from './Pages/Partners';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/fellow" element={<Fellow />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/partners" element={<Partners />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
