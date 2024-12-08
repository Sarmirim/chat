import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css'; // Import styles for resizable
import { Rnd } from 'react-rnd';

const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "solid 1px #ddd",
    background: "#f0f0f0",
} as const;

interface WrapperProps {
    children: React.ReactNode;
    className?: string;
}

const DraggableResizableBox: React.FC<WrapperProps> = ({ children, className }) => {
    const [size, updateSize] = useState({ width: 200, height: 200 });
    const [position, updatePosition] = useState({ x: 0, y: 0 });
    return (
        <Rnd
            default={{
                x: window.innerWidth - 300, // Начальная позиция по X
                y: window.innerHeight - 200, // Начальная позиция по Y
                width: 300,
                height: 200,
            }}
            style={style}
            size={size}
            position={position}
            onDragStop={(e, d) => {
                updatePosition({ x: d.x, y: d.y });
            }}
            onResizeStop={(e, direction, ref, delta, position) => {
                updateSize({
                    width: Number(ref.style.width),
                    height: Number(ref.style.height),
                });
                updatePosition(position)
            }}
        >
            {children}
        </Rnd>
    );
};

export { DraggableResizableBox }