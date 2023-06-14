import React from 'react'
import './Navbar.css';
const Navbar = () => {
  return (
   <div className='n-wrapper'>
    <div className='n-left'>
        <div className='name'> Martin</div>
        <span>toggle</span>
    </div>
    <div className='n-right'>
        <div className='n-list'>
            <ul style={{listStyle:'none'}}>
                <li>Home</li>
                <li>Services</li>
                <li>Experience</li>
                <li>Portifolio</li>
            <li>Testmonials</li>

            </ul>
        </div>
        <button className='button n-button'>
            Contact 
        </button>
    </div>
   </div>
  )
}

export default Navbar