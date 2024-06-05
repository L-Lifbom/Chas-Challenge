import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import { useChoice } from "../components/landingchoice-logic";
import style from '../style.module.css'
import Desktop1 from '/images/planeView.jpg'
import Mobile1 from '/images/bike.png'
import Desktop2 from '/images/airBalloon.jpg'
import Mobile2 from '/images/smile.png'
import Desktop3 from '/images/pizza.jpg'
import Mobile3 from '/images/discover.png'
import Desktop4 from '/images/fjord.jpg'
import Mobile4 from '/images/about-us.png'

function Landing() {
    const { setAiHelp } = useChoice();
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

    const updateScreenSize = () => {
        setIsMobile(window.innerWidth <= 800);
    }

    useEffect(() => {
        window.addEventListener('resize', updateScreenSize);
        return () => window.removeEventListener('resize', updateScreenSize);
    }, []);

    return (
        <div>
            <div className={style.boxTest}>
                <div className={style.form}>
                    <h1 className={style.formTitle}>Welcome!</h1>
                    <h4 className={style.landText}>Plan your trip today!</h4>
                    <div className={style.landingContainer}>
                        <Link to={'/destination'}><button className={style.primaryBtn} onClick={() => setAiHelp(true)}>AI generate for me!</button></Link>
                        <Link to={'/destination'}><button disabled className={style.landButton} onClick={() => setAiHelp(false)}>I want to decide for myself</button></Link>
                    </div>
                </div>
            </div>
            <div className={style.article}>
                <article className={style.art}>
                    <h1 className={style.stepTitle}>How It Works</h1>
                    <div className={style.stepContainer}>
                        <div className={style.step}>
                            <p>Tell us where you're headed by entering the city and country along with your travel dates. This is your first step towards a personalized adventure that goes beyond the usual tourist spots.</p>
                            <img src={isMobile ? Mobile1 : Desktop1} alt="How it works image" />
                        </div>
                        <div className={style.stepRev}>
                            <img src={isMobile ? Mobile2 : Desktop2} alt="How it works image" />
                            <p>Fill out a brief form detailing your budget, the size of your group, and your interests. Whether you love art, enjoy outdoor activities, or want to explore local cuisines, your preferences will help shape a unique travel itinerary.</p>
                        </div>
                        <div className={style.step}>
                            <p>Our AI analyzes your preferences against a vast database of attractions, local secrets, and user recommendations to create a tailored activity plan that suits your desires and budget. You'll receive a detailed itinerary complete with daily activities, optimized routes, and insider tips, ensuring you can explore with confidence and enjoy a truly personalized travel experience.</p>
                            <img src={isMobile ? Mobile3 : Desktop3} alt="How it works image" />
                        </div>
                        <div className={style.stepRev}>
                            <img src={isMobile ? Mobile4 : Desktop4} alt="How it works image" />
                            {isMobile ? (
                                <p>At TravelGenie, we're committed to transforming how you experience travel. Our platform uses cutting-edge AI technology to sift through countless data points, providing bespoke travel plans that promise more than just sightseeing. We aim to help you discover the essence of every destination, away from the typical tourist paths and deep into the heart of the locale. Founded by travel enthusiasts and tech experts, TravelGenie is dedicated to enriching your travel experiences, making every trip unforgettable. Join us as we redefine exploration and turn every journey into an adventure.</p>
                            ) : (
                                <p><span className={style.About}> ABOUT US </span> <br />At TravelGenie, we're committed to transforming how you experience travel. Our platform uses cutting-edge AI technology to sift through countless data points, providing bespoke travel plans that promise more than just sightseeing. We aim to help you discover the essence of every destination, away from the typical tourist paths and deep into the heart of the locale. Founded by travel enthusiasts and tech experts, TravelGenie is dedicated to enriching your travel experiences, making every trip unforgettable. Join us as we redefine exploration and turn every journey into an adventure.</p>
                            )
                            }
                        </div>
                        <div className={style.landingContainer}>
                            <Link to={'/destination'}><button className={style.primaryBtn} onClick={() => setAiHelp(true)}>AI generate for me!</button></Link>
                            <Link to={'/destination'}><button disabled className={style.altLandButton} onClick={() => setAiHelp(false)}>I want to decide for myself</button></Link>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    )
}

export default Landing