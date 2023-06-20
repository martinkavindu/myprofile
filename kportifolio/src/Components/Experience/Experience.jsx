import React from 'react';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import './Experience.css'
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='experience' id='Experience'>
<div className='achievement'>
    <div className='circle'>3+</div>
    <span>Years</span>
    <span>Experience</span>
</div>
<div className='achievement'>
     <div className='circle' style={{color: darkMode? 'white' : ''}} >10+</div>
     <span>Projects</span> 
     <span>Completed</span>
    
</div>

<div className='achievement'>
     <div className='circle'>2+</div>
     <span>Companies</span> 
     <span>Work</span>
    
</div>
    </div>
  )
}

export default Experience