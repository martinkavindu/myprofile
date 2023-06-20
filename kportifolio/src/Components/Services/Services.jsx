import React from 'react'
import './Services.css';
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png"
import Card from '../Card/Card';
import  {motion} from 'framer-motion';
import { themeContext } from '../../Context';
import { useContext } from 'react';
const Services = () => {
  const transition = {duration:1,type:'spring'};
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='services'id='Services'>
<div className='awesome'>
    <span style={{color:darkMode? 'white':''}}> My Awesome</span>
    <span> Services </span>
    <spane style={{color: darkMode? 'white' : ''}} > I specialize in React.js development, offering services such as building interactive SPAs, <br/>
        managing state with Redux or Context API and integrating APIs</spane>
        <a href='resume.pdf'download="kavindu.pdf">
                <button className='button s-button'> Download CV</button>
            </a>
            <div className='blur s-blur1' style={{background:"#ABF1FF94"}}>

            </div>
</div>
<div className='cards'>
  <motion.div
  whileInView={{left:'14rem'}}
  initial={{left:'25%'}}
  transition={transition}
  style={{left:'14rem'}}>
    <Card
    emoji ={HeartEmoji}
    heading = {'Design'}
    details ={"Figma, Sketch, Photoshop $ Empathy mapping"}
    />
  </motion.div>
  <div style={{top:'12rem',left:'-4rem'}}>
<Card
emoji={Glasses}
heading={'Developer'}
details={"HTML,CSS,Javascript,React $Bootstrap"}
/>
  </div>
  <div style={{top:'19rem',left:'12rem'}}>
    <Card
    emoji={Humble}
    heading={"UI/UX"}
    details={'Create a visually engaging and intuitive web design with a clear hierarchy and responsive layout'}
/>
  </div>
  <div className='blur s-blur' style={{background:'var(--purple)'}}>

  </div>
</div>
    </div>
  )
}

export default Services