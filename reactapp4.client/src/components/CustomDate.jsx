import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import style from '../style.module.css';

const CustomDate = ({ name, value, onChange }) => {
    const hiddenDateInput = useRef(null);

    const handleClick = () => {
        if (hiddenDateInput.current) {
            hiddenDateInput.current.click();
            console.log("Input ref is set");
        }
    };

    return (
        <div className={style.datePickerContainer} >
            <FontAwesomeIcon className={style.calendarIcon} icon={faCalendarDays} onClick={handleClick} style={{ zIndex: 0 }} />
            <input
                name={name}
                className={style.hiddenInputStyle}
                ref={hiddenDateInput}
                type="date"
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default CustomDate;