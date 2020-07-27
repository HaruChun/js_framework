import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const name  = undefined;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React {name === 'jichun'?(<h1>천종익!</h1>) :(<p>강나현</p>)}
        </a>
      </header>
    </div>
    /*<div>
      <h1>hi !!</h1>
      <h2>hellow!!</h2>
    </div>*/
  );
}

export default App;
