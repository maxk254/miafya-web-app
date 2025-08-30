import React, { useState } from 'react'
import miafyalogo from "../assets/miafyalogo.png";
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate();

    const [showMenu, setShowMenu] =useState(false)
    const [token, setToken] = useState(false)

  return (
    <div className="navbar">
      <img
        onClick={() => navigate("/")}
        src={miafyalogo}
        alt="miafya"
        width="100px"
        className="img"
      />
      <ul>
        <NavLink to="/">
          <li>HOME</li>
        </NavLink>
        <NavLink to="/healthprofesionals">
          <li>HEALTH PROFESSIONALS</li>
        </NavLink>
        <NavLink to="/healthfacilities">
          <li>HEALTH FACILITIES</li>
        </NavLink>
        <NavLink to="/contact">
          <li>CONTACTS</li>
        </NavLink>
        <NavLink to="/login">
          <li>LOGIN</li>
        </NavLink>
      </ul>
      <div>
        {token ? (
          <div>
            <img src="" alt="" />
          </div>
        ) : (
          <button onClick={() => navigate("/login")}>Get started</button>
        )}
      </div>
    </div>
  );
}

export default Navbar