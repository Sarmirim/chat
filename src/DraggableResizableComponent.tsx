import React, { useEffect, useState } from 'react';
import { Rnd } from 'react-rnd';
import MessageArea from './MessageArea';

const DraggableResizableComponent: React.FC = () => {
    const [x, setX] = useState<number>(window.innerWidth - 310)
    const [y, setY] = useState<number>(-200)

    const handleDragStop = (e: any, d: any) => {
        console.log(e, d)
        console.log(window.innerWidth)
        console.log(window.innerHeight)

        const maxX = window.innerWidth - 200;
        const maxY = window.innerHeight - 200;

        if (d.x < 0) d.x = 0;
        if (d.x > maxX) d.x = maxX;
        if (d.y < 0) d.y = 0;
        if (d.y > maxY) d.y = maxY;
    };

    return (
        // <div style={{ position: 'relative', height: '100vh', width: '100vw' }}>
        <Rnd
            default={{
                x: x,
                y: y,
                width: 300,
                height: 200,
            }}
            minWidth={100}
            minHeight={100}
            maxHeight={500}
            onDragStop={handleDragStop}
            style={{ position: 'absolute', bottom: 0, right: 0 }}
        >
            <div style={{ border: '1px solid #ccc', background: '#f0f0f0', padding: '10px', minHeight: 100 }}>

                {/* <h3>Перетаскиваемый и изменяемый элемент</h3>
                <p>Вы можете перетаскивать и изменять размер этого элемента.</p> */}
                <MessageArea />
                {/* <Chat /> */}
            </div>
        </Rnd>
        // </div>
    );
};

export default DraggableResizableComponent;
