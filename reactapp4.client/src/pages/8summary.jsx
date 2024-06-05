import React from 'react';
import { Link } from 'react-router-dom';
import { useAnswers } from '../components/AnswerContext';
import { useChoice } from '../components/landingchoice-logic';
import { useSelection } from '../components/button';
import style from '../style.module.css';
import Accordion from '../components/Accordion';

function Summary() {
    const { answers, resetAnswers } = useAnswers();
    const { aiHelp } = useChoice();
    const [selected, handleToggle, reset] = useSelection();

    const categories = [
        { id: 1, title: 'You are traveling to...', content: renderTravelTo() },
        { id: 2, title: 'Your trip will be...', content: renderTravelDates() },
        { id: 3, title: 'Activities on a day...', content: renderContent('active') },
        { id: 4, title: 'Who you are traveling with...', content: renderContent('party') },
        { id: 5, title: 'Your budget is...', content: renderContent('budget') },
        { id: 6, title: 'You want to explore...', content: renderContent('activities') },
        { id: 7, title: 'You want to eat...', content: renderContent('food') },
        { id: 8, title: 'Events to explore...', content: renderContent('events') }
    ];

    function renderTravelTo() {
        return (
            <div className={style.content}>
                <button className={style.sumBtn}>{answers.city}</button>
                <button className={style.sumBtn}>{answers.country}</button>
            </div>
        );
    }

    function renderTravelDates() {
        return (
            <div className={style.triangleContainer}>
                <button className={`${style.sumBtn} ${style.topBtn}`}>{answers.numberOfDays} days</button>
                <div className={style.triangleBottomBtns}>
                    <button className={style.sumBtn}>From: {answers.arrivalDate}</button>
                    <button className={style.sumBtn}>To: {answers.departureDate}</button>
                </div>
            </div>
        );
    }

    function renderContent(key) {
        return (

            <div className={style.content}>
                {Array.isArray(answers[key]) ? (
                    answers[key].map(item => <button key={item} className={style.sumBtn}>{item}</button>)
                ) : (
                    <p>{answers[key]}</p>
                )}
            </div>

        );
    }

    return (
        <div className={style.summaryParent}>
            <div className={style.summaryTop}>
                <h1 className={style.summaryTitle}>AMAZING!</h1>
                <h2 className={style.summaryText}>Here is a summary of all your choices</h2>
            </div>
            <div className={style.summary}>
                <Accordion items={categories} containerClass={style.accContainer} itemClass={style.accItem} contentClass={style.accContent} />
                <div className={style.aiBtn}>
                    {aiHelp !== null && (
                        <Link to={aiHelp ? "/airesult" : "/manresult"}>
                            <button className={style.aiButton}>AI generate it for me!</button>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Summary;
