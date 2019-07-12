import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {process.env.REACT_APP_APP_BASE_URL}<br/>
          {process.env.REACT_APP_VAR1}<br />
          {process.env.REACT_APP_VAR2}
        </p>
      </header>
    </div>
  );
}

export default App;
