import { useState, useEffect, MouseEventHandler, CSSProperties } from "react";

interface ColorBlobProps {
    initialSize?: string; 
}

const ColorBlob: React.FC<ColorBlobProps> = ({ initialSize = '50px'}) => {
    const [size, setSize] = useState(initialSize);
    const [backgroundColor, setBackgroundColor] = useState<string | null>(null);

    const generateRandomHSLColor = (): string => {
        const hue = Math.random() * 360;
        return `hsl(${hue}, 70%, 60%)`;
    };

    const handleMouseEnter: MouseEventHandler<HTMLDivElement> = () => {
        setSize('100px');
        setBackgroundColor(generateRandomHSLColor());
    };

    const handleMouseLeave: MouseEventHandler<HTMLDivElement> = () => {
        setSize(initialSize);
        setBackgroundColor(null); // Resetting bg color
    };

    const blobStyle: CSSProperties = {
        width: size,
        height: size,
        backgroundColor: backgroundColor || '#A1C084',
        borderRadius: '50%',
        transition: 'width 1s ease-in-out, height 1s ease-in-out, background-color 0.3s ease-in-out',
    };

    return (
        <div 
        style={blobStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        />
    );
};

export default ColorBlob;