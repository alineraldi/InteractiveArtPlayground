import { useState, useEffect, useRef, MouseEventHandler } from 'react';
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
    const colorPaletteRef = useRef<string[]>(["#ff7b00", "#ff8800", "#ff9500", "#ffa200", "#f9c74f", "#ffaa00", "#ffb700", "#ffc300", "#ffd000", "#ffdd00"]);

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
                setDrops((prevDrops) => [...prevDrops.slice(-100), newDrop]);
            }
        }, 100);

        return() => clearInterval(intervalId);
    }, []);

    const getRandomPaletteColor = () => {
        const palette = colorPaletteRef.current;
        const randomIndex = Math.floor(Math.random() * palette.length);
        return palette[randomIndex];
    };

    const handleMouseEnter: MouseEventHandler<HTMLDivElement> = () => {
        colorPaletteRef.current = ["#7400b8", "#6930c3", "#5e60ce", "#5390d9", "#4ea8de", "#56cfe1", "#64dfdf", "#72efdd", "#80ffdb"]};


    const handleMouseLeave: MouseEventHandler<HTMLDivElement> = () => {
        colorPaletteRef.current = ["#ff7b00", "#ff8800", "#ff9500", "#ffa200", "#f9c74f", "#ffaa00", "#ffb700", "#ffc300", "#ffd000", "#ffdd00"]};

    return (
        <div
        ref={containerRef}
        style={{
            
            position: 'relative',
            width: '300px',
            height: '100px',
            overflow: 'hidden',
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
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
