import React, { useEffect } from 'react';

const CalculatorInput = ({ value, onKeyPress }) => {
    useEffect(() => {
        const handleKeyPress = (event) => {
            onKeyPress(event.key);
        };

        document.addEventListener('keydown', handleKeyPress);

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [onKeyPress]);

    return (
        <div className="input-display">
            <input
                type="text"
                value={value}
                readOnly
                placeholder="Enter expression"
                onKeyPress={(e) => e.preventDefault()} // Disable manual input
            />
        </div>
    );
};

export default CalculatorInput;
