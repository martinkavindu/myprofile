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
const Intro = () => {
  return (
    <div className='intro'>
        <div className='i-left' >
            <div className='i-name'>
                <span> Hello! I AM</span>
                <span>Martin Kavindu</span>
                <span>
Frontend Developer with  high level of Experience in web development
and designing. Reactjs &Bootsrap Developer at heart and create features that are best suited for the job at hand.
                </span>
            </div>
            
            <button className=' button i-button'>Hire Me</button>
    
           
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
      <img src={glassesimoji}  alt=''/>
      <div style={{top:'-4%',left:'68%'}}>
        <FloatingDiv image={Crown} txt1='Web' txt2= 'Developer'/>
      </div>
<div style={{ top:'18rem',left:'0rem'}}>
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