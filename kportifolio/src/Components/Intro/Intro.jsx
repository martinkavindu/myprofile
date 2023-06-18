import React from 'react';
import './Intro.css';
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/mutuku.png";
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import thumbup from "../../img/thumbup.png"
import Crown from "../../img/crown.png";
import glassesimoji from "../../img/emoji.png";
import { themeContext } from '../../Context';
import { useContext } from 'react';
import {motion} from 'framer-motion';
import { Link } from 'react-scroll';
const Intro = () => {
  const transition= {duration: 2, type:'spring'}
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='intro'>
        <div className='i-left' >
            <div className='i-name'>
                <span style={{color: darkMode? 'white' : ''}} 
                > Hello! I AM</span>
                <span>Martin Kavindu</span>
                <span>
Frontend Developer with  high level of Experience in web development
and designing. Reactjs &Bootsrap Developer at heart and create features that are best suited for the job at hand.
                </span>
            </div>
            <Link spy={true} to= 'Contact' smooth={true} activeClass='activeClass'>

            <button className=' button i-button'>Hire Me</button>
    </Link>
           
            <div className='i-icons'>
                <a href='https://github.com/Mutuku1998'>
                <img src={Github} alt=''/>
                </a>
              <a href='#'>
                <img src={LinkedIn} alt=''/>
                </a>
                <a href='#'>
                <img src={Instagram} alt=''/>
                </a>
            </div>
        </div>
        <div className='i-right'>
      
      <img src={ Vector1} alt=''/>
      
      <img src={ Vector2} alt=''/>
      
      <img src={ boy} alt=''/>
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