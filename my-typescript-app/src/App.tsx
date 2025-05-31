import React, { useState } from 'react';
import ColorBlob from './components/ColorBlob';
import PaintDropEffect from './components/PaintDrop';
import MoodManager from './components/MoodManager';
import './App.css';
import chaoticbg from './img/chaoticbg.png';
import DrawingCanvas from './components/DrawingCanvas';

type Mood = 'calm' | 'joyful' | 'chaotic' | 'melancholic';

function App() {
  const [currentMood, setCurrentMood] = useState<Mood>('calm');

  const getMoodStyles = () => {
    switch (currentMood) {
      case 'calm':
        return { backgroundColor: '#c197d2', color: '#211522', fontFamily: 'serif' };
      case 'joyful':
        return { backgroundColor: '#f8d210', color: '#fa26a0' };
      case 'chaotic':
        return { backgroundImage: `url(${chaoticbg})`, color: '#000', fontFamily: 'Papyrus, sans-serif', fontVariant: 'small-caps' };
      case 'melancholic':
        return { backgroundColor: '#050a30', color: '#c3e0e5', fontFamily: 'Segoe Script', fontStyle: 'italic' };
      default:
        return {};
    }
  };

  return (
    <div className={`App ${currentMood === 'chaotic' ? 'chaotic-bg' : ""}`} style={getMoodStyles()}>
      <header className="App-header">
      </header>
      <div className="row">
        <div className='item'>
        <p>my first colorful blob</p>
        <ColorBlob />
        </div>
        <div className='item'>
        <p>my first paint drop effect</p>
        <PaintDropEffect />
        </div>
        <div className='item'>
        <p>set the mood...</p>
        <MoodManager currentMood={currentMood} onMoodChange={setCurrentMood} />
        </div>
        </div>
        <div className="row">
          <div className='item'>
          <DrawingCanvas />
          </div>
        </div>
    </div>
  );
}

export default App;
