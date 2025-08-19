import React from 'react'
import logo from '../assets/logo.png'
const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <img src= {logo} alt="miafya" width={30}/>
        <li>Home</li>
        <li>About</li>
        <li>Contacts</li>
        <li>Sign in/ log in</li>
      </ul>
    </div>
  );
}

export default Navbar