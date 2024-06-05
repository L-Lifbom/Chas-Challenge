import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useOverlay } from './overlay';
import style from '../style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import logo from '../assets/logo.png';
import { useAnswers } from './AnswerContext';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const { toggleOverlay } = useOverlay();
    const { resetAnswers } = useAnswers();

    const toggleMenu = () => {
        setIsOpen(prev => !prev);
    };

    return (
        <div className={style.headerAlign}>
            <div className={style.header}>
                <div className="hamburger">
                    <FontAwesomeIcon icon={faBars} className={style.hamburgerIcon} onClick={toggleMenu} />
                    <div className={style.hamburgerMenu}>
                        {isOpen && (
                            <ul>
                                <Link to="/"><li>Home</li></Link>
                                <Link to="/"><li>About</li></Link>
                                <Link to="/"><li>Services</li></Link>
                                <Link to="/"><li>Contact</li></Link>
                            </ul>
                        )}
                    </div>
                </div>
                <Link to="/">
                    <img src={logo} className={style.logo} alt="TravelGenie" onClick={resetAnswers} />
                </Link>
                <div onClick={toggleOverlay}>
                    <FontAwesomeIcon icon={faUser} className={style.profileIcon} />
                </div>
            </div>
        </div>
    );
}

export default Header;