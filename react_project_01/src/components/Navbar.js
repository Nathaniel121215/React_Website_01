import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Link as Links } from 'react-scroll';

const Navbar = () => {

    //click function for nav
    const [click, setClick] = useState(false);
    // const [button, setButton] = useState(true);
  
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
  
    // const scrollToCards = (event) => {
    //   event.preventDefault();
    //   const element = document.getElementById('services');
    //   element.scrollIntoView({ 
    //     behavior: 'smooth', 
    //     block: 'start'
    //   });
    // }
    
  return (
      <nav className='navbar'>
        <div className='navbar-container'>
          <div>
          <Links smooth={true} offset={-100} duration={500} to='hero' className='navbar-logo' onClick={closeMobileMenu}>
            TRVL
            <i className='fab fa-typo3' />
          </Links>
          </div>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <div className='nav-inside'>
            <li className='nav-item'>
              <div to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </div>
            </li>
            <li className='nav-item'>
              <Links smooth={true} offset={-20} duration={500} to ='services' className='nav-links' onClick={closeMobileMenu}>
                Services
              </Links>
            </li>
            <li className='nav-item'>
              <div to ='/products' className='nav-links' onClick={closeMobileMenu}>
                Products
              </div>
            </li>
            <li className='nav-item'>
              <Link to ='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                Sign Up
              </Link>
            </li>
            </div>
          </ul>
          <button className='btn btn--outline '>SIGN UP</button>

          
        </div>
      </nav>
    
  )
}

export default Navbar