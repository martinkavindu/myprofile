import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import profilePic1 from "../../img/profile4.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import ProfilePic4 from "../../img/profile5.jpg";

import './Testmonials.css';
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css'
const Testmonials = () => {
  const Clients = [
    {
    img:profilePic1,
    review:"Exceptional expertise and creativity. Advanced features, smooth process."
    },
    {
      img: profilePic2,
      review: "Grateful for their outstanding work. Professional, timely, and a pleasure to work with."},
    {
      img: profilePic3,
      review:"Thanks for the creative work you did for us, it was nice working with you. I really enjoy your services."
    },
    {
      img: ProfilePic4,
      review:"Fantastic experience. Attentive, valuable insights, and user-friendly website."
    }
  ]
  return (
    <div className='t-wrapper'id='Testimonials'>
<div className='t-heading'>
     <span>Clients always get</span>
     <span style={{color:"orange"}}>Exceptional Works</span>
     <span> from me ...</span>
</div>
<Swiper
modules={[Pagination]}
slidesPerView={1}
pagination={{clickable: true}}

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
<div className='blur t-blur1' style={{background: "var(--purple)"}}></div>
     <div className='blur t-blur2' style={{background: "skyblue"}}></div>
    </div>
  )
}

export default Testmonials