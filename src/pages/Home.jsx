import React from 'react'
import HeroSec from '../assets/Components/HeroSec';
import Topdoctors from "../assets/Components/Topdoctors";
import Banner from '../assets/Components/Banner';
import Facilities from '../assets/Components/Facilities';
import Testimonies from '../assets/Components/Testimonies';



const Home = () => {
  return (
    <div>
      <HeroSec />
      <Topdoctors />
      <Banner/>
      <Facilities/>
      <Testimonies/>
    </div>
  );
}

export default Home