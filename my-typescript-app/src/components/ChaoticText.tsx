import React from "react";

const randomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

interface ChaoticTextProps {
    text: string;
}

const ChaoticText: React.FC<ChaoticTextProps> = ({ text }) => {
    return (
        <>
        {text.split('').map((char, index) => {
            const randomCaseChar = 
            Math.random() > 0.5 ? char.toUpperCase() : char.toLowerCase();

            const style: React.CSSProperties = { color:randomColor(), userSelect: 'none' };
            return (
                <span key={index} style={style}>
                    {randomCaseChar}
                </span>
            )
        })}
        </>
    )
}

export default ChaoticText;