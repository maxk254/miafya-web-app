import React from 'react'
import logo from '../assets/logo.png'
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate();


  return (
    <div className="navbar">
      <img onClick={()=> navigate('/')} src={logo} alt="miafya" width="100px" className='img' />
      <ul>
        <NavLink to="/">
          <li>HOME</li>
        </NavLink>
        <NavLink to="/healthservices">
          <li>HEALTH SERVICES</li>
        </NavLink>
        <NavLink to="/about">
          <li>ABOUT US</li>
        </NavLink>
        <NavLink to="/contact">
          <li>CONTACTS</li>
        </NavLink>
        <NavLink to="/login">
          <li>LOGIN</li>
        </NavLink>
        <NavLink to="/signup">
          <li>SIGNUP</li>
        </NavLink>
      </ul>
      <button onClick={()=> navigate('/signup')}>Get started</button>
    </div>
  );
}

export default Navbar