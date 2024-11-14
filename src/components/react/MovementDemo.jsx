import React, { useState } from 'react';

export default function MovementDemo({ children }) {
    const [position, setPosition] = React.useState({ x: 200, y: 150 });

    const moveRight = () => setPosition(prev => ({ ...prev, x: prev.x + 30 }));
    const moveLeft = () => setPosition(prev => ({ ...prev, x: prev.x - 30 }));
    const reset = () => setPosition({ x: 200, y: 150 });

    return (
        <div className="w-full max-w-xl mx-auto my-4 p-4 bg-gray-50 rounded-lg">
            <div className="text-right mb-2">{children}</div>
            <div className="w-full h-64 bg-white border-2 border-gray-300 rounded relative">
                <div
                    className="absolute w-8 h-8 bg-blue-500 rounded transition-all duration-200"
                    style={{
                        left: position.x - 16,
                        top: position.y - 16
                    }}
                />
            </div>
            <div className="flex gap-2 mt-4 justify-center">
                <button onClick={moveLeft} className="px-4 py-2 bg-blue-500 text-white rounded">
                    حرکت به چپ
                </button>
                <button onClick={moveRight} className="px-4 py-2 bg-blue-500 text-white rounded">
                    حرکت به راست
                </button>
                <button onClick={reset} className="px-4 py-2 bg-gray-500 text-white rounded">
                    شروع مجدد
                </button>
            </div>
        </div>
    );
}