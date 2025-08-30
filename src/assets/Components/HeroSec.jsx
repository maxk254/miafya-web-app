import React from 'react'
import {useNavigate } from "react-router-dom";
import dockp from "../../assets/dockp.png";
import hero from "../../assets/hero.png";
const HeroSec = () => {

  const navigate = useNavigate();
  return (
    <div className="herosection">
      <div>
        <img src={hero} alt="DoctorPic" />
        <h2>
          The best platform connecting you to qualified health professional to
          help you address your health needs
        </h2>
        <p>
          Need quickly response about you condition to consult a doctor feel
          free to explore various doctors and talk to them to assist you
        </p>
      </div>

      <button onClick={() => navigate("/topdoctors")}>wanna speak to a doctor</button>
      <h6>
        <span>24/7 available |</span>
        <span>200+ Health profesionals |</span>
        <span>100k+ patients</span>
      </h6>
    </div>
  );
}

export default HeroSec