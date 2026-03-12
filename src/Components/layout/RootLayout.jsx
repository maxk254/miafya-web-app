import React from 'react';
import Footer from '../Footer'
import Navbar from './Navbar';
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