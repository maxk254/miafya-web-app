import React from 'react'
import { useNavigate } from 'react-router-dom';

const Proffesionalbtn = () => {

  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => navigate('/docReg')}
        className="flex items-center gap-2 bg-teal-400 px-8 py-3 rounded-full
        tex-gray-900 text-sm m-auto md:m-0 hover:scale-105 transition-all
        duration-300">
        For Healthcare Professionals
      </button>
    </div>
  );
}

export default Proffesionalbtn