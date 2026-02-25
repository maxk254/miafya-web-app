import React, { useState } from "react";
import miafyalogo from "../assets/miafyalogo.png";
import { NavLink, useNavigate } from "react-router-dom";
import logged from "../assets/logged.png";
import dropdown from "../assets/dropdown.png";
import menu from "../assets/menu.png";
const Navbar = () => {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className="flex items-center justify-between text-lg  py- mb-5 border-b border-b-gray-400 sticky top-0 z-50 bg-white">
      <img
        onClick={() => navigate("/")}
        src={miafyalogo}
        alt="miafya"
        width={90}
        className="cursor-pointer"
      />
      <ul className="hidden md:flex items-start gap-5 font-medium bg-white">
        <NavLink to="/">
          <li className="py-1 hover:bg-blue-100 rounded-full px-3 text-teal-700">
            HOME
          </li>
        </NavLink>
        <NavLink to="/healthprofesionals">
          <li className="py-1 hover:bg-blue-100 rounded-full px-3 text-teal-700">
            HEALTH PROFESSIONALS
          </li>
        </NavLink>
        <NavLink to="/healthfacilities">
          <li className="py-1 hover:bg-blue-100 rounded-full px-3 text-teal-700">
            HEALTH FACILITIES
          </li>
        </NavLink>
        <NavLink to="/login">
          <li className="py-1 hover:bg-blue-100 rounded-full px-3 text-teal-700">
            LOGIN
          </li>
        </NavLink>
        <NavLink to="/about">
          <li className="py-1 hover:bg-blue-100 rounded-full px-3 text-teal-700">
            ABOUT US
          </li>
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
                  Log-in
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            className="bg-primary text-white px-2 py-2 rounded-2xl font-light hidden md:block cursor-pointer"
            onClick={() => navigate("/authonboard")}
          >
            Get started
          </button>
        )}
        <img
          onClick={() => setShowMenu(true)}
          className="w-10 md:hidden cursor-pointer"
          src={menu}
          alt="menu-icon"
        />
        {/* mobile menu */}
        <div
          className={` ${showMenu ? "fixed w-full" : "h-0 w-0"} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}
        >
          <div className="flex items-center justify-between px-5 py-6">
            <img
              onClick={() => navigate("/")}
              className="cursor pointer w-36"
              src={miafyalogo}
              alt="logo-icon"
            />
            <img
              className="cursor-pointer w-7"
              onClick={() => setShowMenu(false)}
              src=""
              alt="cross-icon"
            />
          </div>
          <ul className="flex flex-col items-start gap-2 mt-5 px-5 text-lg font-medium">
            <NavLink
              className="px-4 py-2 rounded-full inline-block hover:bg-teal-300"
              onClick={() => setShowMenu(false)}
              to="/"
            >
              HOME
            </NavLink>
            <NavLink
              className="px-4 py-2 rounded-full inline-block hover:bg-teal-300"
              onClick={() => setShowMenu(false)}
              to="healthprofesionals"
            >
              HEALTH PROFESSIONALS
            </NavLink>
            <NavLink
              className="px-4 py-2 rounded-full inline-block hover:bg-teal-300"
              onClick={() => setShowMenu(false)}
              to="healthfacilities"
            >
              HEALTH FACILITIES
            </NavLink>
            <NavLink
              className="px-4 py-2 rounded-full inline-block hover:bg-teal-300"
              onClick={() => setShowMenu(false)}
              to="contact"
            >
              CONTACT
            </NavLink>
            <NavLink
              className="px-4 py-2 rounded-full inline-block hover:bg-teal-300"
              onClick={() => setShowMenu(false)}
              to="login"
            >
              LOGIN
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
