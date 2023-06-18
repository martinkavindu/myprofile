import React from 'react'
import './Navbar.css';
import Toggle from '../Toggle/Toggle';
import { Link } from 'react-scroll';
const Navbar = () => {
  return (
   <div className='n-wrapper' id='Navbar'>
    <div className='n-left'>
        <div className='name'> Martin</div>
     <Toggle/>
    </div>
    <div className='n-right'>
        <div className='n-list'>
            <ul style={{listStyle:'none'}}>
                <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                <li>Home</li>
                </Link>
                <Link spy={true} to='Services' smooth={true} activeClass='activeClass'>
                <li>Services</li>
                </Link>
                <Link spy={true} to='Experience' smooth={true} activeClass='activeClass'>
                <li>Experience</li>
                </Link>
                <Link spy={true} to='Portifolio' smooth={true} activeClass='activeClass'>
                <li>Portifolio</li>
                </Link>
                <Link spy={true} to= 'Testimonials' smooth={true} activeClass='activeClass'>
            <li>Testmonials</li>
</Link>
            </ul>
        </div>
        <Link spy={true} to= 'Contact' smooth={true} activeClass='activeClass'>
        <button className='button n-button'>
            Contact 
        </button>
        </Link>
    </div>
   </div>
  )
}

export default Navbar