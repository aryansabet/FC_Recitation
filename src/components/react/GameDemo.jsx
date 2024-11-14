import React, { useState } from 'react';

export default function GameDemo({ children }) {
    const [state, setState] = React.useState({
        position: { x: 200, y: 150 },
        checkpoints: [],
    });

    React.useEffect(() => {
        const handleKeyDown = (e) => {
            switch (e.key) {
                case 'ArrowRight':
                    setState(prev => ({
                        ...prev,
                        position: { ...prev.position, x: prev.position.x + 20 }
                    }));
                    break;
                case 'ArrowLeft':
                    setState(prev => ({
                        ...prev,
                        position: { ...prev.position, x: prev.position.x - 20 }
                    }));
                    break;
                case 'ArrowUp':
                    setState(prev => ({
                        ...prev,
                        position: { ...prev.position, y: prev.position.y - 20 }
                    }));
                    break;
                case 'ArrowDown':
                    setState(prev => ({
                        ...prev,
                        position: { ...prev.position, y: prev.position.y + 20 }
                    }));
                    break;
                case ' ':
                    setState(prev => ({
                        ...prev,
                        checkpoints: [...prev.checkpoints, prev.position]
                    }));
                    break;
                case 'Backspace':
                    setState(prev => {
                        if (prev.checkpoints.length === 0) return prev;
                        const newCheckpoints = [...prev.checkpoints];
                        const lastPos = newCheckpoints.pop();
                        return {
                            position: lastPos,
                            checkpoints: newCheckpoints
                        };
                    });
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <div className="w-full max-w-xl mx-auto my-4 p-4 bg-gray-50 rounded-lg focus:outline-none" tabIndex={0}>
            <div className="text-right mb-2">{children}</div>
            <div className="w-full h-64 bg-white border-2 border-gray-300 rounded relative">
                {state.checkpoints.map((pos, i) => (
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
                        left: state.position.x - 16,
                        top: state.position.y - 16
                    }}
                />
            </div>
            <div className="text-center mt-4 space-y-2 text-gray-600">
                <p>کلیدهای جهت‌دار: حرکت</p>
                <p>فاصله: ذخیره موقعیت</p>
                <p>Backspace: بازگشت به موقعیت قبلی</p>
            </div>
        </div>
    );
}