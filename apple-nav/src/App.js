import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import NavWrapper from './components/NavWrapper';

function App() {
  return (
    <div className="App">
      <Router>
        <NavWrapper /> 
      </Router>
    </div>
  );
}

export default App;
