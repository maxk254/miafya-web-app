import React from 'react';
import Footer from '../assets/Components/Footer'
import Navbar from '../assets/Navbar';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <>
      <div className="">
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default RootLayout