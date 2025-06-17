import React, { useState, useCallback, useRef } from 'react'; // Import React and necessary hooks
import ColorBlob from './components/ColorBlob'; // Import component for a colorful blob
import PaintDropEffect from './components/PaintDrop'; // Import component for a paint drop animation
import MoodManager from './components/MoodManager'; // Component to manage mood selection
import chaoticbg from './img/chaoticbg.png'; // Imporr background image for chaotic mood
import DrawingCanvas from './components/DrawingCanvas'; // Component that allow user to draw inside the div
import { toPng } from 'html-to-image'; // Library function to convert HTML elements to PNG
import './App.css'; // Import main CSS styles

// TYPESCRIPT: Define a type for moods
type Mood = 'neutral' | 'calm' | 'joyful' | 'chaotic' | 'melancholic';

function App() {
  const [currentMood, setCurrentMood] = useState<Mood>('neutral'); // Track what is the selected mood

  // Switch that allows me to return styling properties based on the selected mood
  const getMoodStyles = () => {
    switch (currentMood) {
      case 'neutral':
        return { backgroundColor: '#ffff', fontFamily: 'Corbel, sans-serif' };
      case 'calm':
        return { backgroundColor: '#c197d2', color: '#211522', fontFamily: 'serif' };
      case 'joyful':
        return { backgroundColor: '#f8d210', color: '#fa26a0' };
      case 'chaotic':
        return { backgroundImage: `url(${chaoticbg})`, color: '#FFE20B', fontFamily: 'Wingdings, sans-serif', fontVariant: 'small-caps' };
      case 'melancholic':
        return { backgroundColor: '#050a30', color: '#c3e0e5', fontFamily: 'Segoe Script', fontStyle: 'italic' };
      default:
        return {};
    }
  };

  const ref = useRef<HTMLDivElement>(null) // References where's the drawing area (for the drawing canvas component)

  // Download canvas drawing as a PNG when button's clicked
  const onButtonClick = useCallback(() => {
    if (ref.current === null) { // If the reference isn't ready
      return; // Do nothing
    }

    toPng(ref.current, { cacheBust: true, }) // Convert to PNG
    .then((dataUrl) => {
      const link = document.createElement('a') // Create an a, a link element
      link.download = 'my-amazing-artwork.png' // Set the file name
      link.href = dataUrl // Set image URL
      link.click() // Trigger download
    })
    .catch((err) => {
      console.log(err) // If there's some error during conversion, log it
    })
  }, [ref]) // Something I learned today!:: This tells React: "Only recreate this function if 'ref' changes." 

  return ( // Main container, applies dynamic styles based on mood
    <div className={`App ${currentMood === 'chaotic' ? 'chaotic-bg' : ""}`} style={getMoodStyles()}>
      <header className="App-header">{/* Empty header (for now)*/}
      </header>
      <div className="row"> {/* Defines 3 items inside a row*/}
        {/* Section for ColorBlob component */}
        <div className='item'>
        <p>my first colorful blob</p>
        <ColorBlob />
        </div>
        {/* Section for PaintDrop component */}
        <div className='item'>
        <p>my first paint drop effect</p>
        <PaintDropEffect />
        </div>
        {/* Section for Mood Selector */}
        <div className='item'>
        <p>set the mood...</p>
        <MoodManager currentMood={currentMood} onMoodChange={setCurrentMood} />
        </div>
        </div>
        <div className="row">
          {/* Section for downloadable drawing canvas component */}
          <div className='item'>
          <p>draw with squares</p>
          <div ref={ref}>
          <DrawingCanvas />
          </div>
          <button onClick={onButtonClick}>Download my masterpiece</button>
          </div>
        </div>
    </div>
  );
}

export default App; // Export the component
