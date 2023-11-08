
import React, {useState, useEffect} from 'react'
import './Navbar.css';
import Toggle from '../Toggle/Toggle';
import { Link } from 'react-scroll';
import menu from '../../img/menu.png';
const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)


  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    }

  }, [])

  return (
    
   <div className='n-wrapper' id='Navbar'>
    <div className='n-left'>
        <div className='name'> Martin </div>
     <Toggle/>
    </div>
    <div className='n-right'>
        <div className='n-list'>
            <nav className='n-list'>
            {(toggleMenu || screenWidth > 500) && (
            <ul style={{listStyle:'none'}}>
                <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                <li className='items'>Home</li>
                </Link>
                <Link spy={true} to='Services' smooth={true} activeClass='activeClass'>
                <li className='items'>Services</li>
                </Link>
                <Link spy={true} to='Experience' smooth={true} activeClass='activeClass'>
                <li className='items'>Experience</li>
                </Link>
                <Link spy={true} to='Portifolio' smooth={true} activeClass='activeClass'>
                <li className='items'>Portifolio</li>
                </Link>
                <Link spy={true} to= 'Testimonials' smooth={true} activeClass='activeClass'>
            <li className='items'>Testmonials</li>
</Link>
            </ul>
             )}
             
            <button  onClick={toggleNav} className="btn"><img src={menu} alt=''/></button>
            </nav>
     
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