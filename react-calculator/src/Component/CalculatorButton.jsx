import React from 'react';
import './Calculator.css';

const CalculatorButton = ({ children, onClick, className }) => {
    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    );
};

export default CalculatorButton;
