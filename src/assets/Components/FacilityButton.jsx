import React from 'react'
import { useNavigate } from 'react-router-dom'

const FacilityButton = () => {
    const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => navigate(`/facilityReg`)}
        className="flex items-center gap-2 bg-teal-400 px-8 py-3 rounded-full
        tex-gray-900 text-sm m-auto md:m-0 hover:scale-105 transition-all
        duration-300">
          
        Register you facility to join our plaform
      </button>
    </div>
  );
}

export default FacilityButton