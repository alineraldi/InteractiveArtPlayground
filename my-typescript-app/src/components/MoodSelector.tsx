import { useState } from "react";
type Mood = 'calm' | 'joyful' | 'chaotic' | 'melancholic';

interface MoodSelectorProps {
    onMoodChange: (mood: Mood) => void;
}

const MoodSelector: React.FC<MoodSelectorProps> = ({ onMoodChange }) => {
    const moods: Mood[] = ['calm', 'joyful', 'chaotic', 'melancholic'];

    return (
        <div style={{ display: 'inline-block'}}>
            {moods.map((mood) => (
                <button className="moodButton" key={mood} onClick={() => onMoodChange(mood)}>
                    {mood.charAt(0).toUpperCase() + mood.slice(1)}
                </button>
            ))}
        </div>
    );
};

export default MoodSelector;