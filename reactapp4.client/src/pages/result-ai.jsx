import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAnswers } from '../components/AnswerContext';
import style from '../style.module.css';
import Accordion from '../components/Accordion';

function AiResult() {
    const { answers } = useAnswers();
    const [tripPlan, setTripPlan] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const {
        city,
        date,
        party,
        budget,
        activities,
        food,
        active,
        events,
        numberOfDays
    } = answers;


    useEffect(() => {
        const fetchTripPlan = async () => {
            try {
                setLoading(true); // Set loading state to true before making the request
                const response = await axios.get(`/api/TravelApp/tripplan`, {
                    params: {
                        day: numberOfDays, // Use the calculated number of days
                        city: city,
                        activities: activities.join(','), // Activities as a comma-separated string
                        numberofppl: party.length, // Number of people
                        budget: budget.length > 0 ? budget[0] : 0, // Budget (first element if exists)
                        companions: party.join(',') // Party as a comma-separated string
                    }
                });
                // Handle the response
                setTripPlan(response.data.plan); // Assuming response.data contains the plan
                setLoading(false); // Set loading state to false after receiving the response
                setError(''); // Clear any previous error messages
            } catch (err) {
                // Handle errors
                setError('Error fetching trip plan');
                setLoading(false); // Set loading state to false in case of an error
            }
        };

        fetchTripPlan();
    }, [city, date, party, budget, activities, food, active, events, numberOfDays]);

    return (
        <div className={style.result__container}>
            {loading && <p>Loading...</p>}
            {error && <p className={style.error}>{error}</p>}
            {!loading && !error && (
                <Accordion
                    items={tripPlan.map((item, index) => ({
                        id: index, // Use index as the key
                        title: `Day ${item.day}`,
                        content: item.activities.map((activity, activityIndex) => (
                            <div key={activityIndex}>
                                <p><strong>{activity.time}</strong>: {activity.description}</p>
                            </div>
                        ))
                    }))}
                />
            )}
            <div className={style.button__container}>
                <button className={style.button_r1} >Save the trip!</button>
                <button className={style.button_r2}>Generate a new one</button>
            </div>
        </div>
    );
}

export default AiResult;
