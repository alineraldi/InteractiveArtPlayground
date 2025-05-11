import React from 'react';
import ColorBlob from './ColorBlob';
import logo from './logo.svg';
import './App.css';
import PaintDropEffect from './PaintDrop';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          my first colorful blob
        </p>
        <ColorBlob />
        <p>
          my first paint drop effect
        </p>
        <PaintDropEffect />
        <p>
          What's your mood?
        </p>
      </header>
    </div>
  );
}

export default App;
