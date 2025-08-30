import React from 'react'
import './App.css';
import Navbar from './assets/Navbar'
import Home from './pages/Home'
import Healthprofessionals from './pages/Healthprofessionals';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import Login from './pages/Login';
import Healthfacilities from "./pages/Healthfacilities";
import RootLayout from './layout/RootLayout';
import ContactLayout from './layout/ContactLayout';
import ContactInfo from './assets/ContactInfo';
import ContactForm from './assets/ContactForm';
const App =() =>{

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="healthprofesionals" element={<Healthprofessionals />} />
        <Route path="healthfacilities" element={<Healthfacilities />} />
        <Route path="login" element={<Login />} />
        <Route path="contact" element={<ContactLayout />}>
          <Route path="info" element={<ContactInfo />} />
          <Route path="form" element={<ContactForm />} />
        </Route>
      </Route>
    )
  );

    return (
      <div className='mx-4 sm:mx-[10%]'>
        <RouterProvider router={router} />
      </div>
    ); 
}

export default App
