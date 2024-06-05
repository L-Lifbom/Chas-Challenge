import React, { createContext, useContext, useState } from 'react';

const initialState = {
    city: '',
    date: '',
    party: [],
    budget: [],
    activities: [],
    food: [],
    active: [],
    events: [] // This will store the number of days
};

export const AnswerContext = createContext();

export const useAnswers = () => useContext(AnswerContext);

export const AnswerProvider = ({ children }) => {
    const [answers, setAnswers] = useState(initialState);

    // Reset function to revert the answers to the initial state
    const resetAnswers = () => {
        setAnswers(initialState);
    };

    return (
        <AnswerContext.Provider value={{ answers, setAnswers, resetAnswers }}>
            {children}
        </AnswerContext.Provider>
    );
};