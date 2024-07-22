import React from 'react';
import Navbar from './components/Navbar/Navbar';

import './App.css';
import Homepage from './Pages/Homepage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Homepage/>
    </div>
  );
};

export default App;
