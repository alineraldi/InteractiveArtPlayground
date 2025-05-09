import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface PaintDrop {
    id: string;
    x: number;
    y: number;
    size: number;
    color: string;
}

const PaintDropEffect: React.FC = () => {
    const [drops, setDrops] = useState<PaintDrop[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);
    const colorPalette = ["#B63E4C", "#DB7C26", "#A1C084", "#FFFFFF"]

    useEffect(() => {
        const intervalId = setInterval(() => {
            if(containerRef.current) {
                const containerWidth = containerRef.current.offsetWidth;
                const randomX = Math.random() * containerWidth;
                const randomSize = Math.random() * 10 + 5;
                const randomColor = getRandomPaletteColor();

                const newDrop : PaintDrop = {
                    id: Date.now().toString(),
                    x: randomX,
                    y: -randomSize,
                    size: randomSize,
                    color: randomColor,
                };
                setDrops((prevDrops) => [...prevDrops, newDrop]);
            }
        }, 100);

        return() => clearInterval(intervalId);
    }, []);

    const getRandomPaletteColor = () => {
        const randomIndex = Math.floor(Math.random() * colorPalette.length);
        return colorPalette[randomIndex];
    };

    return (
        <div
        ref={containerRef}
        style={{
            position: 'relative',
            width: '300px',
            height: '100px',
            backgroundColor: '#2B2D42',
            overflow: 'hidden',
        }}
        >

        {drops.map((drop) => (
            <motion.div
            key={drop.id}
            initial={{ x: drop.x, y: drop.y, opacity: 2}}
            animate= {{ y: '100%', opacity: 0}}
            transition= {{ duration: 1.0, ease: 'easeOut' }}
            style= {{
                position: 'absolute',
                left: 0,
                top: 0,
                width: drop.size * 1,
                height: drop.size * 4,
                backgroundColor: drop.color,
                borderRadius:'80%',
                originY: 'top',
            }}

            onAnimationComplete={() => {
                setDrops((prevDrops) => prevDrops.filter((d) => d.id !== drop.id));
            }}
        />
        ))}
        </div>
    );
};

export default PaintDropEffect;
