import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import profilePic1 from "../../img/profile4.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import './Testmonials.css';
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css'
const Testmonials = () => {
  const Clients = [
    {
    img:profilePic1,
    review:"Thanks for the creative work you did for us, it was nice working with you. I really enjoy your services."
    },
    {
      img: profilePic2,
      review: "Thanks for the creative work you did for us, it was nice working with you. I really enjoy your services."
    },
    {
      img: profilePic3,
      review:"Thanks for the creative work you did for us, it was nice working with you. I really enjoy your services."
    }
  ]
  return (
    <div className='t-wrapper'>
<div className='t-heading'>
     <span>Clients always get</span>
     <span>Exceptional Works</span>
     <span> from me ...</span>
     <div className='blur t-blur1' style={{background: "var(--purple)"}}></div>
     <div className='blur t-blur2' style={{background: "skyblue"}}></div>
</div>
<Swiper
modules={[Pagination]}
slidesPerView={1}
Pagination={{clickable: true}}

>
{Clients.map((Client,index)=>{
  return(
    <SwiperSlide key={index}>
      <div className="testimonial">
      <img src={Client.img}alt=''/>
      <span> {Client.review}</span>
      </div>
    
    </SwiperSlide>
  )
})}
</Swiper>
    </div>
  )
}

export default Testmonials