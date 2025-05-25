import React, { useState } from 'react';
import ColorBlob from './components/ColorBlob';
import PaintDropEffect from './components/PaintDrop';
import MoodManager from './components/MoodManager';
import './App.css';

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
        return { className: "chaotic-bg", backgroundImage: "url('https://sdmntprwestus3.oaiusercontent.com/files/00000000-e3f8-61fd-b197-f7c88790d10b/raw?se=2025-05-25T14%3A15%3A28Z&sp=r&sv=2024-08-04&sr=b&scid=64f8127e-7f31-52a5-bc46-132f73edaa7b&skoid=ec8eb293-a61a-47e0-abd0-6051cc94b050&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-25T13%3A14%3A02Z&ske=2025-05-26T13%3A14%3A02Z&sks=b&skv=2024-08-04&sig=Av5Kt8z0uWFBwlrRiziB5OSBx5jmk1CMHfh5Kz7MqHk%3D')", color: '#000' };
      case 'melancholic':
        return { backgroundColor: '#050a30', color: '#c3e0e5', fontFamily: 'Segoe Script' };
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
    </div>
  );
}

export default App;
