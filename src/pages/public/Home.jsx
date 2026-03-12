import React from 'react'
import HeroSec from '../../Components/sections/home/HeroSec';
import Topdoctors from "../../Components/sections/home/Topdoctors";
import Banner from '../../Components/sections/home/Banner';
import Facilities from '../../Components/sections/facilities/Facilities';
import Testimonies from '../../Components/sections/home/Testimonies';
import SpecialityMenu from '../../Components/sections/home/SpecialityMenu';
import WhoWeServe from '../../Components/sections/home/Whowe';


const Home = () => {
  return (
    <div>
      <HeroSec />
      <WhoWeServe />
      <Topdoctors />
      <SpecialityMenu />
      <Banner />
      <Facilities />
      <Testimonies />
    </div>
  );
}

export default Home;