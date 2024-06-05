import React from 'react';
import { Link } from 'react-router-dom';
import { useAnswers } from '../components/AnswerContext';
import { useSelection, Toggle } from '../components/button';
import style from '../style.module.css';

function Events() {
    const { answers, setAnswers } = useAnswers();
    const [selectedOptions, handleToggle] = useSelection(answers.event || []);

    const handleEventSelect = (choice) => {
        const updatedEvents = selectedOptions.includes(choice)
            ? selectedOptions.filter(item => item !== choice)
            : [...selectedOptions, choice];

        setAnswers({ ...answers, events: updatedEvents });
    };


    return (
        <div className={style.mainContainer}>
            <div className={style.imgBox6}></div>
            <div className={style.box}>
                <div className={style.progressContainer}>
                    <p className={style.progressText}>6 of 7</p>
                    <div className={style.progress}>
                        <div className={style.line6} />
                    </div>
                </div>
                <h1 className={style.formText}>What kind of events are you interested in?</h1>
                <div className={style.formContainer}>
                    {['Teather', 'Stand up', 'Sport', 'Everything'].map(choice => (
                        <Toggle
                            key={choice}
                            value={choice}
                            selected={selectedOptions.includes(choice)}
                            handleToggle={(value) => {
                                handleToggle(value);
                                handleEventSelect(value);
                            }}
                        />
                    ))}
                </div>
                <div className={style.btnContainer}>
                    <Link to="/food"><button className={style.desButton1} type="button">Back</button></Link>
                    <Link to="/active"><button className={style.desButton2} type="button">Next</button></Link>
                </div>
            </div>
        </div>
    );
}

export default Events;