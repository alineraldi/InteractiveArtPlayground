import React from 'react';
import MoodSelector from './MoodSelector';
import ChaoticText from './ChaoticText';
import { useEffect } from 'react';
import confetti from 'canvas-confetti';

type Mood = 'neutral' | 'calm' | 'joyful' | 'chaotic' | 'melancholic';

interface MoodManagerProps {
  currentMood: Mood;
  onMoodChange: (mood: Mood) => void;
}

const MoodManager: React.FC<MoodManagerProps> = ({ currentMood, onMoodChange }) => {

  useEffect(() => {
    if(currentMood == 'joyful') {
      confetti({
        particleCount: 1000,
        spread: 1000,
        origin: { y: 0.3 }
      })
    }
  })

  const renderMoodElement = () => {
    switch (currentMood) {
      case 'neutral':
        return;
      case 'calm':
        return;
      case 'joyful':
        return <p><i>yay!!!!!!</i></p>;
      case 'chaotic':
        return <ChaoticText text = "t9hbo789iulhbn]´-09[]fe´lpgkrba\ep" />;
      case 'melancholic':
        return;
      default:
        return null;
    }
  };

  return (
    <div>
      <MoodSelector onMoodChange={onMoodChange} />
      <div className="mood-element">{renderMoodElement()}</div>
    </div>
  );
};

export default MoodManager;
