import React, { useState } from 'react';

export default function CheckpointDemo({ children }) {
    const [position, setPosition] = React.useState({ x: 200, y: 150 });
    const [checkpoints, setCheckpoints] = React.useState([]);

    const moveRight = () => setPosition(prev => ({ ...prev, x: prev.x + 30 }));
    const saveCheckpoint = () => setCheckpoints(prev => [...prev, position]);
    const goBack = () => {
        if (checkpoints.length > 0) {
            const newCheckpoints = [...checkpoints];
            const lastPos = newCheckpoints.pop();
            setPosition(lastPos);
            setCheckpoints(newCheckpoints);
        }
    };
    const reset = () => {
        setPosition({ x: 200, y: 150 });
        setCheckpoints([]);
    };

    return (
        <div className="w-full max-w-xl mx-auto my-4 p-4 bg-gray-50 rounded-lg">
            <div className="text-right mb-2">{children}</div>
            <div className="w-full h-64 bg-white border-2 border-gray-300 rounded relative">
                {checkpoints.map((pos, i) => (
                    <div
                        key={i}
                        className="absolute w-4 h-4 bg-green-500 rounded-full"
                        style={{
                            left: pos.x - 8,
                            top: pos.y - 8
                        }}
                    />
                ))}
                <div
                    className="absolute w-8 h-8 bg-blue-500 rounded transition-all duration-200"
                    style={{
                        left: position.x - 16,
                        top: position.y - 16
                    }}
                />
            </div>
            <div className="flex gap-2 mt-4 justify-center flex-wrap">
                <button onClick={moveRight} className="px-4 py-2 bg-blue-500 text-white rounded">
                    حرکت
                </button>
                <button onClick={saveCheckpoint} className="px-4 py-2 bg-green-500 text-white rounded">
                    ذخیره موقعیت
                </button>
                <button onClick={goBack} className="px-4 py-2 bg-yellow-500 text-white rounded">
                    بازگشت
                </button>
                <button onClick={reset} className="px-4 py-2 bg-gray-500 text-white rounded">
                    شروع مجدد
                </button>
            </div>
        </div>
    );
}

