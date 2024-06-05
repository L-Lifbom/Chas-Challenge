import React from 'react';
import { Link } from 'react-router-dom';
import { useAnswers } from '../components/AnswerContext';
import { useSelection, Toggle } from '../components/button';
import style from '../style.module.css';

function Activities() {
    const { answers, setAnswers } = useAnswers();
    const [selectedOptions, handleToggle] = useSelection(answers.activities || []);

    const handleActivitiesSelect = (choice) => {
        const updatedActivity = selectedOptions.includes(choice)
            ? selectedOptions.filter(item => item !== choice)
            : [...selectedOptions, choice];

        setAnswers({ ...answers, activities: updatedActivity });
    };



    return (
        <div className={style.mainContainer}>
            <div className={style.imgBox4}></div>
            <div className={style.box}>
                <div className={style.progressContainer}>
                    <p className={style.progressText}>4 of 7</p>
                    <div className={style.progress}>
                        <div className={style.line4} />
                    </div>
                </div>
                <h1 className={style.formText}>What Activities Are You Interested In?</h1>
                <div className={style.formContainer}>
                    {['Stränder', 'Nattliv', 'Mat', 'Adrenalin Höjare', 'Sevärdigheter', 'Evenemang', 'Nöjesparker'].map(choice => (
                        <Toggle
                            key={choice}
                            value={choice}
                            selected={selectedOptions.includes(choice)}
                            handleToggle={(value) => {
                                handleToggle(value);
                                handleActivitiesSelect(value);
                            }}
                        />
                    ))}
                </div>
                <div className={style.btnContainer}>
                    <Link to="/budget"><button className={style.desButton1} type="button">Back</button></Link>
                    <Link to="/food"><button className={style.desButton2} type="button">Next</button></Link>
                </div>
            </div>
        </div>
    );
}
export default Activities;