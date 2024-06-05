import React from 'react';
import { Link } from 'react-router-dom';
import { useAnswers } from '../components/AnswerContext';
import style from '../style.module.css';
import { useSelection, Toggle } from '../components/button';


function Budget() {
    const { answers, setAnswers } = useAnswers();

    const [selectedOptions, handleToggle] = useSelection(answers.budget || []);

    const handleBudgetSelect = (choice) => {
        const updatedBudget = selectedOptions.includes(choice)
            ? selectedOptions.filter(item => item !== choice)
            : [...selectedOptions, choice];

        setAnswers({ ...answers, budget: updatedBudget });
    };



    const [selectedOption, handleSel] = useSelection();

    return (
        <div className={style.mainContainer}>
            <div className={style.imgBox3}></div>
            <div className={style.box}>
                <div className={style.progressContainer}>
                    <p className={style.progressText}>3 of 7</p>
                    <div className={style.progress}>
                        <div className={style.line3} />
                    </div>
                </div>
                <h1 className={style.formText}>What Is Your Budget?</h1>
                <div className={style.formContainer}>
                    {['Low', 'Medium', 'High', 'None of your buisness'].map(choice => (
                        <Toggle
                            key={choice}
                            value={choice}
                            selected={selectedOptions.includes(choice)}
                            handleToggle={(value) => {
                                handleToggle(value);
                                handleBudgetSelect(value);
                            }}
                        />
                    ))}
                </div>
                <div className={style.btnContainer}>
                    <Link to="/party"><button className={style.desButton1} type="button">Back</button></Link>
                    <Link to="/activites"><button className={style.desButton2} type="button">Next</button></Link>
                </div>
            </div>
        </div>
    );
}
export default Budget;