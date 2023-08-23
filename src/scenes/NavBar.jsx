import React from 'react'
import './NavBar.css'
import logo from '../images/logo.png'

// import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
       <nav className='navbar'>
        <div className="logo">
            
            <img className='logo-image' src={logo}  alt="logo"/>
        </div>
        <ul className = "nav-elements">
            <li className='nav-item '>Home</li>
            <li className='nav-item '>About</li>
            <li className='nav-item '>Contact</li>
          </ul>
       </nav>
        

    
        
    </div>
  )
}

export default NavBar