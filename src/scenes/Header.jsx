import React from 'react'
// import header from '../images/home.png'
import './Header.css'
import SearchBar from './SearchBar';



const Header = (props) => {
  return (
    <div>
        <div className="header">
        <div className='header-content flex flex-r text-center text-white'>
                <h2 className='header-title text-capitalize'>Find Your Book Of Choice.</h2>
                <p className='header-text fs-18 fw-3 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam beatae sapiente quibusdam consequatur perspiciatis facere laboriosam non nesciunt at id repudiandae, modi iste? Eligendi, rerum!</p>
                <SearchBar GetBooksData = {props.GetBooksData} />
            </div>
            
         </div>
    </div>
  )
}

export default Header;