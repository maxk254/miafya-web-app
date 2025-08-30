import React from 'react'
import banner from "../../assets/banner.png";
import { useNavigate } from 'react-router-dom';
const Banner = () => {
  const navigate =useNavigate()
  return (
    <div className="flex  bg-primary rounded-lg px-6 sm:py-4 md:px-14 lg:px-12 my-20 mx-10 sm:text-hidden">
      {/* left side */}
      <div className="flex-1 py-8 sm:py-4 md:py-16 lg:py-24 lg:pl-5">
        <div className="text-xl sm:text-xl md:w-2xl lg:text-5xl md:font-semibold sm:font-small text-white">
          <p>Book Appointment</p>
          <p className="mt-4">With 200+ Trusted Doctors, </p>
          <p className="mt-4">Pharmacists, Clinical</p>
          <p className="mt-4">Officers,Nutritionist </p>
        </div>
        <button
          onClick={() => {
            navigate("/login");
            scrollTo(0, 0);
          }}
          className="bg-white sm:text-base text-gray-950 md:px-8 md:py-3 sm:px-4 sm:py-1 rounded-full mt-6 hover:scale-105 transition-all cursor-pointer"
        >
          Create Account
        </button>
      </div>

      {/* right side */}
      <div className="hidden md:block md:w-1/2 lg:w-[370px] relative">
        <img
          className="w-full absolute bottom-0 right-0 max-w-md"
          src={banner}
          alt="doct atioeno"
        />
      </div>
    </div>
  );
}

export default Banner