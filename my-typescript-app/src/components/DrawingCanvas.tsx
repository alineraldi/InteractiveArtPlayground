import { useState } from "react";
import { Stage, Layer, Rect } from 'react-konva';
import Konva from "konva";

// Definindo o molde da minha forma, pra nao errar o nome das propriedades
interface MyShape {
    id: string;
    x: number;
    y: number;
    size: number;
    cornerRadius: number;
    color: string;
}

const randomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

// O componente principal onde tudo vai acontecer
const DrawingCanvas: React.FC = () => {
    const [shapes, setShapes] = useState<MyShape[]>([]);
    const handleCanvasClick = (event: Konva.KonvaEventObject<MouseEvent>) => {
        if(event.target === event.target.getStage()) {
            const stage = event.target.getStage();

            if(stage) {
                const pointerPosition = stage.getPointerPosition();

                if(pointerPosition) {
                    const newShape : MyShape = {
                        id: `shape-${Date.now()}`,
                        x: pointerPosition.x - 25,
                        y: pointerPosition.y - 25,
                        size: 50,
                        cornerRadius: 5,
                        color: randomColor(),
                    };

                    setShapes((prevShapes) => [...prevShapes, newShape]);
                }
            }
        }
    }

    return (
        <Stage 
        width={300}
        height={300}
        onMouseDown={handleCanvasClick}
        style = {{ border: '1px solid #ccc' }}
        >
        <Layer>
            {shapes.map((shape) => (
                <Rect
                key={shape.id}
                x={shape.x}
                y={shape.y}
                width={shape.size}
                height={shape.size}
                cornerRadius={shape.cornerRadius}
                fill={shape.color}
                draggable
                />
            ))}
        </Layer>
        </Stage>
    )
}

export default DrawingCanvas;