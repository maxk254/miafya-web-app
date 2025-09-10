import React from 'react'
import { SpecialityData } from "../assets";
import { Link } from "react-router-dom";
const SpecialityMenu = () => {
  return (
    <div
      id="speciality"
      className="flex flex-col items-center gap-2 py-16 text-gray-800">
      <div>
        <h1 className="text-3xl font-medium text-black">
          Find Doctor By Speciality
        </h1>
        <p className="sm:w-2/2 mt-1.5 text-center text-sm">
          Findind a doctor made eassy click the menu to get the speciality you
          want.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 sm:grid-cols-1  sm:justify-center gap -2 pt-5 w-full overflow-scroll">
        {SpecialityData.map((item, index) => (
          <Link
            onClick={() => scrollTo(0, 0)}
            className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500"
            key={index}
            // linking to speciality of the professional
            to={`/healthprofessionals/${item.Speciality}`}> 
            <img className="w-16 rounded-full" src={item.image} alt="" />
            <p>{item.Speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SpecialityMenu
