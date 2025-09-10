import React, { useState } from "react";
import miafyalogo from "../assets/miafyalogo.png";
import { NavLink, useNavigate } from "react-router-dom";
import logged from "../assets/logged.png";
import dropdown from "../assets/dropdown.png";
const Navbar = () => {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className="flex items-center justify-between text-lg  py- mb-5 border-b border-b-gray-400">
      <img
        onClick={() => navigate("/")}
        src={miafyalogo}
        alt="miafya"
        width={90}
        className="cursor-pointer"
      />
      <ul className="hidden md:flex items-start gap-5 font-medium bg-white">
        <NavLink to="/">
          <li className="py-1 hover:bg-teal-200 rounded-full px-3">HOME</li>
        </NavLink>
        <NavLink to="/healthprofesionals">
          <li className="py-1 hover:bg-teal-200 rounded-full px-3">
            HEALTH PROFESSIONALS
          </li>
        </NavLink>
        <NavLink to="/healthfacilities">
          <li className="py-1 hover:bg-teal-200 rounded-full px-3">
            HEALTH FACILITIES
          </li>
        </NavLink>
        <NavLink to="/contact">
          <li className="py-1 hover:bg-teal-200 rounded-full px-3">CONTACTS</li>
        </NavLink>
        <NavLink to="/login">
          <li className="py-1 hover:bg-teal-200 rounded-full px-3">LOGIN</li>
        </NavLink>
      </ul>
      <div>
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img className="w-8 rounded-full" src={logged} alt="" />
            <img className="w-7" src={dropdown} alt="" />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-50 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p
                  onClick={() => navigate("/Myprofile")}
                  className="hover:text-black cursor-pointer"
                >
                  My profile
                </p>
                <p
                  onClick={() => navigate("/Myappointment")}
                  className="hover:text-black cursor-pointer"
                >
                  My Appointment
                </p>
                <p
                  onClick={() => setToken(false)}
                  className="hover:text-black cursor-pointer"
                >
                  Log-out
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            className="bg-primary text-white px-3 py-3 rounded-full font-light hidden md:block cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Get started
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
