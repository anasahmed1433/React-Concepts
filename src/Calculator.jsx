import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
    const [display, setDisplay] = useState('0');
    const [previousValue, setPreviousValue] = useState(null);
    const [operation, setOperation] = useState(null);
    const [newNumber, setNewNumber] = useState(true);

    const handleNumber = (num) => {
        if (newNumber) {
            setDisplay(num);
            setNewNumber(false);
        } else {
            setDisplay(display === '0' ? num : display + num);
        }
    };

    const handleOperation = (op) => {
        setPreviousValue(parseFloat(display));
        setOperation(op);
        setNewNumber(true);
    };

    const handleEquals = () => {
        if (previousValue === null || operation === null) return;

        const current = parseFloat(display);
        let result;

        switch (operation) {
            case '+':
                result = previousValue + current;
                break;
            case '-':
                result = previousValue - current;
                break;
            case '*':
                result = previousValue * current;
                break;
            case '/':
                result = previousValue / current;
                break;
            default:
                return;
        }

        setDisplay(String(result));
        setPreviousValue(null);
        setOperation(null);
        setNewNumber(true);
    };

    const handleClear = () => {
        setDisplay('0');
        setPreviousValue(null);
        setOperation(null);
        setNewNumber(true);
    };

    const handleDecimal = () => {
        if (newNumber) {
            setDisplay('0.');
            setNewNumber(false);
        } else if (!display.includes('.')) {
            setDisplay(display + '.');
        }
    };

    const handlePercentage = () => {
        setDisplay(String(parseFloat(display) / 100));
    };

    const buttons = [
        { label: 'C', action: handleClear, className: 'clear' },
        { label: '%', action: handlePercentage, className: 'operator' },
        { label: '←', action: () => setDisplay(display.length > 1 ? display.slice(0, -1) : '0'), className: 'operator' },
        { label: '÷', action: () => handleOperation('/'), className: 'operator' },
        { label: '7', action: () => handleNumber('7'), className: 'number' },
        { label: '8', action: () => handleNumber('8'), className: 'number' },
        { label: '9', action: () => handleNumber('9'), className: 'number' },
        { label: '×', action: () => handleOperation('*'), className: 'operator' },
        { label: '4', action: () => handleNumber('4'), className: 'number' },
        { label: '5', action: () => handleNumber('5'), className: 'number' },
        { label: '6', action: () => handleNumber('6'), className: 'number' },
        { label: '-', action: () => handleOperation('-'), className: 'operator' },
        { label: '1', action: () => handleNumber('1'), className: 'number' },
        { label: '2', action: () => handleNumber('2'), className: 'number' },
        { label: '3', action: () => handleNumber('3'), className: 'number' },
        { label: '+', action: () => handleOperation('+'), className: 'operator' },
        { label: '0', action: () => handleNumber('0'), className: 'number zero' },
        { label: '.', action: handleDecimal, className: 'number' },
        { label: '=', action: handleEquals, className: 'equals' },
    ];

    return (
        <div className="calculator">
            <div className="display">
                <div className="previous-value">
                    {previousValue !== null ? `${previousValue} ${operation}` : ''}
                </div>
                <div className="current-value">{display}</div>
            </div>
            <div className="buttons">
                {buttons.map((btn, index) => (
                    <button
                        key={index}
                        className={btn.className}
                        onClick={btn.action}
                    >
                        {btn.label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Calculator;
