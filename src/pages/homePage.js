import React from 'react';
import './homePage.css'
import { ReactComponent as KibrisarabamLogo } from '../assets/kibrislogo.svg';
import { ReactComponent as PhoneLogo } from '../assets/phone.svg'; // Telefon ikonu
import { ReactComponent as WhatsappLogo } from '../assets/whatsapp.svg'; // WhatsApp ikonu
import { ReactComponent as MainCardPhoto } from '../assets/300x300.svg';
import { ReactComponent as InstagramLogo } from '../assets/instagram.svg';
import { Link } from 'react-router-dom';
import Navbar from "./components/Navbar";

// import { ReactComponent as BackgroundLogo } from '../assets/background.svg'; // WhatsApp ikonu





function HomePage() {
  return (
    <div className='main-class'>
      <Navbar />
      {/* --------HEADER SECTION-------- */}
      {/* <div className='header'>
        <div className='header_logo'>
        <a href='#'><KibrisarabamLogo /> </a>
        </div>
        <div className='header_menu'>
          <a href='#'><ul className='header_menu-item'>Anasayfa</ul></a>
          <a href='#'><ul className='header_menu-item'>Araçlarımız</ul></a>
          <a href='#'><ul className='header_menu-item'>İletişim</ul></a>
        </div>
        <div className='header_buttons'>
          <div className='header_menu-button-phone'>
          <a href='#'><PhoneLogo /></a> 
          </div>
          <div className='header_menu-button-whatsapp'>
          <a href='#'><WhatsappLogo /> </a>
          </div>
        </div>
      </div> */}

      {/* --------HERO SECTION-------- */}
      <section className='hero'>
        <div className='hero-overlay'>
          {/* <BackgroundLogo />  */}
          <div className='hero-search_bar'>
            <button className="search-button">🔍</button>
            <input type="text" placeholder="Arama yapın"/>
          </div>
        </div>
      </section>

      {/* --------MAIN SECTION-------- */}
      <section className='main'>
        <div className='main-tum_araclar-text'>Tüm Araçlar</div>
        <div className='main_box'>
          <Link to="/details">
                <div className='main_box-container'>
                  <div className='main_box-image'>
                    <MainCardPhoto/>
                  </div>
                  <div className='main_box-car_model-name'>Model Name</div>
                  <div className='main_box-cars'>
                      <div className='main_box-car_vites'>araba vites</div> <span>-</span> <div className='main_box-car_km'>araba km</div>
                  </div>
                  <ul className='main_box-details_section'>
                    <li className='main_box-details1'>Detay1</li>
                    <li className='main_box-details2'>Detay2</li>
                    <li className='main_box-details3'>Detay3</li>
                  </ul>
                </div>
                <div className='main_box-meeting'>Randevu Oluştur</div>
          </Link>
        </div>
      </section>

      {/* --------FOOTER SECTION-------- */}
      <footer className='footer'>
        <div className='footer_menu'>
          <a href='#'><ul className='footer_menu-item'>Yerimiz</ul></a>
          <a href='#'><ul className='footer_menu-item'>Araçlarımız</ul></a>
          <a href='#'><ul className='footer_menu-item'>İletişim</ul></a>
        </div>
        <div className='footer_icons'>
          <a href='#'><ul className='footer_menu-instagram'><InstagramLogo/></ul></a>
        </div> 
        <div className='footer_company-text'>Kibrisarabam @ 2024 All rights reserved.</div>
      </footer>
    </div>
  );
}

export default HomePage;
