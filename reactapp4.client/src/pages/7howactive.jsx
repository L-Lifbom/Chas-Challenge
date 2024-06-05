import React from 'react';
import { Link } from 'react-router-dom';
import { useAnswers } from '../components/AnswerContext';
import { useSelection, Toggle } from '../components/button';
import style from '../style.module.css';

function Active() {
    const { answers, setAnswers } = useAnswers();

    const [selectedOptions, handleToggle] = useSelection(answers.active || []);

    const handleActiveSelect = (choice) => {
        const updatedActive = selectedOptions.includes(choice)
            ? selectedOptions.filter(item => item !== choice)
            : [...selectedOptions, choice];

        setAnswers({ ...answers, active: updatedActive });
    };


    return (
        <div className={style.mainContainer}>
            <div className={style.imgBox7}></div>
            <div className={style.box}>
                <div className={style.progressContainer}>
                    <p className={style.progressText}>7 of 7</p>
                    <div className={style.progress}>
                        <div className={style.line7} />
                    </div>
                </div>
                <h1 className={style.formText}>How many activites do you want?</h1>
                <div className={style.formContainer}>
                    {['1-2', '2-4', '3-4', '5-6'].map(choice => (
                        <Toggle
                            key={choice}
                            value={choice}
                            selected={selectedOptions.includes(choice)}
                            handleToggle={(value) => {
                                handleToggle(value);
                                handleActiveSelect(value);
                            }}
                        />
                    ))}
                </div>
                <div className={style.btnContainer}>
                    <Link to="/events"><button className={style.desButton1} type="button">Back</button></Link>
                    <Link to="/summary"><button className={style.desButton2} type="button">Submit</button></Link>
                </div>
            </div>
        </div>
    );
}

export default Active;