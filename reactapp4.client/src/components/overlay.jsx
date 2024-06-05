import React, { createContext, useState, useContext } from "react";
import ReactDOM from 'react-dom'
import style from '../style.module.css'
import { AuthContext } from './Auth';
import { Link, useNavigate } from 'react-router-dom';

const OverlayContext = createContext();
export const useOverlay = () => useContext(OverlayContext);

export const OverlayProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOverlay = () => setIsOpen(prev => !prev);

    return (
        <OverlayContext.Provider value={{ isOpen, toggleOverlay }}>
            {children}
            <Overlay isOpen={isOpen} toggleOverlay={toggleOverlay} />
        </OverlayContext.Provider>
    );
};

const Overlay = ({ isOpen, toggleOverlay }) => {
    const { isSignedIn, setSignedIn } = useContext(AuthContext);
    const navigate = useNavigate();
    if (!isOpen) return null;

    const handleSignOut = () => {
        setSignedIn(false);
        onClose();
    }

    const handleNavigate = (path) => {
        toggleOverlay();
        navigate(path)
    }

    return ReactDOM.createPortal(
        <div className={style.overlay}>
            <div className={style.overlayContent} onClick={(e) => e.stopPropagation()}>
                <h1 className={style.overlayTitle}>{isSignedIn ? 'Profile' : 'Welcome'}</h1>
                {isSignedIn ? (
                    <>
                        <p>Welcome, User!</p>
                        <button className={style.overlayBtn}>Saved Trips</button>
                        <button className={style.overlayBtn} onClick={handleSignOut}>Logout</button>
                    </>
                ) : (
                    <>
                        <button onClick={() => handleNavigate('/signup')} className={style.overlayBtn}>Sign up</button>
                        <button onClick={() => handleNavigate('/login')} className={style.overlayBtn}>Login</button>
                    </>
                )}
            </div>
        </div>,
        document.body
    );
};

export default Overlay;