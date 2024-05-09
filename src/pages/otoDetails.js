import React from 'react';
import { ReactComponent as KibrisarabamLogo } from '../assets/kibrislogo.svg';
import { ReactComponent as PhoneLogo } from '../assets/phone.svg';
import { ReactComponent as WhatsappLogo } from '../assets/whatsapp.svg';
import { ReactComponent as InstagramLogo } from '../assets/instagram.svg';
import './otoDetails.css'
import SliderComp from './components/Slider';  // Slider componenti
import Navbar from "./components/Navbar";

import Image1 from '../assets/mainPhoto.jpg';
import Image2 from '../assets/3278519.jpg';
import Image3 from '../assets/3278520.jpg';
import Image4 from '../assets/3278521.jpg';


const images = [
  Image1,
  Image2,
  Image3,
  Image4

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
    
     <SliderComp images={images}/>

    <div className='main-car_price-meeting_box-container'>
      <div class="main-car_price">
        <span>car_price</span>
      </div> 

      <div class="main-meeting-box">
        <span>Randevu Oluştur</span>
      </div> 
    </div>

    <div className='main-car_information'><p>Araç Bilgisi</p></div>
    <ul className='main-car_information_texts'>
      <li>Model Yılı: </li>
      <li>Kilometre: </li>
      <li>Motor: </li>
      <li>Vites: </li>
      <li>Yakıt Tüketimi: </li>
      <li>0-100 km/h hızlanma: </li>
      <li>Motor Gücü: </li>
      <li>Araç Ağırlığı: </li>
      <li>Bagaj Hacmi: </li>
      <li>Araç Aktarımı: </li>
    </ul>

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
    </ul>

      {/* --------FOOTER SECTION-------- */}
      <footer className='footer'>
        <div className='footer_menu'>
          <ul className='footer_menu-item'>Yerimiz</ul>
          <ul className='footer_menu-item'>Araçlarımız</ul>
          <ul className='footer_menu-item'>İletişim</ul>
        </div>
        <div className='footer_icons'>
          <ul className='footer_menu-instagram'>
          <InstagramLogo/>
          </ul>
        </div> 
        <div className='footer_company-text'>Kibrisarabam @ 2024 All rights reserved.</div>
      </footer>
    </div>
  );
}

export default otoDetails;
