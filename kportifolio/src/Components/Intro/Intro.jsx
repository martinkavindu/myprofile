import React from 'react';
import './Intro.css';
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png"
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import thumbup from "../../img/thumbup.png"
import Crown from "../../img/crown.png";
import glassesimoji from "../../img/emoji.png";
import { themeContext } from '../../Context';
import { useContext } from 'react';
import {motion} from 'framer-motion';
import { Link } from 'react-scroll';
import Typical from "react-typical";
const Intro = () => {
  const transition= {duration: 2, type:'spring'}
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='intro'>
        <div className='i-left' >
            <div className='i-name'>
                <span style={{color: darkMode? 'white' : ''}} 
                > Hello! </span>
                <div className='profile-details-role'>
                < span className='primary-text' style={{color: darkMode? 'white' : ''}} >
                    {""}
                    <h1>
                    <Typical
loop={Infinity}
steps={[
  "Martin Kavindu",1000,
    "Ethusiastic Dev😘",1000,
    "Front-end Developer 💻",1000,
    "Cross Platform dev 🌐",1000,
    "react Dev📱",1000,

]}/>
                    </h1>
                    </span>
                    </div>
                <span style={{color: darkMode? 'white' : ''}} >
                Experienced front-end developer with a strong passion for crafting elegant and functional user interfaces. 
    Proficient in HTML, CSS, and JavaScript, with expertise in modern frameworks like React and Bootstrap5                </span>
            </div>
            <Link spy={true} to= 'Contact' smooth={true} activeClass='activeClass'>

            <button className=' button i-button'>Hire Me</button>
    </Link>
           
            <div className='i-icons'>
                <a href='https://github.com/Mutuku1998'>
                <img src={Github} alt=''/>
                </a>
              <a href='https://www.linkedin.com/login'>
                <img src={LinkedIn} alt=''/>
                </a>
                <a href='https://www.instagram.com/accounts/login/'>
                <img src={Instagram} alt=''/>
                </a>
            </div>
        </div>
        <div className='i-right'>
        <div className='profile-picture'>
                <div className='profile-picture-background'>

                </div>
            </div>
    
      <motion.img 
      initial={{left:'-36%'}}
      whileInView={{left:'-24%'}}
      transition={transition}
      src={glassesimoji}  alt=''/>

     <motion.div
      initial={{top:'-4%',left:'74%'}}
      whileInView={{left:'68%'}}
      transition={transition}
       style={{top:'-4%',left:'68%'}}
       className='floating-div'>
        
        <FloatingDiv image={Crown} txt1='Web' txt2= 'Developer'/>
      </motion.div>
<div style={{ top:'18rem',left:'0rem' }}
className='floating-div'>
 <FloatingDiv image={thumbup} txt1='Best Project'txt2='Award'/>  
</div>
{/* blur divs */}
<div className='blur' style={{background:'rgb(236 210 255)'}}></div>
<div className='blur'
style={{
  background:'#C1F5FF',
  top:'17rem',
  width:'21rem',
  height:'11rem',
  left:'-9rem'
}}
>

</div>
        </div>
        

    </div>
  )
}

export default Intro