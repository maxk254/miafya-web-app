import React from 'react'
import './App.css'
import Navbar from './assets/Navbar'
import Home from './pages/Home'
import Signup from "./pages/Signup";
import Healthservices from './pages/Healthservices'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import Login from './pages/Login'
import Aboutus from './pages/Aboutus'
import RootLayout from './layout/RootLayout';
import ContactLayout from './layout/ContactLayout';
import ContactInfo from './assets/ContactInfo';
import ContactForm from './assets/ContactForm';
const App =() =>{


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="healthservices" element={<Healthservices />} />
        <Route path="about" element={<Aboutus />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="contact" element={<ContactLayout />}>
          <Route path="info" element={<ContactInfo/>} />
          <Route path="form" element={<ContactForm/>} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App
