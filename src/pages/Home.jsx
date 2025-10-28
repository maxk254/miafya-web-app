import React from 'react'
import HeroSec from '../assets/Components/HeroSec';
import Topdoctors from "../assets/Components/Topdoctors";
import Banner from '../assets/Components/Banner';
import Facilities from '../assets/Components/Facilities';
import Testimonies from '../assets/Components/Testimonies';
import SpecialityMenu from '../assets/Components/SpecialityMenu';
import Proffesionalbtn from '../assets/Components/Proffesionalbtn';
import FacilityButton from '../assets/Components/FacilityButton';



const Home = () => {
  return (
    <div>
      <HeroSec />
      <div className="flex flex-col items-center  gap-10  bg-white px-8 py-3 rounded-full text-gray-900 text-sm m-auto md:m-0 cursor-pointer">
        <Proffesionalbtn/>
        <FacilityButton />
      </div>
      <Topdoctors />
      <SpecialityMenu />
      <Banner />
      <Facilities />
      <Testimonies />
    </div>
  );
}

export default Home;