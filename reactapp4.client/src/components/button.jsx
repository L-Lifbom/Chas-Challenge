import React, { useState } from 'react';
import style from '../style.module.css';

const useSelection = (initialState = []) => {
    const [selected, setSelected] = useState(initialState);

    const handleToggle = (value) => {
        if (selected.includes(value)) {
            setSelected(selected.filter(item => item !== value));
        } else {
            setSelected([...selected, value]);
        }
    };
    const resetSelection = () => {
        setSelected([]);
    };

    return [selected, handleToggle, resetSelection];
};

const Toggle = ({ value, selected, handleToggle, reset }) => {
    const buttonStyle = `${style.formButton} ${selected ? style.selected : ''}`;

    const handleClick = () => {
        handleToggle(value);
    };

    return (
        <button type="button" className={buttonStyle} onClick={handleClick}>
            {value}
        </button>
    );
};

export { useSelection, Toggle };
