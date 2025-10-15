import React from "react";
import "./App.css";
// import Navbar from "./assets/Navbar";
import Home from "./pages/Home";
import Healthprofessionals from "./pages/Healthprofessionals";
import {Route,createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom";
import Login from "./pages/Login";
import Healthfacilities from "./pages/Healthfacilities";
import RootLayout from "./layout/RootLayout";
import Contact from "./pages/Contact";
import Myprofile from "./pages/Myprofile";
import Myappointments from "./pages/Myappointments";
import About from "./pages/About";
import Appointment from "./pages/Appointment";
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="healthprofesionals" element={<Healthprofessionals />} />
        <Route path="healthfacilities" element={<Healthfacilities />} />
        <Route path="login" element={<Login />} />
        <Route path="contact" element={<Contact />}></Route>
        <Route path="Myprofile" element={<Myprofile />} />
        <Route path="Myappointment" element={<Myappointments />} />
        <Route path="appointment/:docId" element={<Appointment />} />
        <Route path="about" element={<About />} />
        <Route path="healthprofesionals/:speciality"element={<Healthprofessionals />}/>
      </Route>
    )
  );

  return (
    <div className="mx-4 sm:mx-[10%]">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
