import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CustomDate from '../components/CustomDate';
import style from '../style.module.css'
import { useAnswers } from '../components/AnswerContext';


const Destination = () => {
    const navigate = useNavigate();
    const { answers, setAnswers } = useAnswers();
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(answers.country || "")
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState(answers.city || "");
    const [arrivalDate, setArrivalDate] = useState(answers.arrivalDate || "");
    const [departureDate, setDepartureDate] = useState(answers.departureDate || "");
    const [numberOfDays, setNumberOfDays] = useState(0); // State to hold the number of days

    useEffect(() => {
        async function fetchCountries() {
            try {
                const response = await fetch("api/TravelApp/countries");
                const data = await response.json();
                setCountries(Array.isArray(data) ? data : []);
            } catch (error) {
                console.error('Error fetching countries:', error);
                setCountries([]); // Ensure countries is set to an empty array on error
            }
        }
        fetchCountries();
    }, []);

    useEffect(() => {
        async function fetchCities() {
            if (selectedCountry) {
                try {
                    const response = await fetch(`api/TravelApp/cities?country=${selectedCountry.toLowerCase()}`);
                    const data = await response.json();
                    setCities(data);
                } catch (error) {
                    console.error('Error fetching cities:', error);
                }
            }
        }
        fetchCities();
    }, [selectedCountry]);

    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
        setSelectedCity("");
    };

    const handleCityChange = (event) => {
        setSelectedCity(event.target.value);
    };



    const handleDateChange = (event) => {
        const { name, value } = event.target;
        let newNumberOfDays = numberOfDays;



        if (name === 'arrivalDate') {
            setArrivalDate(value);

            if (departureDate) {
                newNumberOfDays = Math.floor((new Date(departureDate) - new Date(value)) / (1000 * 60 * 60 * 24));
                setNumberOfDays(newNumberOfDays);

            }

        } else if (name === 'departureDate') {
            setDepartureDate(value);
            if (arrivalDate) {
                newNumberOfDays = Math.floor((new Date(value) - new Date(arrivalDate)) / (1000 * 60 * 60 * 24));
                setNumberOfDays(newNumberOfDays);

            }

        }



        setAnswers(prev => ({
            ...prev,
            [name]: value,
            numberOfDays: newNumberOfDays,
            country: selectedCountry,
            city: selectedCity,

        }));

        console.log("Updated Dates and Days:", name, value, newNumberOfDays);
    }

    const handleNextButtonClick = () => {
        if (selectedCountry && selectedCity && arrivalDate && departureDate) {
            const arrival = new Date(arrivalDate);
            const departure = new Date(departureDate);
            const numberOfDays = Math.floor((departure - arrival) / (1000 * 60 * 60 * 24));

            setAnswers({
                ...answers,
                arrivalDate,
                departureDate,
                numberOfDays
            });

            navigate('/party')
        } else {
            alert("Please fill in all fields.");
        }
    };

    return (
        <div className={style.mainContainer}>
            <div className={style.textBox}>
                <h1>Lets start with some questions to help you find the best<br /> activites just for your trip!</h1>
            </div>
            <div className={style.box}>
                <div className={style.progressContainer}>
                    <p className={style.progressText}>1 of 7</p>
                    <div className={style.progress}>
                        <div className={style.line1} />
                    </div>
                </div>
                <h2 className={style.formText}>Where and when do you plan to travel?</h2>
                <div className={style.inputs}>
                    <select className={style.locationLabel} id="country" value={selectedCountry} onChange={handleCountryChange}>
                        <option value="">Select a country</option>
                        {countries.map((country, index) => (
                            <option key={index} value={country}>
                                {country}
                            </option>
                        ))}
                    </select>
                    <select className={style.locationLabel} id="city" value={selectedCity} onChange={handleCityChange}>
                        <option value="">Select a city</option>
                        {cities.map((city, index) => (
                            <option key={index} value={city}>
                                {city}
                            </option>
                        ))}
                    </select>
                </div>
                <div className={style.inputsDate}>
                    <div className={style.arrivalContainer}>
                        <p>{arrivalDate ? `${arrivalDate}` : 'Arrival Date'}</p>
                        <CustomDate name="arrivalDate" value={arrivalDate} onChange={handleDateChange} />
                    </div>
                    <div className={style.departureContainer}>
                        <p>{departureDate ? `${departureDate}` : 'Departure Date'}</p>
                        <CustomDate name="departureDate" value={departureDate} onChange={handleDateChange} />
                    </div>
                </div>
                <div className={style.btnContainer}>
                    <Link to={'/'}><button className={style.desButton1}>Back</button></Link>
                    <Link to="/party"><button className={style.desButton2} type="submit">Next</button></Link>
                </div>
            </div>
        </div>
    );
}

export default Destination;