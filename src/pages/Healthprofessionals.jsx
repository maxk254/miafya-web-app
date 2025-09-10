import React, { useContext, useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";


  const Healthprofessionals = () => {

    const navigate = useNavigate();

    const { speciality } = useParams();

    const [filterDoc, setFilterDoc] = useState([]);
  
    const { doctors } = useContext(AppContext);


  const appyFilter = () =>{
    if (speciality) {
      setFilterDoc(
        doctors.filter((doc) => doc.Speciality === speciality)
      );
    } else {
      setFilterDoc(doctors);
    }
  }

  useEffect(() => {
    appyFilter();
  }, [doctors, speciality]);

  return (
    <div>
      <p className="text-gray-900 ">Browse through the doctors speciality.</p>
      <div className="flex flex-col sm:flex-row items-start gap-5  mt-5">
        <div className="flex flex-col gap-4 text-sm text-gray-600 cursor-pointer">
          <p
            onClick={() =>
              speciality === " General physician"
                ? navigate("/doctors")
                : navigate("/doctors/General physician")
            }
            className={
              "{w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer}"
            }
          >
            General physician
          </p>
          <p
            onClick={() =>
              speciality === "Gynecologist"
                ? navigate("/doctors")
                : navigate("/doctors/Gynecologist")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}
          >
            Gynecologist
          </p>
          <p
            onClick={() =>
              speciality === "Pediatrician"
                ? navigate("/doctors")
                : navigate("/doctors/Pediatrician")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}
          >
            Pediatrician
          </p>
          <p
            onClick={() =>
              speciality === "Nutritionist"
                ? navigate("/doctors")
                : navigate("/doctors/Nutritionist")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}
          >
            Nutritionist
          </p>
          <p
            onClick={() =>
              speciality === "Pharmacist"
                ? navigate("/doctors")
                : navigate("/doctors/Pharmacist")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}
          >
            Pharmacist
          </p>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-5 sm:grid-cols-1 gap-4 pt-5 gap-y-6 px-3">
        {filterDoc.map((item, index) => (
          <div
            onClick={() => navigate(`/appointment/${item._id}`)}
            className="border border-teal-100 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
            key={index}
          >
            <img
              className="bg-blue-50 w-full h-50"
              src={item.image}
              alt="dockimage"
            />
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
    </div>
  );
};

export default Healthprofessionals;