import React from "react";
import "./App.css";
// import Navbar from "./assets/Navbar";
import Home from "./pages/public/Home";
import Healthprofessionals from "./pages/public/Healthprofessionals";
import {Route,createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom";
import AuthOnboard from "./pages/auth/Signup";
// import Healthfacilities from "./pages/Healthfacilities";
import RootLayout from "./Components/layout/RootLayout";
import Contact from "./pages/public/Contact";
import Myprofile from "./pages/patients/Myprofile";
import Myappointments from "./pages/patients/Myappointments";
import About from "./pages/public/About";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import Facilities from "./Components/sections/facilities/Facilities";
// import Appointment from "./pages/Appointment"; TO REPLACE THIS WITH MYAPPINTMENT FILE ON THE PATIENT FOLDER

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="healthprofesionals" element={<Healthprofessionals />} />
        {/* <Route path="healthfacilities" element={<Healthfacilities />} /> */}
        <Route path="authonboard" element={<AuthOnboard />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="contact" element={<Contact />}></Route>
        <Route path="facilities" element={<Facilities/>}></Route>
        <Route path="Myprofile" element={<Myprofile />} />
        <Route path="Myappointment" element={<Myappointments />} />
        {/* <Route path="appointment/:docId" element={<Appointment />} />   {TO REPLACE THIS WITH THE MYAPPOINTMENT FILE ON THE PATIENT FOLDER} */}
        <Route path="about" element={<About />} />
        {/* <Route path="facilityReg" element={<FacilityReg />} />
        <Route path="docReg" element={<DocReg />} /> */}
        <Route
          path="healthprofesionals/:speciality"
          element={<Healthprofessionals />}
        />
      </Route>,
    ),
  );

  return (
    <div className="mx-4 sm:mx-[10%]">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
