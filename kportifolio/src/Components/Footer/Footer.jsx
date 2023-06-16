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
        <Insta color="white"size="3rem"/>
        <Facebook color="white"size="3rem"/>
        <Github color="white"size="3rem"/>
        <Twitter color="white"size="3rem"/>

    </div>
    <div className="footer1">
                <p className="text-center"> Copyright&copy;{new Date().getFullYear()} All rights reserved |Powered by Martin kavindu   </p>
            </div>
</div>
    </div>
  )
}

export default Footer