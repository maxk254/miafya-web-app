import React, { useContext } from 'react'

import { useNavigate } from "react-router-dom";
import { AppContext } from '../../context/AppContext';


const Topdoctors = () => {

  const navigate = useNavigate();
  const { doctors } = useContext(AppContext); //importing { doctors } from '../assets' using the AppContext
  return (
    <div className="flex flex-col items-center gap-4 my-16 w-full text-gray-900 md:mx-10">
      <h1 className="text-4xl font-medium">Top Health Professionals To Book</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Simply browse through our extensive list of health profesionals
      </p>
      <div className="grid grid-cols-1 md:grid-cols-5 sm:grid-cols-1 gap-4 pt-5 gap-y-6 px-3 sm:px-0">
        {doctors.slice(0, 10).map((item, index) => (
          <div
            onClick={() => navigate(`/appointment/${item._id}`)}
            className="border border-teal-100 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
            key={index}>
            <img
              className="bg-blue-50 w-full h-40"
              src={item.image}
              alt="dockimage"/>

            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-center text-green-500">
                <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                <p>Available</p>
              </div>
              <p className="text-gray-900 text-lg font-medium">{item.name}</p>
              <p className="text-gray-700 text-sm">{item.Speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          navigate("/healthprofesionals");
          scrollTo(0, 0);
        }}
        className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-6 cursor-pointer rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
        More
      </button>
    </div>
  );
};

export default Topdoctors;;