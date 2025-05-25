import React from 'react';
import MoodSelector from './MoodSelector';
import ChaoticText from './ChaoticText';
import { useEffect } from 'react';
import confetti from 'canvas-confetti';

type Mood = 'calm' | 'joyful' | 'chaotic' | 'melancholic';

interface MoodManagerProps {
  currentMood: Mood;
  onMoodChange: (mood: Mood) => void;
}

const MoodManager: React.FC<MoodManagerProps> = ({ currentMood, onMoodChange }) => {

  useEffect(() => {
    if(currentMood == 'joyful') {
      confetti({
        particleCount: 1000,
        spread: 100,
        origin: { y: 0.6 }
      })
    }
  })

  const renderMoodElement = () => {
    switch (currentMood) {
      case 'calm':
        return (
        <div>
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg1.picmix.com%2Foutput%2Fstamp%2Fnormal%2F0%2F1%2F6%2F3%2F1913610_f2522.gif&f=1&nofb=1&ipt=b794325e2dfd336644d6a2b6ff793f68f391b316bf32d64d5ff1f0fce6c80cde" width="80%"/>
        </div>
        );
      case 'joyful':
        return <p><i>yay!!!!!!</i></p>;
      case 'chaotic':
        return <ChaoticText text = "t9hbo789iulhbn]´-09[]fe´lpgkrba\ep" />;
      case 'melancholic':
        return (
        <div>
        <img src="https://static01.nyt.com/images/2017/08/02/well/02mfrl-rain/02mfrl-rain-superJumbo.gif" width="250px"/>
        <h6><i>meio mr.lonely hoje...</i></h6>
        </div>
        );
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
