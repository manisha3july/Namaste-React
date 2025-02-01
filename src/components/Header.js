import React from 'react';
import { LOGO_URL } from './utils/constants';
import { useState } from 'react';
import { Link } from 'react-router-dom';


  const Header = () => {

    const [btnNameReact, setBtnNameReact] = useState('Login')

   let btnName  = 'LOGin'
    return (
        <header>
            <div className='logo-container'>
                <img src={LOGO_URL} ></img>
            </div>
            <ul className='nav-item'>
                <li><Link to='/'>Home</Link> </li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact Us</Link></li>
                <li><Link to='./about'>Cart</Link></li>
                <li><button className='login-btn' onClick={()=>{
                   btnNameReact == 'Login' ? setBtnNameReact("Logout") : setBtnNameReact('Login')
                }}>{btnNameReact}</button></li>
            </ul>
        </header>
    )
}

export default Header