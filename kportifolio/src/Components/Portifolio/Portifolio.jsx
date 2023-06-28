import React from 'react';
import "./Portifolio.css";
import {Swiper, SwiperSlide} from 'swiper/react';
import Sidebar from "../../img/sidebar.png";
import { themeContext } from '../../Context';
import { useContext } from 'react';
import Sea from "../../img/sea.png";
import Ecommerce from "../../img/ecommerce.png";
import Cart from "../../img/cart.png";
import Ngao from "../../img/ngao.png"
import 'swiper/css';
const Portifolio = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className='portifolio' id='Portifolio'>
<span  style={{color: darkMode? 'white' : ''}} > Recent Projects  </span>
<span>Portfolio</span>
<Swiper
spaceBetween={20}
slidesPerView={3}
grabCursor={true}
className='portifolio-slider'
>
    <SwiperSlide>
<img src={Ngao}alt=''/>
    </SwiperSlide>
    <SwiperSlide>
<img src={Ecommerce}alt=''/>
    </SwiperSlide>
    <SwiperSlide>
<img src={Sea}alt=''/>
    </SwiperSlide>
    <SwiperSlide>
<img src={Cart}alt=''/>
    </SwiperSlide>
</Swiper>
    </div>
  )
}

export default Portifolio