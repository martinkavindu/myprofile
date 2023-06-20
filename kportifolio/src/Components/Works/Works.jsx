import React from 'react'
import './Works.css';
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon  from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { themeContext } from '../../Context';
import { useContext } from 'react';

const Works = () => {
    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='works' id='Works' >
<div className='awesome'>
    <span style={{color: darkMode? 'white' : ''}}> Works for All these</span>
    <span> Brands $ Clients</span>
    <spane style={{color: darkMode? 'white' : ''}} >As a front-end developer,<br/> I create visually appealing and interactive web experiences <br/>
        using HTML, CSS, and JavaScript.

    </spane>
      
                <button className='button s-button'> Download CV</button>
            <div className='blur s-blur1' style={{background:"#ABF1FF94"}}></div>


            </div>
            <div className='w-right'>
                <div className='w-mainCircle'>
                    <div className='w-setCircle'>
                        <img src={Upwork}alt=''/>
                    </div>
                    <div className='w-setCircle'>
                        <img src={Fiverr}alt=''/>
                    </div>
                    <div className='w-setCircle'>
                        <img src={Amazon}alt=''/>
                    </div>
                    <div className='w-setCircle'>
                        <img src={Shopify}alt=''/>
                    </div>
                    <div className='w-setCircle'>
                        <img src={Facebook}alt=''/>
                    </div>
                </div>
        
                <div className='w-backCircle blueCircle'></div>
                <div className='w-backCircle yellowCircle'></div>
            </div>


    </div>
  )
}

export default Works 