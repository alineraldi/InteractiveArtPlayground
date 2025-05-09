import React from 'react';
import ColorBlob from './ColorBlob';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          my first colorful blob!
        </p>
        <ColorBlob />
      </header>
    </div>
  );
}

export default App;
