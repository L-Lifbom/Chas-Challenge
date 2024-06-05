import React from 'react';
import style from '../style.module.css'

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.footerContent}>
                <div className={style.footerColumn}>
                    <h4 className={style.footerTitle}>Om TravelGenie</h4>
                    <ul>
                        <li><a href="#!">Om oss</a></li>
                        <li><a href="#!">Hållbarhet</a></li>
                        <li><a href="#!">Pride</a></li>
                        <li><a href="#!">Whistleblowing</a></li>
                        <li><a href="#!">Jobba hos oss</a></li>
                        <li><a href="#!">Pressrum</a></li>
                    </ul>
                </div>
                <div className={style.footerColumn}>
                    <h4 className={style.footerTitle}>Kundservice</h4>
                    <ul>
                        <li><a href="#!">Kontakta oss</a></li>
                        <li><a href="#!">Vanliga frågor & svar</a></li>
                        <li><a href="#!">App</a></li>
                        <li><a href="#!">Användarvillkor webbplats</a></li>
                        <li><a href="#!">Allmänna villkor / Sekretesspolicy</a></li>
                        <li><a href="#!">Cookies</a></li>
                    </ul>
                </div>
            </div>
            <div className={style.footerSocial}>
                <a href="https://www.facebook.com"><img src='/icons/facebook.png' width={60} alt='Facebook' /></a>
                <a href="https://www.instagram.com"><img src='/icons/instagram.png' width={60} /></a>
                <a href="https://www.twitter.com"><img src='/icons/twitter.png' width={60} /></a>
            </div>
        </footer>
    );
};

export default Footer;