import React from 'react'
import Navbar from '../assets/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../assets/Components/Footer'

const RootLayout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default RootLayout