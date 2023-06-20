import React from 'react'
import './Footer.css';
import Wave from "../../img/wave.png";
import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import Facebook from '@iconscout/react-unicons/icons/uil-facebook';
import Github from '@iconscout/react-unicons/icons/uil-github';
import Twitter from '@iconscout/react-unicons/icons/uil-twitter';

const Footer = () => {
  return (
    <div className='footer'>
<img src={Wave}alt='' style={{width:'100%'}}/>
<div className='f-content'>

    <div className='f-icons'>
       <a href='https://www.instagram.com/accounts/login/'alt>
         <Insta color="white"size="3rem"/></a>
        <a href='https://www.facebook.com/login.php/'>
        <Facebook color="white"size="3rem"/></a>
        <a href='https://github.com/'>
        <Github color="white"size="3rem"/></a>
        <a href='https://twitter.com/i/flow/login'>
        <Twitter color="white"size="3rem"/></a>


    </div>
    <div className="footer1">
                <p className="text-center"> Copyright&copy;{new Date().getFullYear()} All rights reserved |Powered by Martin kavindu   </p>
            </div>
</div>
    </div>
  )
}

export default Footer