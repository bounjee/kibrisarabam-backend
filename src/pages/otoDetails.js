import React from 'react';
import { ReactComponent as KibrisarabamLogo } from '../assets/kibrislogo.svg';
import { ReactComponent as PhoneLogo } from '../assets/phone.svg';
import { ReactComponent as WhatsappLogo } from '../assets/whatsapp.svg';
import { ReactComponent as InstagramLogo } from '../assets/instagram.svg';
import './otoDetails.css'
import SliderComponent from '../pages/components/Slider'; // Yeni slider bileşeninin importu
import Navbar from "./components/Navbar";

import mainPhoto from '../assets/mainPhoto.jpg';
import Photo1 from   '../assets/3278519.jpg';
import Photo2 from   '../assets/3278520.jpg';
import Photo3 from   '../assets/3278521.jpg';
import Photo4 from   '../assets/3278521.jpg';




const images = [
  mainPhoto,
  Photo1,
  Photo2,
  Photo3,
  Photo4,
];


function otoDetails() {
  return (
    <div className='main-class'>
      {/* --------HEADER SECTION-------- */}
      <Navbar />
      {/* <div className='header'>
        <div className='header_logo'>
        <KibrisarabamLogo /> 
        </div>
        <div className='header_menu'>
          <ul className='header_menu-item'>Anasayfa</ul>
          <ul className='header_menu-item'>Araçlarımız</ul>
          <ul className='header_menu-item'>İletişim</ul>
        </div>
        <div className='header_buttons'>
          <div className='header_menu-button-phone'>
          <PhoneLogo /> 
          </div>
          <div className='header_menu-button-whatsapp'>
          <WhatsappLogo /> 
          </div>
        </div>
      </div> */}

    {/* --------MAIN SECTION-------- */}
    <div className='main_text'>car_name</div>

    <SliderComponent images={images} />

    <div className='main-car_price-meeting_box-container'>
      <button className="main-car_price">car_price</button> 

      <button className="main-meeting-box">Randevu Oluştur</button> 
    </div>

    <div className='main-car_information'><p>Araç Bilgisi</p></div>
    <div className="main-car_information_texts">
      <div className="attribute">
        <span className="label">Model Yılı:</span>
        <span className="value">model_year</span>
      </div>
      <div className="attribute">
        <span className="label">Kilometre:</span>
        <span className="value">model_km</span>
      </div>
      <div className="attribute">
        <span className="label">Motor:</span>
        <span className="value">model_motor</span>
      </div>
      <div className="attribute">
        <span className="label">Vites:</span>
        <span className="value">model_gear</span>
      </div>
      <div className="attribute">
        <span className="label">Yakıt Tüketimi:</span>
        <span className="value">model_fuel</span>
      </div>
      <div className="attribute">
        <span className="label">0-100 km/h hızlanma:</span>
        <span className="value">model_speed</span>
      </div>
      <div className="attribute">
        <span className="label">Motor Gücü:</span>
        <span className="value">model_motor_power</span>
      </div>
      <div className="attribute">
        <span className="label">Araç Ağırlığı:</span>
        <span className="value">model_carweight</span>
      </div>
      <div className="attribute">
        <span className="label">Bagaj Hacmi:</span>
        <span className="value">model_luggage</span>
      </div>
      <div className="attribute">
        <span className="label">Araç Aktarımı:</span>
        <span className="value">vehicle_transfer</span>
      </div>
    </div>

    <div className='main-car_features'>Araç Özellikleri</div>
    <ul className='main-car_features_texts'>
      <li>Features</li> 
      <li>Features</li>
      <li>Features</li>
      <li>Features</li>
      <li>Features</li>
      <li>Features</li>
      <li>Features</li>
      <li>Features</li>
      <li>Features</li>
      <li>Features</li>
      <li>Features</li>
      <li>Features</li>
    </ul>

    {/* --------FOOTER-------- */}
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

export default otoDetails;
