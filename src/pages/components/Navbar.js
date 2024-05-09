import { useRef } from "react";
import { ReactComponent as KibrisarabamLogo } from '../../assets/kibrislogo.svg';
import { ReactComponent as PhoneLogo } from '../../assets/phone.svg';
import { ReactComponent as WhatsappLogo } from '../../assets/whatsapp.svg';
import { ReactComponent as MainCardPhoto } from '../../assets/rect.svg';
import { ReactComponent as InstagramLogo } from '../../assets/instagram.svg';

import "../homePage.css";

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    return (
        <header className="header">
            <div className='header_logo'><a href='#'><KibrisarabamLogo /></a></div>
            <nav className='header_menu' ref={navRef}>
                <a href='#'><ul className='header_menu-item'>Anasayfa</ul></a>
                <a href='#'><ul className='header_menu-item'>Araçlarımız</ul></a>
                <a href='#'><ul className='header_menu-item'>İletişim</ul></a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>X</button>
            </nav>
            <div className='header_buttons'>
                <div className='header_menu-button-phone'>
                    <a href='#'><PhoneLogo /></a> 
                </div>
                <div className='header_menu-button-whatsapp'>
                    <a href='#'><WhatsappLogo /> </a>
                </div>
        </div>
            <button className="nav-btn" onClick={showNavbar}>☰</button>
        </header>
    );
}

export default Navbar;
