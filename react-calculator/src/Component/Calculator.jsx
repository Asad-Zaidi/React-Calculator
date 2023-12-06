import React, { useState, useEffect } from 'react';
import * as math from 'mathjs';
import '../Component/Calculator.css'
import CalculatorButton from '../Component/CalculatorButton';
import CalculatorInput from '../Component/CalculatorInput';


const Calculator = () => {
    const [input, setInput] = useState('');


    useEffect(() => {
        const handleKeyPress = (event) => {
            const key = event.key;

            if (/[\d.+\-*/%]/.test(key)) {
                handleCalculatorButtonClick(key);
            } else if (key === 'Enter') {
                handleCalculate();
            } else if (key === 'Escape') {
                handleClear();
            }
        };

        document.addEventListener('keydown', handleKeyPress);

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, []);




    const handleCalculatorButtonClick = (value) => {
        setInput((prevInput) => prevInput + value);
    };

    const handleClear = () => {
        setInput('');
    };

    const handleCalculate = () => {
        try {
            const result = math.evaluate(input);
            setInput(result.toString());
        } catch (error) {
            setInput('Error');
        }
    };

    return (
        <div className="calculator-container">
            <CalculatorInput value={input} />
            <div className="buttons-container">
                <CalculatorButton className="top-row" onClick={handleClear}>AC</CalculatorButton>
                <CalculatorButton className="top-row" onClick={() => handleCalculatorButtonClick('+/-')}> +/- </CalculatorButton>
                <CalculatorButton className="top-row" onClick={() => handleCalculatorButtonClick('%')}> % </CalculatorButton>
                <CalculatorButton className="operator" onClick={() => handleCalculatorButtonClick('/')}> ÷ </CalculatorButton>
            </div>
            <div className="CalculatorButton-row">
                <CalculatorButton onClick={() => handleCalculatorButtonClick('1')}>1</CalculatorButton>
                <CalculatorButton onClick={() => handleCalculatorButtonClick('2')}>2</CalculatorButton>
                <CalculatorButton onClick={() => handleCalculatorButtonClick('3')}>3</CalculatorButton>
                <CalculatorButton className="operator" onClick={() => handleCalculatorButtonClick('+')}>+</CalculatorButton>
            </div>
            <div className="CalculatorButton-row">
                <CalculatorButton onClick={() => handleCalculatorButtonClick('4')}>4</CalculatorButton>
                <CalculatorButton onClick={() => handleCalculatorButtonClick('5')}>5</CalculatorButton>
                <CalculatorButton onClick={() => handleCalculatorButtonClick('6')}>6</CalculatorButton>
                <CalculatorButton className="operator" onClick={() => handleCalculatorButtonClick('-')}>-</CalculatorButton>
            </div>
            <div className="CalculatorButton-row">
                <CalculatorButton onClick={() => handleCalculatorButtonClick('7')}>7</CalculatorButton>
                <CalculatorButton onClick={() => handleCalculatorButtonClick('8')}>8</CalculatorButton>
                <CalculatorButton onClick={() => handleCalculatorButtonClick('9')}>9</CalculatorButton>
                <CalculatorButton className="operator" onClick={() => handleCalculatorButtonClick('*')}>x</CalculatorButton>
            </div>
            <div className="CalculatorButton-row">
                <CalculatorButton onClick={() => handleCalculatorButtonClick('0')}>0</CalculatorButton>
                <CalculatorButton onClick={() => handleCalculatorButtonClick('00')}>00</CalculatorButton>
                <CalculatorButton onClick={() => handleCalculatorButtonClick('.')}>.</CalculatorButton>
                <CalculatorButton className="operator" onClick={handleCalculate}> = </CalculatorButton>
            </div>
        </div>
    );
};

export default Calculator;
