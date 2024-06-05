import React from 'react';
import { Link } from 'react-router-dom';
import { useAnswers } from '../components/AnswerContext';
import { Toggle, useSelection } from '../components/button';
import style from '../style.module.css';

function Food() {
    const { answers, setAnswers } = useAnswers();
    const [selectedOptions, handleToggle] = useSelection(answers.food || []);

    const handleFoodSelect = (choice) => {
        const updatedFood = selectedOptions.includes(choice)
            ? selectedOptions.filter(item => item !== choice)
            : [...selectedOptions, choice];

        setAnswers({ ...answers, food: updatedFood });
    };

    return (
        <div className={style.mainContainer}>
            <div className={style.imgBox5}></div>
            <div className={style.box}>
                <div className={style.progressContainer}>
                    <p className={style.progressText}>5 of 7</p>
                    <div className={style.progress}>
                        <div className={style.line5} />
                    </div>
                </div>
                <h1 className={style.formText}>What Kind of Food Do You Want?</h1>
                <div className={style.formContainer}>
                    {['Vegan', 'Meat & Fish', 'Pizza', 'i eat everything'].map(choice => (
                        <Toggle
                            key={choice}
                            value={choice}
                            selected={selectedOptions.includes(choice)}
                            handleToggle={(value) => {
                                handleToggle(value);
                                handleFoodSelect(value);
                            }}
                        />
                    ))}
                </div>
                <div className={style.btnContainer}>
                    <Link to="/activites"><button className={style.desButton1} type="button">Back</button></Link>
                    <Link to="/events"><button className={style.desButton2} type="button">Next</button></Link>
                </div>
            </div>
        </div>
    );
}
export default Food;